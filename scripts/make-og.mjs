/* Builds public/og.png, the 1200x630 social preview card.

   Mirrors the site's editorial split: type on paper at 1.55fr, accent panel
   holding the right edge at 1fr, with the node mesh drawn in paper on the
   accent. Text is vector, not raster, so it stays crisp and says exactly what
   it should. The card is generated entirely from SVG — it no longer composites
   the dark hero artwork, which belonged to the retired ANSI theme.

   Known deviation from BRAND.md: the card uses a system sans/mono stack rather
   than IBM Plex, because sharp rasterises SVG through the OS font stack and
   Plex is not installed system-wide. Segoe UI is the closest humanist sans
   available by default. Everything else — palette, split ratio, hierarchy —
   matches the site.

   The mesh is seeded, so the card is byte-reproducible across runs.
   Rerun after changing the title or palette: node scripts/make-og.mjs
   Uses sharp, already an Astro dependency. */
import sharp from 'sharp';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const here = dirname(fileURLToPath(import.meta.url));
const OUT = resolve(here, '../public/og.png');

const W = 1200;
const H = 630;

/* 1.55fr / 1fr, the same split the hero uses. */
const SPLIT = Math.round((W * 1.55) / 2.55);
const PANEL_W = W - SPLIT;

const GROUND = '#f5f1ec';
const TEXT = '#14110f';
const MUTED = '#6b615a';
const ACCENT = '#e4572e';
const ACCENT_INK = '#a83a17';
const ON_ACCENT = '#2b0e04';
const GREEN = '#326b3f';

const SANS = 'Segoe UI, Helvetica Neue, Arial, sans-serif';
const MONO = 'Consolas, Menlo, monospace';

const NAME_1 = 'Matthew';
const NAME_2 = 'Bean';
const ROLE = 'IT support &amp; networking';
const META = 'Help desk operations  ·  Hardware diagnostics  ·  San Diego, CA';
const URL = 'beanpackets.github.io';

/* Seeded PRNG (mulberry32) so the mesh is identical on every run. */
function rng(seed) {
  return function () {
    seed |= 0;
    seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const rand = rng(20260803);
const NODE_COUNT = 26;
const LINK_DIST = 165;

const nodes = Array.from({ length: NODE_COUNT }, () => ({
  x: rand() * PANEL_W,
  y: rand() * H,
  r: 1.4 + rand() * 1.9,
}));

let mesh = '';
for (let i = 0; i < nodes.length; i++) {
  for (let j = i + 1; j < nodes.length; j++) {
    const dx = nodes[i].x - nodes[j].x;
    const dy = nodes[i].y - nodes[j].y;
    const d = Math.hypot(dx, dy);
    if (d >= LINK_DIST) continue;
    const o = ((1 - d / LINK_DIST) * 0.3).toFixed(3);
    mesh += `<line x1="${nodes[i].x.toFixed(1)}" y1="${nodes[i].y.toFixed(1)}" x2="${nodes[j].x.toFixed(1)}" y2="${nodes[j].y.toFixed(1)}" stroke="${GROUND}" stroke-opacity="${o}" stroke-width="1"/>`;
  }
}
for (const n of nodes) {
  mesh += `<circle cx="${n.x.toFixed(1)}" cy="${n.y.toFixed(1)}" r="${n.r.toFixed(1)}" fill="${GROUND}" fill-opacity="0.6"/>`;
}
/* A few packets caught mid-flight, on the first links of the mesh. */
for (let k = 0; k < 5; k++) {
  const a = nodes[k * 3];
  const b = nodes[k * 3 + 1];
  if (!a || !b) continue;
  const t = 0.3 + rand() * 0.4;
  mesh += `<circle cx="${(a.x + (b.x - a.x) * t).toFixed(1)}" cy="${(a.y + (b.y - a.y) * t).toFixed(1)}" r="2.6" fill="${GROUND}" fill-opacity="0.95"/>`;
}

const svg = Buffer.from(`
<svg width="${W}" height="${H}" xmlns="http://www.w3.org/2000/svg">
  <rect width="${W}" height="${H}" fill="${GROUND}"/>

  <g transform="translate(${SPLIT},0)">
    <rect width="${PANEL_W}" height="${H}" fill="${ACCENT}"/>
    ${mesh}
    <text x="40" y="${H - 52}" font-size="20" fill="${ON_ACCENT}" fill-opacity="0.75"
          letter-spacing="2.6" font-family="${MONO}">CCNA IN PROGRESS</text>
  </g>

  <g font-family="${SANS}">
    <text x="72" y="96" font-size="25" fill="${MUTED}" font-family="${MONO}"
          letter-spacing="0.4">bean<tspan fill="${ACCENT_INK}">.</tspan>packets</text>

    <circle cx="78" cy="189" r="6" fill="${GREEN}"/>
    <text x="98" y="196" font-size="20" fill="${GREEN}" letter-spacing="2.4"
          font-family="${MONO}">AVAILABLE FULL-TIME, ON-SITE</text>

    <text x="72" y="318" font-size="98" font-weight="600" fill="${TEXT}"
          letter-spacing="-3.4">${NAME_1}</text>
    <text x="72" y="408" font-size="98" font-weight="600" fill="${TEXT}"
          letter-spacing="-3.4">${NAME_2}</text>

    <rect x="74" y="448" width="440" height="3" fill="${ACCENT}"/>

    <text x="72" y="504" font-size="38" font-weight="500" fill="${TEXT}"
          letter-spacing="-0.8">${ROLE}</text>

    <text x="72" y="546" font-size="22" fill="${MUTED}">${META}</text>

    <text x="72" y="${H - 34}" font-size="21" fill="${MUTED}"
          font-family="${MONO}">${URL}</text>
  </g>
</svg>
`);

await sharp(svg).png({ compressionLevel: 9 }).toFile(OUT);

const { size } = await import('node:fs/promises').then((fs) => fs.stat(OUT));
console.log(`og.png written, ${W}x${H}, split ${SPLIT}/${PANEL_W}, ${(size / 1024).toFixed(0)} kB`);
