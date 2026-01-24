import { useEffect } from 'react'
import { motion } from 'framer-motion'

interface InstagramFeedProps {
  username: string
  title?: string
}

export function InstagramFeed({ username, title = "Latest from Instagram" }: InstagramFeedProps) {
  useEffect(() => {
    // Load Instagram embed script
    const script = document.createElement('script')
    script.src = 'https://www.instagram.com/embed.js'
    script.async = true
    document.body.appendChild(script)

    // Process embeds when script loads
    script.onload = () => {
      if ((window as any).instgrm) {
        (window as any).instgrm.Embeds.process()
      }
    }

    return () => {
      // Cleanup script on unmount
      const existingScript = document.querySelector('script[src="https://www.instagram.com/embed.js"]')
      if (existingScript) {
        existingScript.remove()
      }
    }
  }, [])

  return (
    <section className="py-20 bg-smoke/50 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-cyan/5 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl text-white mb-4 tracking-wider">{title.toUpperCase()}</h2>
          <p className="text-ghost/70 font-body">
            Follow{' '}
            <a
              href={`https://instagram.com/${username}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan hover:text-white transition-colors"
            >
              @{username}
            </a>{' '}
            for the latest projects and behind-the-scenes content.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          {/* Instagram Profile Embed */}
          <blockquote
            className="instagram-media"
            data-instgrm-permalink={`https://www.instagram.com/${username}/`}
            data-instgrm-version="14"
            style={{
              background: '#0D0D0D',
              border: '1px solid #2A2A2A',
              borderRadius: '0',
              boxShadow: '0 0 30px rgba(0, 229, 255, 0.1)',
              margin: '1px',
              maxWidth: '540px',
              minWidth: '326px',
              padding: 0,
              width: 'calc(100% - 2px)',
            }}
          >
            <div style={{ padding: '16px' }}>
              <a
                href={`https://www.instagram.com/${username}/`}
                style={{
                  background: '#0D0D0D',
                  lineHeight: 0,
                  padding: '0 0',
                  textAlign: 'center',
                  textDecoration: 'none',
                  width: '100%',
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-cyan/20 border border-cyan/30" />
                  <span className="text-white font-heading tracking-wide">@{username}</span>
                </div>
                <p className="text-ghost/60 text-sm font-body">Loading Instagram feed...</p>
              </a>
            </div>
          </blockquote>
        </motion.div>

        {/* Fallback / Direct Link */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-8"
        >
          <a
            href={`https://instagram.com/${username}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost inline-flex"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            View Full Profile on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
