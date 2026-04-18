import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const DIRECTORY = './src/assets';
const MAX_WIDTH = 1080;

async function processImages() {
  const files = fs.readdirSync(DIRECTORY);
  for (const file of files) {
    if (file.match(/\.(png|jpg|jpeg)$/i)) {
      const filePath = path.join(DIRECTORY, file);
      const parsed = path.parse(filePath);
      const webpPath = path.join(DIRECTORY, `${parsed.name}.webp`);

      const metadata = await sharp(filePath).metadata();
      const needsResize = metadata.width > MAX_WIDTH;
      const needsWebp = !file.endsWith('.webp');

      if (needsResize || needsWebp) {
        let pipeline = sharp(filePath);
        if (needsResize) pipeline = pipeline.resize(MAX_WIDTH);
        
        await pipeline
          .webp({ quality: 80 })
          .toFile(webpPath);
        
        console.log(`Processed ${file} -> ${parsed.name}.webp`);
        if (file !== `${parsed.name}.webp`) {
            fs.unlinkSync(filePath); // remove old file
        }
      }
    }
  }
}

processImages().catch(console.error);
