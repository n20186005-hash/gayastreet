/**
 * Generates the responsive WebP variants used by the site plus the OG cover.
 *
 * Source photos live in public/gallery/*.jpg (large camera originals). Running
 * this script writes, next to each original:
 *   <name>-600.webp   — gallery grid / small screens
 *   <name>-1400.webp  — hero, section photos, lightbox
 * and public/og-cover.jpg (1200×630) for social sharing.
 *
 * Usage:  node scripts/optimize-images.mjs
 */
import { readdir } from 'node:fs/promises';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const galleryDir = path.join(root, 'public', 'gallery');
const WIDTHS = [600, 1400];
const HERO = 'gaya-street-market-3.jpg';

const files = (await readdir(galleryDir)).filter((f) => /\.jpe?g$/i.test(f));
if (!files.length) {
  console.error('No JPEG files found in public/gallery');
  process.exit(1);
}

for (const file of files) {
  const base = file.replace(/\.jpe?g$/i, '');
  const input = path.join(galleryDir, file);
  for (const width of WIDTHS) {
    const output = path.join(galleryDir, `${base}-${width}.webp`);
    await sharp(input)
      .rotate()
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: width <= 600 ? 68 : 74 })
      .toFile(output);
    console.log(`${path.relative(root, output)}`);
  }
}

const ogOutput = path.join(root, 'public', 'og-cover.jpg');
await sharp(path.join(galleryDir, HERO))
  .rotate()
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .jpeg({ quality: 78, mozjpeg: true })
  .toFile(ogOutput);
console.log(path.relative(root, ogOutput));
