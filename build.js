import { build as viteBuild } from 'vite';
import { build as esbuildBuild } from 'esbuild';

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

  console.log('✅ Build succeeded! Output generated in dist/server.cjs');
}

main().catch((err) => {
  console.error('❌ Build failed with error:', err);
  process.exit(1);
});
