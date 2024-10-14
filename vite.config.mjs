import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  base: './',
  plugins: [
    react(),
    tsconfigPaths(),
    VitePWA({
      // generates 'manifest.webmanifest' file on build
      manifest: {
        includeAssets: [
        "/karaoke-list/assets/*"
        ],
        name: 'karaoke list',
        short_name: 'karaoke list',
        background_color: '#ffffff',
        theme_color: '#000000',
        icons: [
          {
            src: '/karaoke-list/assets/apple-touch-icon-180x180.png',
            sizes: '180x180',
            type: 'image/png',
          },
          {
            src: '/karaoke-list/assets/maskable-icon-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: '/karaoke-list/assets/pwa-64x64.png',
            sizes: '64x64',
            type: 'image/png',
          },
          {
            src: '/karaoke-list/assets/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/karaoke-list/assets/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        // defining cached files formats
        globPatterns: ['**/*.{js,css,html,ico,png,svg,webmanifest}'],
      },
    }),
  ],
  test: {
    base: '',
    globals: true,
    environment: 'jsdom',
    setupFiles: './vitest.setup.mjs',
  },
});
