import { motion } from 'framer-motion'

const pillars = [
  {
    number: '01',
    title: 'The Prop House',
    description:
      'Providing Film, TV, and Media with a sustainable hire library of high-spec builds, offering a green alternative to single-use sets.',
    color: 'cyan',
    comingSoon: true,
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'The Scrap Store',
    description:
      'Making professional-grade materials (timber, textiles, acrylics) accessible and affordable for schools, local makers, and DIY enthusiasts.',
    color: 'magenta',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'The Bespoke Studio',
    description:
      'A professional workshop where art direction and fabrication meet 100% resourced materials to create unique, high-end commissions.',
    color: 'amber',
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
      </svg>
    ),
  },
]

export function Mission() {
  return (
    <section id="mission" className="py-24 lg:py-32 bg-void relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] bg-magenta/5 rounded-full blur-[80px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-cyan text-sm font-heading font-medium tracking-[0.2em] uppercase">
            Our Vision
          </span>
          <h2 className="font-display text-white mt-2 mb-6">
            CIRCULARITY IN CREATIVITY
          </h2>
          <blockquote className="text-xl md:text-2xl text-ghost/80 font-heading italic border-l-4 border-cyan pl-6">
            "Transforming the temporary into the permanent. We bridge the gap
            between industrial production waste and community creativity by
            providing a circular home for professional-grade props, sets, and
            materials."
          </blockquote>
        </motion.div>

        {/* Pillars */}
        <div className="grid md:grid-cols-3 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`group relative p-8 bg-smoke/50 border border-steel hover:border-${pillar.color}/50 transition-all duration-500`}
            >
              {/* Number */}
              <span className={`absolute top-6 right-6 text-6xl font-display text-steel/50 group-hover:text-${pillar.color}/20 transition-colors`}>
                {pillar.number}
              </span>

              {/* Icon */}
              <div className={`w-14 h-14 flex items-center justify-center text-${pillar.color} mb-6 border border-${pillar.color}/30 bg-${pillar.color}/10`}>
                {pillar.icon}
              </div>

              {/* Content */}
              <div className="flex items-center gap-3 mb-4">
                <h3 className="font-display text-xl text-white tracking-wide">
                  {pillar.title.toUpperCase()}
                </h3>
                {pillar.comingSoon && (
                  <span className="px-2 py-1 text-xs font-heading tracking-wider uppercase bg-amber/20 text-amber border border-amber/30">
                    Coming Soon
                  </span>
                )}
              </div>
              <p className="text-ghost/70 leading-relaxed font-body">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
