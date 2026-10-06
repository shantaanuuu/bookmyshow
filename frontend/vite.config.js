import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      react: path.resolve('./node_modules/react'),
      'react-dom': path.resolve('./node_modules/react-dom'),
      'lucide-react': path.resolve('./node_modules/lucide-react'),
      'canvas-confetti': path.resolve('./node_modules/canvas-confetti'),
      'qrcode.react': path.resolve('./node_modules/qrcode.react'),
    },
  },
})
