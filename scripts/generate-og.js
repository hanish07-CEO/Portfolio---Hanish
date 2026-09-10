import fs from 'fs';
import path from 'path';
import zlib from 'zlib';

// Calculate CRC32 for PNG chunks
const crcTable = new Uint32Array(256);
for (let n = 0; n < 256; n++) {
  let c = n;
  for (let k = 0; k < 8; k++) {
    if (c & 1) c = 0xedb88320 ^ (c >>> 1);
    else c = c >>> 1;
  }
  crcTable[n] = c;
}

function crc32(buf) {
  let c = 0xffffffff;
  for (let i = 0; i < buf.length; i++) {
    c = crcTable[(c ^ buf[i]) & 0xff] ^ (c >>> 8);
  }
  return (c ^ 0xffffffff) >>> 0;
}

function makeChunk(type, data) {
  const len = data.length;
  const chunk = Buffer.alloc(4 + 4 + len + 4);
  chunk.writeUInt32BE(len, 0);
  chunk.write(type, 4, 4, 'ascii');
  data.copy(chunk, 8);
  const typeAndData = chunk.subarray(4, 8 + len);
  const crc = crc32(typeAndData);
  chunk.writeUInt32BE(crc, 8 + len);
  return chunk;
}

function generatePng(width, height) {
  // Create 1200x630 image: Deep navy background (#0b0f19) with stylish indigo & violet gradients
  const bytesPerPixel = 3; // RGB
  const rawData = Buffer.alloc(height * (1 + width * bytesPerPixel));

  let offset = 0;
  for (let y = 0; y < height; y++) {
    rawData[offset++] = 0; // Filter type 0 (None)
    for (let x = 0; x < width; x++) {
      // Background: #0b0f19 -> r: 11, g: 15, b: 25
      let r = 11;
      let g = 15;
      let b = 25;

      // Glow 1: Top-left subtle indigo aura
      const dx1 = x - 250;
      const dy1 = y - 180;
      const dist1 = Math.sqrt(dx1 * dx1 + dy1 * dy1);
      if (dist1 < 500) {
        const factor = (1 - dist1 / 500) * 0.45;
        r = Math.min(255, Math.floor(r + 79 * factor));
        g = Math.min(255, Math.floor(g + 70 * factor));
        b = Math.min(255, Math.floor(b + 229 * factor));
      }

      // Glow 2: Bottom-right purple/violet aura
      const dx2 = x - 950;
      const dy2 = y - 450;
      const dist2 = Math.sqrt(dx2 * dx2 + dy2 * dy2);
      if (dist2 < 450) {
        const factor = (1 - dist2 / 450) * 0.4;
        r = Math.min(255, Math.floor(r + 147 * factor));
        g = Math.min(255, Math.floor(g + 51 * factor));
        b = Math.min(255, Math.floor(b + 234 * factor));
      }

      // Subtle cyan accent in bottom left
      const dx3 = x - 200;
      const dy3 = y - 500;
      const dist3 = Math.sqrt(dx3 * dx3 + dy3 * dy3);
      if (dist3 < 300) {
        const factor = (1 - dist3 / 300) * 0.25;
        r = Math.min(255, Math.floor(r + 16 * factor));
        g = Math.min(255, Math.floor(g + 185 * factor));
        b = Math.min(255, Math.floor(b + 129 * factor));
      }

      // Sleek grid lines every 60px
      if (x % 60 === 0 || y % 60 === 0) {
        r = Math.min(255, r + 8);
        g = Math.min(255, g + 10);
        b = Math.min(255, b + 18);
      }

      // Sleek border highlight around card (10px padding)
      if (x >= 40 && x <= width - 40 && y >= 40 && y <= height - 40) {
        if (x === 40 || x === width - 40 || y === 40 || y === height - 40) {
          r = Math.min(255, r + 45);
          g = Math.min(255, g + 55);
          b = Math.min(255, b + 120);
        }
      }

      rawData[offset++] = r;
      rawData[offset++] = g;
      rawData[offset++] = b;
    }
  }

  const compressedData = zlib.deflateSync(rawData);

  // PNG Signature
  const signature = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

  // IHDR chunk
  const ihdrData = Buffer.alloc(13);
  ihdrData.writeUInt32BE(width, 0);
  ihdrData.writeUInt32BE(height, 4);
  ihdrData[8] = 8; // Bit depth: 8
  ihdrData[9] = 2; // Color type: 2 (RGB)
  ihdrData[10] = 0; // Compression method: 0
  ihdrData[11] = 0; // Filter method: 0
  ihdrData[12] = 0; // Interlace: 0
  const ihdrChunk = makeChunk('IHDR', ihdrData);

  // IDAT chunk
  const idatChunk = makeChunk('IDAT', compressedData);

  // IEND chunk
  const iendChunk = makeChunk('IEND', Buffer.alloc(0));

  return Buffer.concat([signature, ihdrChunk, idatChunk, iendChunk]);
}

const publicDir = path.join(process.cwd(), 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

const pngBuffer = generatePng(1200, 630);
fs.writeFileSync(path.join(publicDir, 'og-image.png'), pngBuffer);
console.log('✅ Generated public/og-image.png (1200x630)');
