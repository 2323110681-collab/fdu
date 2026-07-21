import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,      // ← Permite conexiones desde cualquier IP (0.0.0.0)
    port: 4173,      // ← Puerto que usa Vite preview (puedes cambiarlo)
  },
  preview: {
    host: true,      // ← IMPORTANTE: Para que Render pueda ver el puerto
    port: 4173,      // ← Mismo puerto que en server
    allowedHosts: ['*'], // ← Permite cualquier host
  }
})
