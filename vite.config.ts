import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Plugin to remove non-critical modulepreloads and make CSS async.
// The pre-rendered HTML shell provides instant FCP with inline styles,
// so the full CSS can load asynchronously without FOUC.
function optimizeHtmlPlugin(): Plugin {
  return {
    name: 'optimize-html',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string) {
        // Remove modulepreload for vendor-motion (only needed by lazy chunks)
        html = html.replace(
          /<link rel="modulepreload" crossorigin href="\/assets\/vendor-motion[^"]*\.js">\n?/g,
          ''
        )
        // Convert render-blocking CSS to async preload+onload
        html = html.replace(
          /<link rel="stylesheet"([^>]*) href="([^"]*\.css)"([^>]*)>/g,
          '<link rel="preload" as="style"$1 href="$2"$3 onload="this.onload=null;this.rel=\'stylesheet\'">' +
          '<noscript><link rel="stylesheet"$1 href="$2"$3></noscript>'
        )
        return html
      },
    },
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss(), optimizeHtmlPlugin()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id: string) {
          if (id.includes('node_modules/react-dom') || id.includes('node_modules/react/')) {
            return 'react-vendor'
          }
          if (id.includes('node_modules/framer-motion')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/react-router-dom') || id.includes('node_modules/react-router/')) {
            return 'vendor-router'
          }
        },
      },
    },
  },
})
