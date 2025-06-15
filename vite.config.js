// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: path.resolve(__dirname, 'server/client'), // ✅ builds frontend into backend
    emptyOutDir: true, // clean outDir before building
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})