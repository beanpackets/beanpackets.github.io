/* Builds public/og.png, the 1200x630 social preview card.
   Text is drawn as vector here, not by an image model, so it stays crisp and
   says exactly what it should. Colors match the site's ANSI palette.
   Rerun after changing the hero art or the title: node scripts/make-og.mjs
   Uses sharp, already an Astro dependency. */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const SRC = resolve(here, '../src/assets/hero-network.png');
const OUT = resolve(here, '../public/og.png');

const W = 1200;
const H = 630;

const NAME = 'Matthew Bean';
const ROLE = 'IT Support &amp; Network Professional';
const META = 'San Diego, CA  /  help desk  /  hardware  /  CCNA in progress';

const overlay = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="scrim" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#0a0d14" stop-opacity="0.97"/>
      <stop offset="52%"  stop-color="#0a0d14" stop-opacity="0.86"/>
      <stop offset="100%" stop-color="#0a0d14" stop-opacity="0.30"/>
    </linearGradient>
    <linearGradient id="rule" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#5b9dff" stop-opacity="1"/>
      <stop offset="50%"  stop-color="#2dd4e8" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#46d17f" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <rect width="${W}" height="${H}" fill="url(#scrim)"/>

  <g font-family="Segoe UI, Helvetica Neue, Arial, sans-serif">
    <circle cx="76" cy="112" r="6" fill="#46d17f"/>
    <text x="96" y="119" font-size="21" fill="#46d17f" letter-spacing="2.2"
          font-family="Consolas, Menlo, monospace">AVAILABLE FULL-TIME</text>

    <text x="72" y="272" font-size="92" font-weight="700" fill="#e8edf4"
          letter-spacing="-2.5">${NAME}</text>

    <rect x="74" y="312" width="560" height="3" fill="url(#rule)"/>

    <text x="72" y="392" font-size="42" font-weight="500" fill="#2dd4e8"
          letter-spacing="-0.6">${ROLE}</text>

    <text x="72" y="470" font-size="25" fill="#8a95a8">${META}</text>

    <text x="72" y="556" font-size="23" fill="#8a95a8"
          font-family="Consolas, Menlo, monospace">github.com/beanpackets</text>
  </g>
</svg>
`);

const card = await sharp(SRC)
  .resize(W, H, { fit: 'cover', position: 'right' })
  .composite([{ input: overlay, top: 0, left: 0 }])
  .png({ quality: 90, compressionLevel: 9 })
  .toBuffer();

await sharp(card).toFile(OUT);

const { size } = await import('node:fs/promises').then((fs) => fs.stat(OUT));
console.log(`og.png written, ${W}x${H}, ${(size / 1024).toFixed(0)} kB`);
