// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../server/client', // or wherever your backend serves from
  },
  server: {
    proxy: {
      '/api': 'http://localhost:5000',
    },
  },
})