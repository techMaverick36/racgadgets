/**
 * Turns the full-size originals in images-src/ into web-sized WebP files in
 * public/images/, plus the favicon, apple-touch-icon and social share image.
 *
 * Run after adding or replacing an image:   npm run images
 *
 * Originals stay in images-src/ (not served). Only public/ ships to the site.
 */
import sharp from "sharp";
import { mkdir, readdir, writeFile } from "node:fs/promises";
import path from "node:path";

const SRC = "images-src";
const OUT = "public/images";

// Hero slides sit behind a 40% opacity + gradient overlay, so they can be
// compressed hard without visible loss.
const GROUPS = [
  { dir: "hero", widths: [1280, 1920], quality: 55 },
  { dir: "content", widths: [900], quality: 72, skip: ["iphone17.jpg"] },
  // Testimonial graphics contain small text, so keep them a little sharper.
  { dir: "testimonials", widths: [720], quality: 78 },
];

const kb = (bytes) => `${Math.round(bytes / 1024)} KB`;

for (const { dir, widths, quality, skip = [] } of GROUPS) {
  await mkdir(path.join(OUT, dir), { recursive: true });
  const files = (await readdir(path.join(SRC, dir))).filter(
    (f) => /\.(jpe?g|png)$/i.test(f) && !skip.includes(f)
  );

  for (const file of files) {
    const name = path.parse(file).name;
    for (const width of widths) {
      const suffix = widths.length > 1 ? `-${width}` : "";
      const dest = path.join(OUT, dir, `${name}${suffix}.webp`);
      const info = await sharp(path.join(SRC, dir, file))
        .rotate()
        .resize({ width, withoutEnlargement: true })
        .webp({ quality, effort: 6 })
        .toFile(dest);
      console.log(`${dest}  ${info.width}x${info.height}  ${kb(info.size)}`);
    }
  }
}

// ─── Favicon + touch icon ─────────────────────────────────────────────────
const favicon = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="#0A0A0A"/>
  <text x="32" y="45" text-anchor="middle" font-family="Arial Black, Arial, sans-serif"
        font-weight="900" font-size="36" fill="#EA580C">R</text>
</svg>
`;
await writeFile("public/favicon.svg", favicon);
await sharp(Buffer.from(favicon)).resize(180, 180).png().toFile("public/apple-touch-icon.png");
console.log("public/favicon.svg, public/apple-touch-icon.png");

// ─── Social share image (Open Graph / WhatsApp link preview) ──────────────
const ogText = `<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="630">
  <rect width="1200" height="630" fill="#0A0A0A" fill-opacity="0.62"/>
  <text x="80" y="300" font-family="Segoe UI, Arial, sans-serif" font-weight="800" font-size="96" fill="#fff">RAC Gadgets</text>
  <text x="80" y="370" font-family="Segoe UI, Arial, sans-serif" font-weight="600" font-size="40" fill="#F97316">Repairs, accessories &amp; genuine phones</text>
  <text x="80" y="520" font-family="Segoe UI, Arial, sans-serif" font-weight="500" font-size="32" fill="#ffffff" fill-opacity="0.8">WhatsApp 0777 589 791 · Same-day, doorstep service</text>
</svg>`;
const og = await sharp(path.join(SRC, "hero", "workspace.jpg"))
  .resize(1200, 630, { fit: "cover" })
  .composite([{ input: Buffer.from(ogText) }])
  .jpeg({ quality: 80, mozjpeg: true })
  .toFile("public/og-image.jpg");
console.log(`public/og-image.jpg  ${kb(og.size)}`);
