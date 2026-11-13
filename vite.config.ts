import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Served from GitHub Pages at https://prozainajmal.github.io/ryft-website/
export default defineConfig({
  base: '/ryft-website/',
  plugins: [react()],
  build: { assetsDir: 'static' },
});
