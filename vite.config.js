import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

/**
 * Cấu hình build/dev.
 * - `base: './'` => build ra file tĩnh có đường dẫn tương đối,
 *   deploy được ở GitHub Pages, Netlify, Vercel hay bất kỳ hosting nào.
 * - Khi chạy trong môi trường preview (domain được proxy qua https),
 *   đặt biến môi trường VITE_HMR_CLIENT_PORT=443 để HMR hoạt động.
 */
const hmrClientPort = process.env.VITE_HMR_CLIENT_PORT;

export default defineConfig({
  plugins: [react()],
  base: './',
  server: {
    host: true,
    port: 5173,
    strictPort: false,
    allowedHosts: true,
    ...(hmrClientPort
      ? { hmr: { protocol: 'wss', clientPort: Number(hmrClientPort) } }
      : {}),
  },
  preview: {
    host: true,
    port: 4173,
    allowedHosts: true,
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    cssCodeSplit: false,
  },
});
