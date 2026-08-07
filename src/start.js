import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

const candidatePaths = [
  path.resolve(__dirname, 'dist', 'server.cjs'),
  path.resolve(__dirname, 'src', 'dist', 'server.cjs'),
  path.resolve(process.cwd(), 'dist', 'server.cjs'),
  path.resolve(process.cwd(), 'src', 'dist', 'server.cjs'),
  path.resolve(process.cwd(), '..', 'dist', 'server.cjs'),
  path.resolve(process.cwd(), '..', 'src', 'dist', 'server.cjs'),
];

let targetServer = null;
for (const p of candidatePaths) {
  if (fs.existsSync(p)) {
    targetServer = p;
    break;
  }
}

if (!targetServer) {
  console.error('❌ Could not find server.cjs in any expected location:');
  candidatePaths.forEach(p => console.error(`  - ${p}`));
  process.exit(1);
}

console.log(`🚀 Starting production server from: ${targetServer}`);
require(targetServer);
