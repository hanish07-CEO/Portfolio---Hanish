import { build as viteBuild } from 'vite';
import { build as esbuildBuild } from 'esbuild';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Find true project root (where package.json and server.ts live)
let projectRoot = __dirname;
if (!fs.existsSync(path.join(projectRoot, 'server.ts')) && fs.existsSync(path.join(projectRoot, '..', 'server.ts'))) {
  projectRoot = path.resolve(projectRoot, '..');
}

// Set working directory to project root
process.chdir(projectRoot);
console.log(`📂 Project Root identified as: ${projectRoot}`);

function copyFileSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.copyFileSync(src, dest);
}

function copyDirSync(src, dest) {
  if (!fs.existsSync(src)) return;
  fs.mkdirSync(dest, { recursive: true });
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
  await viteBuild({
    configFile: path.join(projectRoot, 'vite.config.ts'),
    root: projectRoot,
  });

  console.log('⚡ 2/2: Bundling Express server with esbuild...');
  const serverEntryPoint = path.join(projectRoot, 'server.ts');
  const rootDistServer = path.join(projectRoot, 'dist', 'server.cjs');

  await esbuildBuild({
    entryPoints: [serverEntryPoint],
    bundle: true,
    platform: 'node',
    format: 'cjs',
    packages: 'external',
    sourcemap: true,
    outfile: rootDistServer,
  });

  // Copy dist to src/dist as well for full compatibility
  const srcDistDir = path.join(projectRoot, 'src', 'dist');
  const rootDistDir = path.join(projectRoot, 'dist');
  copyDirSync(rootDistDir, srcDistDir);

  // Also sync start.js and build.js into src/ if Render runs inside src/
  copyFileSync(path.join(projectRoot, 'start.js'), path.join(projectRoot, 'src', 'start.js'));
  copyFileSync(path.join(projectRoot, 'build.js'), path.join(projectRoot, 'src', 'build.js'));

  console.log('✅ Build completed successfully! Output generated at:');
  console.log(`   - ${rootDistServer}`);
  console.log(`   - ${path.join(srcDistDir, 'server.cjs')}`);
}

main().catch((err) => {
  console.error('❌ Build failed with error:', err);
  process.exit(1);
});
