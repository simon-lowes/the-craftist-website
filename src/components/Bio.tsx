import { motion } from 'framer-motion'

export function Bio() {
  return (
    <section id="bio" className="py-24 lg:py-32 bg-pitch relative overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="absolute inset-0 bg-gradient-to-l from-cyan/5 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="aspect-[4/5] bg-smoke overflow-hidden border border-steel">
              <img
                src="/images/bio/sanjay-portrait.jpg"
                alt="Sanjay - The Craftist"
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Neon accent frame */}
            <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-cyan/40 -z-10" />
            <div className="absolute -bottom-8 -right-8 w-full h-full border border-magenta/20 -z-20" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-cyan text-sm font-heading font-medium tracking-[0.2em] uppercase">
              About
            </span>
            <h2 className="font-display text-white mt-2 mb-8">
              THE MAKER BEHIND THE MISSION
            </h2>

            <div className="space-y-6 text-ghost/80 font-body">
              <p>
                I am a fully self-taught, multi-disciplinary artist and set builder
                with a "problem-solver" DNA. With over five years of experience as
                an Art Director—leading world-class immersive builds like the{' '}
                <span className="text-cyan">Mayan Temple</span> and the{' '}
                <span className="text-magenta">Time Machine</span>—I specialize in
                turning high-concept visions into physical reality.
              </p>

              <p>
                My hands-on expertise spans power carving (from hand tools to power
                carving), advanced epoxy resin work, mould making, and traditional
                woodworking. I believe that professional artistry doesn't require a
                high-waste budget; it requires a resourceful eye.
              </p>

              <p>
                Whether I'm building a set for a film or a bespoke sculpture for a
                private client, my work is rooted in the art of the reclaim.{' '}
                <span className="text-white font-medium">
                  I can turn my hand to pretty much anything creatively.
                </span>
              </p>
            </div>

            {/* Skills tags */}
            <div className="mt-8 flex flex-wrap gap-2">
              {[
                'Power Carving',
                'Epoxy Resin',
                'Mould Making',
                'Woodworking',
                'Set Design',
                'Art Direction',
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 bg-smoke text-ghost/70 text-sm border border-steel hover:border-cyan/50 hover:text-cyan transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
