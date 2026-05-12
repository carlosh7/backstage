import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  root: '.',
  plugins: [react(), tailwindcss()],
  server: {
    port: 3001,
    proxy: { '/api': 'http://localhost:3000' },
  },
  resolve: {
    alias: { '@': '/src' },
  },
})
