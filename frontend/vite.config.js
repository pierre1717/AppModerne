import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  preview: {
    allowedHosts: ['appmodernefrontend.onrender.com'],
    port: 4173
  },
  server: {
    host: true
  }
})
