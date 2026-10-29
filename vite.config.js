import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
    // Polling makes file changes from the host visible inside the container on macOS/Windows.
    watch: { usePolling: true, interval: 300 },
  },
})
