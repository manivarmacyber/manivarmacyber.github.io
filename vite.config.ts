import path from 'path';
import fs from 'fs';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';




export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  const siteUrl = env.VITE_SITE_URL || 'https://manivarmacyber.github.io';

  return {
    base: '/',
    plugins: [
      react(),
      tailwindcss(),
    ],
    define: {
      'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
      'import.meta.env.VITE_SITE_URL': JSON.stringify(siteUrl)
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      }
    },
    build: {
      outDir: 'dist',
      target: 'esnext',
      sourcemap: false,
      minify: 'esbuild',
      cssMinify: true,
      reportCompressedSize: false,
      chunkSizeWarningLimit: 1000,
      rollupOptions: {
        output: {
          manualChunks: {
            'vendor-icons': ['lucide-react'],
            'vendor-react': ['react', 'react-dom', 'react-router-dom'],
            'vendor-motion': ['motion'],
            'vendor-firebase': ['firebase/app', 'firebase/firestore', 'firebase/messaging'],
          },
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js',
        },
      },
    }
  };
});
