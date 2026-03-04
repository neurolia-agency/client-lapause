/**
 * generate-texture.mjs
 * Generates a warm paper/leather texture using DALL-E 3
 * Output: carte/assets/texture-fond.webp
 *
 * Usage: OPENAI_API_KEY=sk-... node carte/generate-texture.mjs
 * Run from: clients/la-pause-restaurant/
 */

import { readFileSync } from "node:fs";
import { writeFile, mkdir } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env from repo root
try {
  const envPath = resolve(__dirname, "..", "..", "..", ".env");
  const envContent = readFileSync(envPath, "utf-8");
  for (const line of envContent.split("\n")) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith("#")) continue;
    const idx = trimmed.indexOf("=");
    if (idx === -1) continue;
    const key = trimmed.slice(0, idx).trim();
    const val = trimmed.slice(idx + 1).trim();
    if (val && !process.env[key]) process.env[key] = val;
  }
} catch {
  // .env not found — rely on env vars
}
const OUTPUT_PATH = resolve(__dirname, "assets", "texture-fond.webp");

const PROMPT = [
  "Seamless warm organic texture for a restaurant menu cover background.",
  "Dark brown base color exactly #210c09.",
  "Subtle grain reminiscent of aged parchment paper and warm leather.",
  "Very fine, organic, irregular grain — no recognizable patterns, no text, no objects.",
  "Slightly warmer highlights in deep amber and burnt sienna tones blending naturally.",
  "Matte finish, no glossy reflections.",
  "Suitable as a background texture for print design at 300 DPI.",
].join(" ");

async function generateTexture() {
  const apiKey = process.env.OPENAI_API_KEY;
  if (!apiKey) {
    console.error("Error: OPENAI_API_KEY environment variable is required.");
    console.error("Usage: OPENAI_API_KEY=sk-... node carte/generate-texture.mjs");
    process.exit(1);
  }

  console.log("Generating texture with gpt-image-1...");
  console.log(`Prompt: ${PROMPT}\n`);

  const response = await fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: "gpt-image-1.5",
      prompt: PROMPT,
      size: "1024x1024",
    }),
  });

  if (!response.ok) {
    const txt = await response.text();
    console.error("Images API error:", response.status, txt);
    process.exit(1);
  }

  const data = await response.json();
  const item = data.data?.[0];
  let imgBuffer;

  if (item?.b64_json) {
    imgBuffer = Buffer.from(item.b64_json, "base64");
  } else if (item?.url) {
    console.log("Downloading generated image...");
    const imgResponse = await fetch(item.url);
    if (!imgResponse.ok) {
      console.error("Failed to download image:", imgResponse.status);
      process.exit(1);
    }
    imgBuffer = Buffer.from(await imgResponse.arrayBuffer());
  } else {
    console.error("No image returned (no b64_json or url). Full response:", data);
    process.exit(1);
  }

  if (item?.revised_prompt) {
    console.log(`Revised prompt: ${item.revised_prompt}\n`);
  }

  // Convert to WebP via sharp if available, otherwise save as PNG
  try {
    const sharp = await import("sharp");
    const webpBuffer = await sharp.default(imgBuffer).webp({ quality: 90 }).toBuffer();
    await mkdir(dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(OUTPUT_PATH, webpBuffer);
    console.log(`Texture saved as WebP: ${OUTPUT_PATH} (${(webpBuffer.length / 1024).toFixed(0)} KB)`);
  } catch {
    const pngPath = OUTPUT_PATH.replace(".webp", ".png");
    await mkdir(dirname(OUTPUT_PATH), { recursive: true });
    await writeFile(pngPath, imgBuffer);
    console.log(`sharp not available — texture saved as PNG: ${pngPath} (${(imgBuffer.length / 1024).toFixed(0)} KB)`);
    console.log("The HTML will work with the PNG — just update the background-image path if needed.");
  }
}

generateTexture().catch((err) => {
  console.error("Unexpected error:", err);
  process.exit(1);
});
