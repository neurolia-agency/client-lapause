#!/usr/bin/env node
/**
 * Génère un PDF qualité impression de la carte sur place.
 *
 * Contraintes imprimeur respectées :
 * - Format : A4 paysage (297 × 210 mm) exact
 * - Marges : 0 (bord-à-bord)
 * - Arrière-plans / couleurs : forcés via printBackground
 * - Texte et SVG : vectoriels (non rasterisés)
 * - Images : résolution native embarquée
 * - Scale : 1 (pas de redimensionnement)
 *
 * Note pour l'imprimeur :
 * - Pas de fond perdu (bleed) dans ce fichier — ajouter 3mm si nécessaire
 * - Colorimétrie RGB (sRGB) — conversion CMYK à faire si requise
 * - Traits de coupe à ajouter côté imprimeur si besoin
 */

import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const INPUT = path.join(__dirname, 'carte-sur-place.html');
const OUTPUT = path.join(__dirname, 'carte-sur-place-print.pdf');

async function generate() {
  const browser = await puppeteer.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--font-render-hinting=none',       // meilleur rendu typo
      '--disable-lcd-text',                // pas de sous-pixel (propreté impression)
      '--force-color-profile=srgb',        // profil couleur cohérent
    ],
  });

  const page = await browser.newPage();

  // Charger le fichier HTML local
  await page.goto(`file://${INPUT}`, {
    waitUntil: 'networkidle0',
    timeout: 30000,
  });

  // Attendre le chargement complet des fonts Google et images
  await page.evaluateHandle('document.fonts.ready');
  await page.waitForFunction(() => {
    const imgs = document.querySelectorAll('img');
    return Array.from(imgs).every(img => img.complete && img.naturalHeight > 0);
  }, { timeout: 15000 });

  // Générer le PDF
  await page.pdf({
    path: OUTPUT,
    width: '297mm',
    height: '210mm',
    printBackground: true,
    preferCSSPageSize: true,
    scale: 1,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
    displayHeaderFooter: false,
    tagged: false,
  });

  await browser.close();
  console.log(`PDF generé : ${OUTPUT}`);
}

generate().catch(err => {
  console.error('Erreur:', err);
  process.exit(1);
});
