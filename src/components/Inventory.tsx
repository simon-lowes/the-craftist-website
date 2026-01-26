import { motion } from 'framer-motion'

const inventoryCategories = [
  {
    id: 'prebuilt',
    title: 'Pre-built Items',
    description:
      'Ready-to-hire props and builds for immediate use in productions.',
    color: 'cyan',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: ['Themed props', 'Display pieces', 'Interactive elements', 'Complete builds'],
  },
  {
    id: 'decor',
    title: 'Decor',
    description:
      'Curated thematic pieces and finishing touches for events and photography.',
    color: 'magenta',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: ['Period pieces', 'Event styling', 'Photography backdrops', 'Themed accents'],
  },
  {
    id: 'furniture',
    title: 'Furniture',
    description:
      'Vintage, upcycled, and custom furniture pieces for sets and events.',
    color: 'amber',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: ['Vintage finds', 'Upcycled pieces', 'Custom builds', 'Statement items'],
  },
  {
    id: 'materials',
    title: 'Materials',
    description:
      'Rotating stock of raw resources for makers—timber, acrylics, fabrics.',
    color: 'cyan',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
      </svg>
    ),
    items: ['Quality timber', 'Plywood sheets', 'Acrylics', 'Fabrics & textiles'],
  },
  {
    id: 'flats',
    title: 'Stage Flats',
    description:
      'Structural walls, architectural builds, and modular set pieces.',
    color: 'magenta',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    ),
    items: ['Set flats & walls', 'Architectural elements', 'Modular structures', 'Large-scale props'],
  },
]

export function Inventory() {
  return (
    <section id="inventory" className="py-24 lg:py-32 bg-void relative">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan/30 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-magenta/20 to-transparent" />
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
            Inventory
          </span>
          <h2 className="font-display text-white mt-2 mb-4">
            WHAT'S AVAILABLE
          </h2>
          <p className="text-ghost/70 max-w-2xl mx-auto font-body">
            From complete set pieces to raw materials, browse our current stock
            for your next project.
          </p>
        </motion.div>

        {/* Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 items-stretch">
          {inventoryCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={`inventory-${category.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`group p-6 bg-smoke/50 border border-steel hover:border-${category.color}/50 transition-all duration-500 flex flex-col h-full`}
            >
              {/* Content wrapper - flex-1 pushes button to bottom */}
              <div className="flex-1">
                {/* Icon */}
                <div className={`w-14 h-14 flex items-center justify-center text-${category.color} mb-4 border border-${category.color}/30 bg-${category.color}/10`}>
                  {category.icon}
                </div>

                {/* Content */}
                <h3 className="font-display text-lg text-white mb-2 tracking-wide">
                  {category.title.toUpperCase()}
                </h3>
                <p className="text-ghost/70 text-sm mb-4 font-body">{category.description}</p>

                {/* Items list */}
                <ul className="space-y-1.5">
                  {category.items.map((item) => (
                    <li
                      key={item}
                      className={`flex items-center gap-2 text-ghost/60 text-xs font-body`}
                    >
                      <span className={`w-1 h-1 bg-${category.color}/50`} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Browse button - links to contact until catalog is ready */}
              <a
                href="#contact"
                className={`mt-6 w-full py-2.5 px-3 bg-smoke hover:bg-${category.color}/20 text-ghost/80 hover:text-white border border-steel hover:border-${category.color}/50 transition-colors text-xs font-heading tracking-wider uppercase flex items-center justify-center gap-2`}
              >
                Inquire
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          ))}
        </div>

        {/* First Draft Notice */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 p-6 bg-amber/10 border border-amber/30 text-center"
        >
          <p className="text-ghost/80 font-body">
            <span className="text-amber font-heading font-medium tracking-wide">NOTE:</span>{' '}
            Our inventory is currently in the "First Draft" phase.
            A refined digital catalog is coming soon. For specific inquiries,
            please <a href="#contact" className="text-cyan hover:text-white underline transition-colors">contact us directly</a>.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
