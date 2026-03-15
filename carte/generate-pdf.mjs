import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { execSync } from 'child_process';
import path from 'path';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const configs = [
  {
    name: 'panneau-emporter',
    input: path.join(__dirname, 'emporter/panneau-emporter.html'),
    output: path.join(__dirname, 'emporter/panneau-emporter-print-mail.pdf'),
    width: '1830mm',
    height: '720mm',
  },
  {
    name: 'carte-sur-place',
    input: path.join(__dirname, 'sur-place/carte-sur-place.html'),
    output: path.join(__dirname, 'sur-place/carte-sur-place-print-mail.pdf'),
    width: '420mm',
    height: '297mm',
  },
];

async function generatePDF(browser, config) {
  console.log(`\n→ Generating: ${config.name}`);
  const page = await browser.newPage();
  page.setDefaultNavigationTimeout(120000);
  page.setDefaultTimeout(120000);

  const fileUrl = `file://${config.input}`;
  await page.goto(fileUrl, { waitUntil: ['load', 'networkidle0'], timeout: 120000 });

  // Wait for fonts and rendering
  await page.evaluateHandle('document.fonts.ready');
  await new Promise(r => setTimeout(r, 3000));

  await page.pdf({
    path: config.output,
    width: config.width,
    height: config.height,
    printBackground: true,
    preferCSSPageSize: true,
    tagged: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });

  const rawStats = fs.statSync(config.output);
  const rawMB = (rawStats.size / (1024 * 1024)).toFixed(2);
  console.log(`  → Raw size: ${rawMB} MB`);

  // Compress with Ghostscript — PDF 1.4, /prepress quality, forced sRGB, explicit page size
  const compressed = config.output.replace('.pdf', '-tmp.pdf');

  // Convert mm to points (1mm = 2.83465pt)
  const widthPt = parseFloat(config.width) * 2.83465;
  const heightPt = parseFloat(config.height) * 2.83465;

  try {
    execSync(`gs -sDEVICE=pdfwrite -dCompatibilityLevel=1.4 -dPDFSETTINGS=/prepress -dAutoRotatePages=/None -sColorConversionStrategy=sRGB -sProcessColorModel=DeviceRGB -dConvertCMYKImagesToRGB=true -dEmbedAllFonts=true -dSubsetFonts=true -dCompressFonts=true -dDownsampleColorImages=false -dDownsampleGrayImages=false -dDownsampleMonoImages=false -dDEVICEWIDTHPOINTS=${widthPt.toFixed(2)} -dDEVICEHEIGHTPOINTS=${heightPt.toFixed(2)} -dFIXEDMEDIA -dBATCH -dNOPAUSE -dQUIET -sOutputFile="${compressed}" "${config.output}"`);
    fs.renameSync(compressed, config.output);
    console.log(`  → Compressed with Ghostscript (${widthPt.toFixed(0)}×${heightPt.toFixed(0)} pt)`);
  } catch {
    console.log(`  ⚠ Ghostscript not available, keeping raw PDF`);
    if (fs.existsSync(compressed)) fs.unlinkSync(compressed);
  }

  const stats = fs.statSync(config.output);
  const sizeMB = (stats.size / (1024 * 1024)).toFixed(2);
  console.log(`  ✓ ${config.output}`);
  console.log(`  → Final size: ${sizeMB} MB ${parseFloat(sizeMB) <= 12 ? '✓' : '⚠ EXCEEDS 12 MB'}`);

  await page.close();
  return { name: config.name, sizeMB: parseFloat(sizeMB), path: config.output };
}

async function main() {
  console.log('PDF Generation — La Pause');
  console.log('========================\n');

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--font-render-hinting=none',
      '--disable-lcd-text',
      '--force-color-profile=srgb',
      '--no-sandbox',
    ],
  });

  const results = [];
  for (const config of configs) {
    const result = await generatePDF(browser, config);
    results.push(result);
  }

  await browser.close();

  console.log('\n========================');
  console.log('Summary:');
  for (const r of results) {
    const status = r.sizeMB <= 12 ? '✓ OK' : '⚠ TOO LARGE';
    console.log(`  ${r.name}: ${r.sizeMB} MB [${status}]`);
  }
}

main().catch(err => {
  console.error('Error:', err);
  process.exit(1);
});
