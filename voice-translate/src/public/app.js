const TRANSLATION_CALL_URL =
  "https://api.openai.com/v1/realtime/translations/calls";
const TARGET_LANGUAGE = "en";
const API_BASE = resolveApiBase();

const OUTPUT_TRANSCRIPT_EVENTS = new Set(["session.output_transcript.delta"]);
const INPUT_TRANSCRIPT_EVENTS = new Set(["session.input_transcript.delta"]);

const startButton = document.querySelector("#startButton");
const stopButton = document.querySelector("#stopButton");
const statusDot = document.querySelector("#statusDot");
const statusText = document.querySelector("#statusText");
const inputMeter = document.querySelector("#inputMeter");
const queueProgress = document.querySelector("#queueProgress");
const sourceTranscript = document.querySelector("#sourceTranscript");
const translatedTranscript = document.querySelector("#translatedTranscript");
const eventLog = document.querySelector("#eventLog");
const captureState = document.querySelector("#captureState");
const chunksSent = document.querySelector("#chunksSent");
const activeInputFrames = document.querySelector("#activeInputFrames");
const peakInputLevel = document.querySelector("#peakInputLevel");
const outputAudioDeltas = document.querySelector("#outputAudioDeltas");
const sourceTranscriptDeltas = document.querySelector("#sourceTranscriptDeltas");
const transcriptDeltas = document.querySelector("#transcriptDeltas");
const lastEventType = document.querySelector("#lastEventType");

let peerConnection = null;
let dataChannel = null;
let captureStream = null;
let meterContext = null;
let meterSource = null;
let meterAnalyser = null;
let meterTimer = null;
let translatedAudio = null;
let diagnostics = createEmptyDiagnostics();

startButton.addEventListener("click", async () => {
  clearTranscript();
  resetDiagnostics();
  setControls({ running: true });
  setStatus("请允许麦克风访问", "idle");

  try {
    captureStream = await captureMicrophone();
    startInputMeter(captureStream);

    setStatus("正在创建翻译会话", "idle");
    const session = await createSession();

    setStatus("正在连接 WebRTC", "idle");
    await connectRealtimeTranslation(session, captureStream);

    setStatus("正在听并翻译", "live");
  } catch (error) {
    logEvent("error", error instanceof Error ? error.message : String(error));
    await stop("启动失败，已停止", "error");
  }
});

stopButton.addEventListener("click", async () => {
  await stop("已停止", "idle");
});

async function createSession() {
  const response = await fetch(buildApiUrl("/session"), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ targetLanguage: TARGET_LANGUAGE }),
  });

  const body = await response.json();
  if (!response.ok) {
    throw new Error(body.error ?? "创建会话失败。");
  }

  return body;
}

