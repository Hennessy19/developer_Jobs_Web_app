import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
    proxy: {
      '/api': {
        // this is to proxy our requests to the backend server
        // proxy by definition refers to the act of forwarding requests from one server to another
        // proxy is a feature of vite that allows us to proxy requests to another server
        // proxy is useful when we are working with a backend server that is running on a different port
        // or when we are working with a backend server that is running on a different domain
        target: 'http://localhost:8000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }

})
