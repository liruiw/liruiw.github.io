# Voice Translate

This is a small microphone-first Realtime Translation app for Chinese to
English speech. The server creates a short-lived OpenAI Realtime Translation
client secret, and the browser uses WebRTC to send microphone audio and play
translated English speech with live captions.

## Setup

Create a local `.env` file in this folder using `.env.example` as the list of
required variables.

Required:

```bash
OPENAI_API_KEY=your-openai-api-key
```

Optional:

```bash
OPENAI_TRANSLATION_MODEL=gpt-realtime-translate
OPENAI_INPUT_TRANSCRIPTION_MODEL=gpt-realtime-whisper
OPENAI_PHOTO_MODEL=gpt-4.1-mini
PORT=8787
HOST=0.0.0.0
```

## Run

```bash
cd /home/liruiw/Projects/liruiw.github.io/voice-translate
npm run dev
```

Open the printed local URL, allow microphone access, and start speaking.
You can also take a photo or select one from the camera roll to translate text
in the image.

## Validation

```bash
cd /home/liruiw/Projects/liruiw.github.io/voice-translate
npm test
```

To run a live API smoke test:

```bash
cd /home/liruiw/Projects/liruiw.github.io/voice-translate
SMOKE_TARGET_LANGUAGE=es npm run smoke
```

## Notes

- The browser uses `getUserMedia()` and sends only the microphone audio track.
- Photo translation uses the Responses API with an image input and returns text.
- WebRTC handles transport, so the browser does not need to resample audio or
  manually send PCM chunks.
- The `/session` route sends CORS headers, so you can later split the frontend
  and backend onto different origins if you move off a single server.
