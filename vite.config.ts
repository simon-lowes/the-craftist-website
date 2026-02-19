import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Plugin to remove non-critical modulepreloads
function optimizeHtmlPlugin(): Plugin {
  return {
    name: 'optimize-html',
    enforce: 'post',
    transformIndexHtml(html) {
      // Remove modulepreload for vendor-motion (only needed by lazy chunks)
      html = html.replace(
        /<link rel="modulepreload" crossorigin href="\/assets\/vendor-motion[^"]*\.js">\n?/g,
        ''
      )
      return html
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), optimizeHtmlPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-motion': ['framer-motion'],
          'vendor-router': ['react-router-dom'],
        },
      },
    },
  },
})
