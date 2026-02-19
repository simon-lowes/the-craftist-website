export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden pt-32 md:pt-28 pb-12"
    >
      {/* Dark background with subtle grain */}
      <div className="absolute inset-0 bg-void grain-overlay" />

      {/* Neon glow effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary cyan glow - top left */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-cyan/20 rounded-full blur-[120px] animate-pulse-glow" />

        {/* Secondary magenta glow - bottom right */}
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-magenta/15 rounded-full blur-[100px]" />

        {/* Accent amber glow - center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-amber/10 rounded-full blur-[80px]" />

        {/* Horizontal neon lines */}
        <div className="absolute top-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan/40 to-transparent" />
        <div className="absolute bottom-1/4 left-0 right-0 h-px bg-gradient-to-r from-transparent via-magenta/30 to-transparent" />
      </div>

      {/* Scanline overlay for retro effect */}
      <div className="absolute inset-0 scanlines opacity-30" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 text-center">
        {/* Main headline */}
        <div className="hero-fade-in">
          <h1 className="font-display text-white mb-6">
            <span className="block">CREATIVE REUSE.</span>
            <span className="block text-cyan text-glow-cyan">UNIQUE PRODUCTION.</span>
            <span className="block">COMMUNITY RESOURCE.</span>
          </h1>
        </div>

        {/* Sub-headline */}
        <p className="hero-fade-in hero-delay-1 max-w-2xl mx-auto text-ghost/80 text-lg md:text-xl mb-12 font-body">
          Transforming industrial surplus into immersive experiences,
          bespoke art, and community opportunity.
        </p>

        {/* CTA Buttons */}
        <div className="hero-fade-in hero-delay-2 flex flex-wrap justify-center gap-4">
          <a href="#inventory" className="btn-primary">
            Hire Props
            <span className="inline-block ml-2 transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#portfolio" className="btn-outline">
            View Portfolio
          </a>
          <a href="#contact" className="btn-ghost">
            Request a Commission
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="hero-fade-in hero-delay-3 absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="scroll-bounce w-6 h-10 border-2 border-cyan/50 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-cyan rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
