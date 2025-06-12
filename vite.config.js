import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
     tailwindcss()
  ],
  server: {
    host: true,
    allowedHosts: ['https://cf6d-105-113-118-143.ngrok-free.app']
  }
})
