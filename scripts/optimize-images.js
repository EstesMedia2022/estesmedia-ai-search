/**
 * Re-encodes everything in src/assets to webp at the size it is actually
 * rendered at, capped to 2x for retina.
 *
 * The originals are all 1080px wide regardless of whether they render at
 * 1080px or 47px, so most of the image weight on the page was being thrown
 * away by the browser during downscale. MAX_WIDTH below is per-asset: it is
 * roughly 2x the largest CSS width the asset is displayed at.
 *
 * Running this is idempotent — an asset already at or below its target width
 * is left alone, so re-running never compounds compression artifacts.
 */
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIRECTORY = './src/assets';
const DEFAULT_MAX_WIDTH = 1080;
const QUALITY = 78;

// asset -> max width in px (2x the largest rendered CSS width)
const MAX_WIDTH = {
  // Navbar (48px tall) and footer (96px tall), near-square logo
  'estes-media-logo.webp': 220,
  // Hero "Show Up Here" row — rendered 47-73px tall, monochrome silhouettes
  'chatgpt-logo.webp': 400,
  'claude-logo.webp': 380,
  'gemini-logo.webp': 280,
  // Trust strip badges, rendered 56px tall
  'award-1.webp': 120,
  'award-2.webp': 120,
  // Mascot feature row, rendered 180px tall
  'mascot-1.webp': 380,
  'mascot-2.webp': 360,
  'mascot-3.webp': 360,
  // CTA / thank-you mascot, rendered 300px tall
  'cta-mascot.webp': 620,
  // Case study cards — full card width on a 1200px grid
  'malone-roofing.webp': 1080,
  'total-wrecking.webp': 1080,
};

async function processImages() {
  let before = 0;
  let after = 0;

  for (const file of fs.readdirSync(DIRECTORY).sort()) {
    if (!/\.(png|jpe?g|webp)$/i.test(file)) continue;

    const filePath = path.join(DIRECTORY, file);
    const parsed = path.parse(filePath);
    const webpPath = path.join(DIRECTORY, `${parsed.name}.webp`);
    const target = MAX_WIDTH[`${parsed.name}.webp`] ?? DEFAULT_MAX_WIDTH;

    const startSize = fs.statSync(filePath).size;
    const metadata = await sharp(filePath).metadata();

    const needsResize = metadata.width > target;
    const needsWebp = !/\.webp$/i.test(file);

    if (!needsResize && !needsWebp) {
      before += startSize;
      after += startSize;
      continue;
    }

    let pipeline = sharp(filePath);
    if (needsResize) pipeline = pipeline.resize({ width: target });

    const buffer = await pipeline.webp({ quality: QUALITY, effort: 6 }).toBuffer();

    if (file !== `${parsed.name}.webp`) fs.unlinkSync(filePath);
    fs.writeFileSync(webpPath, buffer);

    before += startSize;
    after += buffer.length;
    console.log(
      `${file} ${metadata.width}px -> ${needsResize ? target : metadata.width}px  ` +
        `${(startSize / 1024).toFixed(1)}KB -> ${(buffer.length / 1024).toFixed(1)}KB`,
    );
  }

  console.log(`\ntotal: ${(before / 1024).toFixed(0)}KB -> ${(after / 1024).toFixed(0)}KB`);
}

processImages().catch((err) => {
  console.error(err);
  process.exit(1);
});
