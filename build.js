import { build as viteBuild } from 'vite';
import { build as esbuildBuild } from 'esbuild';
import fs from 'fs';
import path from 'path';

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

async function main() {
  console.log('🚀 Starting production build...');

  console.log('📦 1/2: Building client SPA with Vite...');
  await viteBuild();

  console.log('⚡ 2/2: Bundling Express server with esbuild...');
  await esbuildBuild({
    entryPoints: ['server.ts'],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    packages: 'external',
    sourcemap: true,
    outfile: 'dist/server.cjs',
  });

  // Dual-location Sync: ensure dist exists at both project root and src/dist for Render Root Directory resilience
  try {
    const srcDistDir = path.resolve('src', 'dist');
    const rootDistDir = path.resolve('dist');
    copyDirSync(rootDistDir, srcDistDir);
    console.log('📋 Synchronized dist assets to src/dist for Render compatibility');
  } catch (err) {
    console.log('Note on dist sync:', err.message);
  }

  console.log('✅ Build succeeded! Output generated in dist/server.cjs');
}

main().catch((err) => {
  console.error('❌ Build failed with error:', err);
  process.exit(1);
});

