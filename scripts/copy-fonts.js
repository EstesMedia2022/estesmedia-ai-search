/**
 * Copies the exact font files the site uses out of node_modules and into
 * public/fonts, under stable (unhashed) names.
 *
 * Self-hosting them from public/ instead of importing the @fontsource CSS
 * means the @font-face URLs are known at build time, so index.html can
 * <link rel="preload"> them. Fonts imported through CSS are only discovered
 * after the stylesheet parses, which delays the headline paint.
 *
 * Only the latin subset is copied. The site is English-only, so shipping
 * latin-ext/cyrillic/greek/vietnamese just bloats the build output.
 */
import fs from 'fs';
import path from 'path';

const OUT_DIR = './public/fonts';

const FONTS = [
  '@fontsource/montserrat/files/montserrat-latin-400-normal.woff2',
  '@fontsource/montserrat/files/montserrat-latin-700-normal.woff2',
  '@fontsource/montserrat/files/montserrat-latin-800-normal.woff2',
  '@fontsource/dm-serif-display/files/dm-serif-display-latin-400-normal.woff2',
  '@fontsource/dm-serif-display/files/dm-serif-display-latin-400-italic.woff2',
];

fs.mkdirSync(OUT_DIR, { recursive: true });

for (const spec of FONTS) {
  const src = path.join('./node_modules', spec);
  const dest = path.join(OUT_DIR, path.basename(spec));

  if (!fs.existsSync(src)) {
    console.warn(`copy-fonts: ${spec} not found in node_modules, keeping existing ${dest}`);
    continue;
  }

  fs.copyFileSync(src, dest);
  console.log(`copy-fonts: ${path.basename(spec)} (${(fs.statSync(dest).size / 1024).toFixed(1)} KB)`);
}
