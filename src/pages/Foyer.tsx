import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

export function Foyer() {
  return (
    <div className="min-h-screen bg-pitch pt-24">
      {/* Back navigation */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8 mb-8">
        <Link
          to="/#portfolio"
          className="inline-flex items-center gap-2 text-ghost/70 hover:text-cyan transition-colors font-heading text-sm tracking-wider uppercase"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Portfolio
        </Link>
      </div>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-7xl px-6 lg:px-8 text-center mb-16"
      >
        <span className="text-cyan text-sm font-heading font-medium tracking-[0.2em] uppercase">
          Lockhouse Escape Games
        </span>
        <h1 className="font-display text-white mt-2 mb-4 text-4xl md:text-5xl">
          THE FOYER
        </h1>
        <p className="text-ghost/70 max-w-2xl mx-auto font-body text-lg">
          A dramatic transformation between day and night. The foyer showcases how lighting
          and atmosphere can completely change a space.
        </p>
      </motion.div>

      {/* Day/Night Comparison - Placeholder */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid md:grid-cols-2 gap-8 mb-16"
        >
          {/* Day View */}
          <div className="relative aspect-[4/3] bg-smoke border border-steel overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-amber/20 to-void/60 flex items-center justify-center">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-amber/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                </svg>
                <h3 className="font-display text-xl text-white mb-2">DAY VIEW</h3>
                <p className="text-mist/50 text-sm font-body">Photos coming soon</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 bg-amber/20 text-amber border border-amber/30 text-xs font-heading tracking-wider uppercase">
              Daytime
            </div>
          </div>

          {/* Night View */}
          <div className="relative aspect-[4/3] bg-smoke border border-steel overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-void/80 flex items-center justify-center">
              <div className="text-center p-6">
                <svg
                  className="w-16 h-16 mx-auto mb-4 text-cyan/50"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                </svg>
                <h3 className="font-display text-xl text-white mb-2">NIGHT VIEW</h3>
                <p className="text-mist/50 text-sm font-body">Photos coming soon</p>
              </div>
            </div>
            <div className="absolute top-4 left-4 px-3 py-1 bg-cyan/20 text-cyan border border-cyan/30 text-xs font-heading tracking-wider uppercase">
              Nighttime
            </div>
          </div>
        </motion.div>

        {/* Signs & Decor Close-ups Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="font-display text-2xl text-white mb-8 text-center tracking-wide">
            SIGNS & DECOR DETAILS
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square bg-smoke border border-steel overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-magenta/10 to-void/60 flex items-center justify-center">
                  <div className="text-center p-4">
                    <svg
                      className="w-10 h-10 mx-auto mb-2 text-mist/30"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1}
                        d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                      />
                    </svg>
                    <p className="text-mist/50 text-xs font-heading">Close-up {i}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Info Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="p-6 bg-cyan/10 border border-cyan/30 text-center mb-16"
        >
          <p className="text-ghost/80 font-body">
            <span className="text-cyan font-heading font-medium tracking-wide">PHOTOS COMING SOON:</span>{' '}
            High-quality photos of the Foyer featuring day/night contrast and detail shots
            are being prepared. Check back soon!
          </p>
        </motion.div>
      </div>
    </div>
  )
}
