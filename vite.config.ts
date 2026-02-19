import { defineConfig } from 'vite'
import type { Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'

// Two-phase optimization:
// Phase 1 (transformIndexHtml): Remove non-critical modulepreloads
// Phase 2 (closeBundle): Inline CSS to eliminate render-blocking round trip
function optimizeHtmlPlugin(): Plugin {
  return {
    name: 'optimize-html',
    enforce: 'post',
    transformIndexHtml: {
      order: 'post' as const,
      handler(html: string) {
        // Remove modulepreload for vendor-motion (only needed by lazy chunks)
        return html.replace(
          /<link rel="modulepreload" crossorigin href="\/assets\/vendor-motion[^"]*\.js">\n?/g,
          ''
        )
      },
    },
    closeBundle() {
      // After all files are written, inline CSS into the HTML
      const htmlPath = resolve(__dirname, 'dist/index.html')
      let html = readFileSync(htmlPath, 'utf-8')
      html = html.replace(
        /<link rel="stylesheet"[^>]* href="(\/assets\/[^"]*\.css)"[^>]*>/g,
        (_match: string, cssHref: string) => {
          try {
            const cssFile = resolve(__dirname, 'dist' + cssHref)
            const css = readFileSync(cssFile, 'utf-8')
            return `<style>${css}</style>`
          } catch {
            return _match
          }
        }
      )
      writeFileSync(htmlPath, html)
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
