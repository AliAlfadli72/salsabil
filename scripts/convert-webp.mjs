import sharp from "sharp";
import { statSync } from "fs";
import { join } from "path";

const PUBLIC = "C:\\xampp\\htdocs\\salsabil\\public";

const files = [
  "hero.png",
  "logo.png",
  "pro (1).png",
  "pro (2).png",
  "pro (3).png",
];

console.log("\nConverting images to WebP...\n");

for (const file of files) {
  const input  = join(PUBLIC, file);
  const output = join(PUBLIC, file.replace(/\.png$/i, ".webp"));

  try {
    const before = statSync(input).size;
    await sharp(input).webp({ quality: 82, effort: 6 }).toFile(output);
    const after  = statSync(output).size;
    const saved  = ((before - after) / before * 100).toFixed(1);
    console.log(`✅  ${file.padEnd(18)} ${(before/1024/1024).toFixed(1)} MB → ${(after/1024/1024).toFixed(1)} MB  (${saved}% lighter)`);
  } catch (err) {
    console.error(`❌  ${file}: ${err.message}`);
  }
}

console.log("\nDone!\n");
