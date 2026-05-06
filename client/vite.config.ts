import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import babel from 'vite-plugin-babel'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    babel({
      babelConfig: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
  ],
  resolve: {
    conditions: ['development', 'browser', 'module', 'import', 'default'],
  },
  server: {
    host: '0.0.0.0',   // Required: lets Docker reach Vite from outside the container
    port: 5173,
    proxy: {
      '/api': {
        target: 'http://localhost:3000/api/',
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, '')
      }
    },
    watch: {
      ignored: ['!**/node_modules/@cloneblr/**'],
    }
  }
});