async function connectRealtimeTranslation(session, stream) {
  peerConnection = new RTCPeerConnection();
  dataChannel = peerConnection.createDataChannel("oai-events");

  translatedAudio = new Audio();
  translatedAudio.autoplay = true;
  translatedAudio.playsInline = true;

  peerConnection.onconnectionstatechange = () => {
    diagnostics.connectionState = peerConnection?.connectionState ?? "closed";
    logEvent("webrtc.connection", diagnostics.connectionState);
    updateDiagnostics();
  };

  peerConnection.oniceconnectionstatechange = () => {
    diagnostics.iceConnectionState =
      peerConnection?.iceConnectionState ?? "closed";
    queueProgress.value =
      diagnostics.iceConnectionState === "connected" ||
      diagnostics.iceConnectionState === "completed"
        ? 1
        : 0;
    updateDiagnostics();
  };

  peerConnection.ontrack = ({ streams }) => {
    diagnostics.remoteAudioTracks += 1;
    translatedAudio.srcObject = streams[0];
    void translatedAudio.play().catch((error) => {
      logEvent("audio.play", error.message);
    });
    logEvent("remote.audio", "已收到音频轨道");
    updateDiagnostics();
  };

  dataChannel.onopen = () => {
    diagnostics.dataChannelState = dataChannel?.readyState ?? "open";
    logEvent("datachannel.open", "ok");
    updateDiagnostics();
  };
  dataChannel.onclose = () => {
    diagnostics.dataChannelState = "closed";
    logEvent("datachannel.close", "closed");
    updateDiagnostics();
  };
  dataChannel.onerror = () => {
    logEvent("datachannel.error", "error");
  };
  dataChannel.onmessage = handleRealtimeEvent;

  for (const track of stream.getAudioTracks()) {
    peerConnection.addTrack(track, stream);
  }

  const offer = await peerConnection.createOffer();
  await peerConnection.setLocalDescription(offer);

  const sdpResponse = await fetch(TRANSLATION_CALL_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${session.client_secret}`,
      "Content-Type": "application/sdp",
    },
    body: offer.sdp,
  });

  const answerSdp = await sdpResponse.text();
  if (!sdpResponse.ok) {
    throw new Error(answerSdp);
  }

  await peerConnection.setRemoteDescription({
    type: "answer",
    sdp: answerSdp,
  });

  logEvent("webrtc.offer", `已连接，输出语言=${session.targetLanguage}`);
}

async function captureMicrophone() {
  if (!navigator.mediaDevices?.getUserMedia) {
    throw new Error("这个浏览器不支持麦克风采集。");
  }

  const stream = await navigator.mediaDevices.getUserMedia({
    audio: {
      autoGainControl: true,
      channelCount: 1,
      echoCancellation: true,
      noiseSuppression: true,
    },
  });

  const audioTracks = stream.getAudioTracks();
  if (audioTracks.length === 0) {
    stream.getTracks().forEach((track) => track.stop());
    throw new Error("没有获取到麦克风音频。");
  }

  audioTracks[0].addEventListener(
    "ended",
    () => {
      void stop("麦克风共享已结束", "idle");
    },
    { once: true },
  );

  const audioSettings = audioTracks[0].getSettings?.() ?? {};
  captureState.textContent = `音频=${audioTracks[0].readyState}，采样率=${audioSettings.sampleRate ?? "未知"}`;
  logEvent("capture.started", `音轨数量=${audioTracks.length}`);

  return stream;
}

function startInputMeter(stream) {
  meterContext = new AudioContext();
  meterSource = meterContext.createMediaStreamSource(stream);
  meterAnalyser = meterContext.createAnalyser();
  meterAnalyser.fftSize = 2048;
  meterSource.connect(meterAnalyser);

  const samples = new Float32Array(meterAnalyser.fftSize);
  meterTimer = window.setInterval(() => {
    meterAnalyser.getFloatTimeDomainData(samples);
    let sum = 0;
    for (const sample of samples) {
      sum += sample * sample;
    }
    const rms = Math.sqrt(sum / samples.length);
    inputMeter.value = Math.min(1, rms * 12);
    diagnostics.peakInputLevel = Math.max(diagnostics.peakInputLevel, rms);
    updateDiagnostics();
  }, 100);
}

function handleRealtimeEvent(message) {
  let event;
  try {
    event = JSON.parse(message.data);
  } catch {
    logEvent("message", "收到非 JSON 的数据通道消息。");
    return;
  }

  diagnostics.lastEventType = event.type;

  if (event.type === "error") {
    logEvent("error", JSON.stringify(event.error ?? event));
    updateDiagnostics();
    return;
  }

  if (OUTPUT_TRANSCRIPT_EVENTS.has(event.type) && typeof event.delta === "string") {
    diagnostics.transcriptDeltas += 1;
    appendTranslatedText(event.delta);
    updateDiagnostics();
    return;
  }

  if (INPUT_TRANSCRIPT_EVENTS.has(event.type) && typeof event.delta === "string") {
    diagnostics.sourceTranscriptDeltas += 1;
    appendSourceText(event.delta);
    updateDiagnostics();
    return;
  }

  if (
    event.type === "session.created" ||
    event.type === "session.updated" ||
    event.type === "output_audio_buffer.started"
  ) {
    logEvent(event.type, "ok");
  }

  updateDiagnostics();
}

async function stop(message, state = "idle") {
  if (meterTimer) {
    window.clearInterval(meterTimer);
    meterTimer = null;
  }

  meterSource?.disconnect();
  meterAnalyser?.disconnect();
  meterSource = null;
  meterAnalyser = null;

  if (meterContext?.state !== "closed") {
    await meterContext?.close();
  }
  meterContext = null;

  dataChannel?.close();
  dataChannel = null;

  peerConnection?.close();
  peerConnection = null;

  captureStream?.getTracks().forEach((track) => track.stop());
  captureStream = null;

  if (translatedAudio) {
    translatedAudio.pause();
    translatedAudio.srcObject = null;
  }
  translatedAudio = null;

  inputMeter.value = 0;
  queueProgress.value = 0;
  setControls({ running: false });
  setStatus(message, state);
}

function setControls({ running }) {
  startButton.disabled = running;
  stopButton.disabled = !running;
}

function setStatus(message, state) {
  statusText.textContent = message;
  statusDot.className = `status-dot ${state === "live" ? "live" : ""} ${
    state === "error" ? "error" : ""
  }`;
}

function appendSourceText(text) {
  sourceTranscript.textContent += text;
  sourceTranscript.scrollTop = sourceTranscript.scrollHeight;
}

function appendTranslatedText(text) {
  translatedTranscript.textContent += text;
  translatedTranscript.scrollTop = translatedTranscript.scrollHeight;
}

function clearTranscript() {
  sourceTranscript.textContent = "";
  translatedTranscript.textContent = "";
}

function createEmptyDiagnostics() {
  return {
    connectionState: "new",
    dataChannelState: "connecting",
    iceConnectionState: "new",
    lastEventType: "none",
    peakInputLevel: 0,
    remoteAudioTracks: 0,
    sourceTranscriptDeltas: 0,
    transcriptDeltas: 0,
  };
}

function resetDiagnostics() {
  diagnostics = createEmptyDiagnostics();
  captureState.textContent = "正在启动";
  eventLog.textContent = "";
  updateDiagnostics();
}

function updateDiagnostics() {
  chunksSent.textContent = diagnostics.connectionState;
  activeInputFrames.textContent = diagnostics.dataChannelState;
  peakInputLevel.textContent = diagnostics.peakInputLevel.toFixed(3);
  outputAudioDeltas.textContent = String(diagnostics.remoteAudioTracks);
  sourceTranscriptDeltas.textContent = String(diagnostics.sourceTranscriptDeltas);
  transcriptDeltas.textContent = String(diagnostics.transcriptDeltas);
  lastEventType.textContent = diagnostics.lastEventType;
}

function logEvent(type, detail) {
  const entry = document.createElement("div");
  entry.className = "log-entry";
  entry.textContent = `[${new Date().toLocaleTimeString()}] ${type}: ${detail}`;
  eventLog.append(entry);
  eventLog.scrollTop = eventLog.scrollHeight;
}

function buildApiUrl(path) {
  return API_BASE ? `${API_BASE}${path}` : path;
}

function resolveApiBase() {
  const url = new URL(window.location.href);
  const queryValue = url.searchParams.get("api");
  const globalValue = window.VOICE_TRANSLATE_API_BASE;
  const value = typeof queryValue === "string" && queryValue
    ? queryValue
    : typeof globalValue === "string"
      ? globalValue
      : "";

  if (!value) {
    return "";
  }

  return value.endsWith("/") ? value.slice(0, -1) : value;
}
