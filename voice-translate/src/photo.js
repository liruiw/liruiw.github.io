import { OpenAIRequestError, normalizeTargetLanguage } from "./session.js";

export const DEFAULT_PHOTO_MODEL = "gpt-4.1-mini";
export const PHOTO_TRANSLATION_URL = "https://api.openai.com/v1/responses";

export function buildPhotoTranslationRequest({
  apiKey,
  imageDataUrl,
  targetLanguage,
  model = DEFAULT_PHOTO_MODEL,
}) {
  if (!apiKey) {
    throw new Error("OPENAI_API_KEY is required.");
  }
  if (typeof imageDataUrl !== "string" || !imageDataUrl.startsWith("data:image/")) {
    throw new Error("A base64 image data URL is required.");
  }

  const language = normalizeTargetLanguage(targetLanguage);
  const prompt = buildPhotoPrompt(language);

  return {
    url: PHOTO_TRANSLATION_URL,
    init: {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        instructions: "Translate only the text visible in the image.",
        input: [
          {
            role: "user",
            content: [
              { type: "input_text", text: prompt },
              {
                type: "input_image",
                image_url: imageDataUrl,
                detail: "high",
              },
            ],
          },
        ],
        model,
      }),
    },
    language,
    model,
  };
}

export async function createPhotoTranslation({
  apiKey,
  imageDataUrl,
  targetLanguage,
  model,
  fetchImpl = fetch,
}) {
  const request = buildPhotoTranslationRequest({
    apiKey,
    imageDataUrl,
    targetLanguage,
    model,
  });

  const response = await fetchImpl(request.url, request.init);
  if (!response.ok) {
    throw new OpenAIRequestError(
      response.status,
      await readResponseBodySafely(response),
    );
  }

  const data = await response.json();
  const translation = extractTranslatedText(data);

  return {
    model: request.model,
    targetLanguage: request.language,
    translation,
  };
}

export function extractTranslatedText(data) {
  if (typeof data.output_text === "string" && data.output_text.trim()) {
    return data.output_text.trim();
  }

  const parts = [];
  for (const item of data.output ?? []) {
    if (item.type !== "message" || !Array.isArray(item.content)) {
      continue;
    }
    for (const content of item.content) {
      if (content.type === "output_text" && typeof content.text === "string") {
        parts.push(content.text);
      }
    }
  }

  const translation = parts.join("").trim();
  if (!translation) {
    throw new Error("OpenAI did not return translated photo text.");
  }

  return translation;
}

function buildPhotoPrompt(language) {
  if (language === "zh") {
    return "Translate all visible text in this image into Simplified Chinese. Output only the translated text. Preserve short line breaks and ordering when practical. If no readable text is visible, output exactly: 未识别到可翻译文字。";
  }

  return "Translate all visible text in this image into English. Output only the translated text. Preserve short line breaks and ordering when practical. If no readable text is visible, output exactly: No readable text found.";
}

async function readResponseBodySafely(response) {
  try {
    return await response.text();
  } catch {
    return "";
  }
}
