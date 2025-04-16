import { defineConfig } from 'vite';
import fs from 'fs';
import path from 'path';

export default defineConfig({
  base: '/',
  server: {
    open: true
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    copyPublicDir: true // ✅ copy VRM + any public files
  },
  publicDir: 'public',

  // ✅ Plugin to drop .nojekyll into /dist
  plugins: [
    {
      name: 'add-nojekyll',
      closeBundle() {
        const noJekyllPath = path.resolve(__dirname, 'dist/.nojekyll');
        fs.writeFileSync(noJekyllPath, '');
        console.log('✅ .nojekyll file created in dist/ (via plugin)');
      }
    }
  ]
});
