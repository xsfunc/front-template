import path from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [
          ['effector/babel-plugin', { factories: ['@farfetched/core'] }],
        ],
      },
    }),

    VitePWA({
      workbox: {
        globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
      },
      manifest: {
        name: 'App',
        short_name: 'App',
        categories: ['utilities'],
        description: '',
        display: 'standalone',
        lang: 'en',
        theme_color: '#09090D',
        background_color: '#09090D',
        icons: [
          {
            src: 'android-chrome-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: '/android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
          {
            src: 'maskable-512x512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
          {
            src: 'android-chrome-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      devOptions: {
        enabled: false,
        type: 'module',
      },
    }),
  ],
  define: {
    'process.env.NODE_DEBUG': false,
  },
  build: {
    target: 'esnext',
    commonjsOptions: {
      transformMixedEsModules: true,
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      'readable-stream': 'vite-compatible-readable-stream',
      'stream': 'vite-compatible-readable-stream',
    },
  },
})
