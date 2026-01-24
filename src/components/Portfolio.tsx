import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface PortfolioItem {
  id: string
  title: string
  category: string
  description: string
  image?: string
  albumUrl?: string
}

const categories = [
  { id: 'all', label: 'All Work' },
  { id: 'escape', label: 'Escape Rooms' },
  { id: 'carved', label: 'Carved Work' },
  { id: 'crafts', label: 'Other Crafts' },
  { id: 'signs', label: 'Signs' },
]

const portfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Time Machine Sign',
    category: 'signs',
    description: 'Custom illuminated signage with cyan LEDs, industrial gears, and gold framing - the entrance to the Time Machine escape room.',
    image: '/images/portfolio/time-machine-sign.png',
    albumUrl: 'https://photos.app.goo.gl/vD3oK7ysvcTFhqBE7',
  },
  {
    id: '2',
    title: 'Time Machine Interior',
    category: 'escape',
    description: 'Sci-fi control panels with cyan LED matrices, gold industrial frames, and purple atmospheric lighting.',
    image: '/images/portfolio/escape-room-1.png',
    albumUrl: 'https://photos.app.goo.gl/n9BDLQ1W6BLCyxQF9',
  },
  {
    id: '3',
    title: 'Puzzle Stations',
    category: 'escape',
    description: 'Interactive puzzle elements with backlit displays and exposed colored wiring for the immersive experience.',
    image: '/images/portfolio/escape-room-2.png',
    albumUrl: 'https://photos.app.goo.gl/n9BDLQ1W6BLCyxQF9',
  },
  {
    id: '4',
    title: 'Time Machine Cockpit',
    category: 'escape',
    description: '75% constructed from resourced materials, delivering a world-class environment at near-zero material cost.',
    image: '/images/portfolio/escape-room-3.png',
    albumUrl: 'https://photos.app.goo.gl/n9BDLQ1W6BLCyxQF9',
  },
  {
    id: '5',
    title: 'Relief Carving - Triptych',
    category: 'carved',
    description: 'Handmade frame with cyan and magenta dotted pattern, featuring multiple textured relief panels.',
    image: '/images/portfolio/relief-carving-1.png',
    albumUrl: 'https://photos.app.goo.gl/KeqddgEtgmxKnRxN6',
  },
  {
    id: '6',
    title: 'Relief Carving - Diptych',
    category: 'carved',
    description: 'Bold orange and gold striped frame with copper and green textured relief panels.',
    image: '/images/portfolio/relief-carving-2.png',
    albumUrl: 'https://photos.app.goo.gl/KeqddgEtgmxKnRxN6',
  },
  {
    id: '7',
    title: 'Relief Carving - Composition',
    category: 'carved',
    description: 'Complex multi-panel composition with flowing organic forms in purple, green, and copper tones.',
    image: '/images/portfolio/relief-carving-3.png',
    albumUrl: 'https://photos.app.goo.gl/KeqddgEtgmxKnRxN6',
  },
]

export function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all')

  const filteredItems =
    activeCategory === 'all'
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory)

  return (
    <section id="portfolio" className="py-24 lg:py-32 bg-pitch relative">
      {/* Background accent */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-steel/50 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-cyan text-sm font-heading font-medium tracking-[0.2em] uppercase">
            Portfolio
          </span>
          <h2 className="font-display text-white mt-2 mb-4">
            FEATURED WORK
          </h2>
          <p className="text-ghost/70 max-w-2xl mx-auto font-body">
            A showcase of 5 years crafting immersive environments, bespoke sculptures,
            and handcrafted signage.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2.5 text-sm font-heading tracking-wider uppercase transition-all duration-300 ${
                activeCategory === category.id
                  ? 'bg-cyan text-void'
                  : 'bg-smoke text-ghost/70 hover:bg-steel hover:text-white border border-steel'
              }`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item, index) => (
              <motion.a
                key={item.id}
                href={item.albumUrl}
                target="_blank"
                rel="noopener noreferrer"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="group relative aspect-[4/3] bg-smoke overflow-hidden cursor-pointer border border-steel hover:border-cyan/50 transition-colors block"
                id={`portfolio-${item.category}`}
              >
                {/* Portfolio Image */}
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 bg-gradient-to-br from-steel/30 to-void/80 flex items-center justify-center">
                    <div className="text-center p-6">
                      <svg
                        className="w-12 h-12 mx-auto mb-3 text-mist/30"
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
                      <p className="text-mist/50 text-sm font-heading">Image placeholder</p>
                    </div>
                  </div>
                )}

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-void via-void/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="text-cyan text-xs font-heading tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {categories.find((c) => c.id === item.category)?.label}
                  </span>
                  <h3 className="font-display text-xl text-white mt-1 tracking-wide">
                    {item.title.toUpperCase()}
                  </h3>
                  <p className="text-ghost/70 text-sm mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 font-body">
                    {item.description}
                  </p>
                  {/* View album hint */}
                  <span className="text-cyan/70 text-xs font-heading tracking-wider uppercase mt-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-150 inline-flex items-center gap-1">
                    View Full Album
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Notable Achievement */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 p-6 bg-cyan/10 border border-cyan/30 text-center"
        >
          <p className="text-ghost/90 font-body">
            <span className="text-cyan font-heading font-medium tracking-wide">NOTABLE ACHIEVEMENT:</span>{' '}
            75% of the Time Machine was constructed from resourced materials,
            delivering a world-class environment at near-zero material cost.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
