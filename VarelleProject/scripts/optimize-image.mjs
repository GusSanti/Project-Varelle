import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { dirname } from "node:path";

const [source, destination] = process.argv.slice(2);
if (!source || !destination || !destination.endsWith(".webp")) {
  console.error(
    "Uso: node scripts/optimize-image.mjs entrada.png public/images/saida.webp",
  );
  process.exit(1);
}
await mkdir(dirname(destination), { recursive: true });
await sharp(source)
  .rotate()
  .resize({ width: 1536, withoutEnlargement: true })
  .webp({ quality: 85 })
  .toFile(destination);
console.log(`Imagem otimizada: ${destination}`);
