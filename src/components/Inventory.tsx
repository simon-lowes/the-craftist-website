import { motion } from 'framer-motion'

const inventoryCategories = [
  {
    id: 'stock',
    title: 'Pre-built Stock',
    description:
      'Structural flats, large-scale sets, and architectural builds available for media hire.',
    color: 'cyan',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
    items: ['Set flats & walls', 'Architectural elements', 'Large-scale props', 'Modular structures'],
  },
  {
    id: 'decor',
    title: 'Decor',
    description:
      'A curated collection of thematic props and finishing touches for events, film, and photography.',
    color: 'magenta',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    items: ['Themed props', 'Period pieces', 'Event decor', 'Photography backdrops'],
  },
  {
    id: 'materials',
    title: 'Materials',
    description:
      'A rotating stock of raw resources for the community—including high-quality timber, plywood, acrylics, and fabrics.',
    color: 'amber',
    icon: (
      <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
    items: ['Quality timber', 'Plywood sheets', 'Acrylics', 'Fabrics & textiles'],
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
        <div className="grid md:grid-cols-3 gap-8">
          {inventoryCategories.map((category, index) => (
            <motion.div
              key={category.id}
              id={`inventory-${category.id}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group p-8 bg-smoke/50 border border-steel hover:border-${category.color}/50 transition-all duration-500`}
            >
              {/* Icon */}
              <div className={`w-16 h-16 flex items-center justify-center text-${category.color} mb-6 border border-${category.color}/30 bg-${category.color}/10`}>
                {category.icon}
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-white mb-3 tracking-wide">
                {category.title.toUpperCase()}
              </h3>
              <p className="text-ghost/70 mb-6 font-body">{category.description}</p>

              {/* Items list */}
              <ul className="space-y-2">
                {category.items.map((item) => (
                  <li
                    key={item}
                    className={`flex items-center gap-2 text-ghost/60 text-sm font-body`}
                  >
                    <span className={`w-1.5 h-1.5 bg-${category.color}/50`} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Browse button */}
              <button className={`mt-8 w-full py-3 px-4 bg-smoke hover:bg-${category.color}/20 text-ghost/80 hover:text-white border border-steel hover:border-${category.color}/50 transition-colors text-sm font-heading tracking-wider uppercase`}>
                Browse {category.title}
              </button>
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
