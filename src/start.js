import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { createRequire } from 'module';
import { execSync } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const require = createRequire(import.meta.url);

function findServerPath() {
  const candidatePaths = [
    path.resolve(__dirname, 'dist', 'server.cjs'),
    path.resolve(__dirname, 'src', 'dist', 'server.cjs'),
    path.resolve(process.cwd(), 'dist', 'server.cjs'),
    path.resolve(process.cwd(), 'src', 'dist', 'server.cjs'),
    path.resolve(process.cwd(), '..', 'dist', 'server.cjs'),
    path.resolve(process.cwd(), '..', 'src', 'dist', 'server.cjs'),
  ];

  for (const p of candidatePaths) {
    if (fs.existsSync(p)) {
      return p;
    }
  }
  return null;
}

let targetServer = findServerPath();

if (!targetServer) {
  console.log('⚠️ dist/server.cjs not found. Triggering automated build now...');
  
  const buildScriptCandidates = [
    path.resolve(__dirname, 'build.js'),
    path.resolve(process.cwd(), 'build.js'),
    path.resolve(__dirname, '..', 'build.js'),
    path.resolve(process.cwd(), '..', 'build.js'),
  ];

  let buildScriptPath = null;
  for (const b of buildScriptCandidates) {
    if (fs.existsSync(b)) {
      buildScriptPath = b;
      break;
    }
  }

  if (buildScriptPath) {
    try {
      console.log(`🔨 Running build script: ${buildScriptPath}`);
      execSync(`node "${buildScriptPath}"`, { stdio: 'inherit' });
      targetServer = findServerPath();
    } catch (err) {
      console.error('❌ On-demand build failed:', err.message);
    }
  } else {
    console.error('❌ build.js script not found.');
  }
}

if (!targetServer) {
  console.error('❌ Could not locate server.cjs even after build attempt.');
  process.exit(1);
}

console.log(`🚀 Starting production server from: ${targetServer}`);
require(targetServer);
