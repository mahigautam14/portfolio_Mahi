import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public/assets');
fs.mkdirSync(outDir, { recursive: true });

const src = fs.existsSync('pic.png') ? 'pic.png' : 'pic1.jpeg';

async function build() {
  for (const size of [480, 720, 1080]) {
    await sharp(src)
      .resize(size, size, { fit: 'cover' })
      .webp({ quality: 88 })
      .toFile(path.join(outDir, `portrait-${size}.webp`));
  }
  await sharp(src)
    .webp({ quality: 90 })
    .toFile(path.join(outDir, 'portrait.webp'));
  console.log('Responsive WebP portraits generated in public/assets/');
}

build().catch(console.error);
