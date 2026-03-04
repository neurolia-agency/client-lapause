/**
 * generate-pdf.mjs
 * Generates a print-ready PDF from carte-boissons-recto.html using Puppeteer
 * Output: carte/carte-boissons-recto.pdf
 *
 * Usage: node carte/generate-pdf.mjs
 *   or:  npx puppeteer carte/generate-pdf.mjs  (if puppeteer not installed globally)
 * Run from: clients/la-pause-restaurant/
 */

import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const HTML_PATH = resolve(__dirname, "carte-boissons-recto.html");
const PDF_PATH = resolve(__dirname, "carte-boissons-recto.pdf");

async function generatePDF() {
  let puppeteer;
  try {
    puppeteer = await import("puppeteer");
  } catch {
    console.error("Puppeteer not found. Install it:");
    console.error("  npm install puppeteer");
    console.error("  or: npx puppeteer browsers install chrome");
    process.exit(1);
  }

  console.log("Launching browser...");
  const browser = await puppeteer.default.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  const page = await browser.newPage();

  console.log(`Loading ${HTML_PATH}...`);
  await page.goto(`file://${HTML_PATH}`, {
    waitUntil: "networkidle0",
    timeout: 30000,
  });

  // Wait for fonts to load
  await page.evaluateHandle("document.fonts.ready");

  // Small extra delay for any CSS transitions/rendering
  await new Promise((r) => setTimeout(r, 1000));

  console.log("Generating PDF...");
  await page.pdf({
    path: PDF_PATH,
    width: "420mm",
    height: "297mm",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
    preferCSSPageSize: true,
  });

  await browser.close();

  console.log(`PDF generated: ${PDF_PATH}`);
  console.log("Format: A3 landscape (420mm x 297mm)");
  console.log("Open the PDF to verify quality before printing.");
}

generatePDF().catch((err) => {
  console.error("Error generating PDF:", err);
  process.exit(1);
});
