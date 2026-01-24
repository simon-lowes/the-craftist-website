import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface NavItem {
  label: string
  href: string
  children?: { label: string; href: string }[]
}

const navItems: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'Bio', href: '#bio' },
  { label: 'Mission', href: '#mission' },
  {
    label: 'Portfolio',
    href: '#portfolio',
    children: [
      { label: 'Escape Rooms', href: '#portfolio-escape' },
      { label: 'Carved Work', href: '#portfolio-carved' },
      { label: 'Other Crafts', href: '#portfolio-crafts' },
      { label: 'Signs', href: '#portfolio-signs' },
    ],
  },
  {
    label: 'Inventory',
    href: '#inventory',
    children: [
      { label: 'Pre-built Stock', href: '#inventory-stock' },
      { label: 'Decor', href: '#inventory-decor' },
      { label: 'Materials', href: '#inventory-materials' },
    ],
  },
  { label: 'Contact', href: '#contact' },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-void/95 backdrop-blur-md border-b border-steel/50'
          : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          {/* Logo */}
          <a href="#home" className="group flex items-center gap-3">
            <span className="font-display text-3xl tracking-wider text-white group-hover:text-cyan transition-colors group-hover:text-glow-cyan">
              THE CRAFTIST
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.children && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={item.href}
                  className="px-4 py-2 text-sm text-ghost/80 hover:text-cyan transition-colors font-heading tracking-wide uppercase"
                >
                  {item.label}
                  {item.children && (
                    <span className="ml-1 text-xs opacity-50">▾</span>
                  )}
                </a>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.children && activeDropdown === item.label && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full left-0 mt-2 w-48 bg-pitch/95 backdrop-blur-md border border-cyan/30 overflow-hidden shadow-lg shadow-cyan/10"
                    >
                      {item.children.map((child) => (
                        <a
                          key={child.label}
                          href={child.href}
                          className="block px-4 py-3 text-sm text-ghost/80 hover:text-cyan hover:bg-cyan/10 transition-colors"
                        >
                          {child.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 flex flex-col justify-between">
              <span
                className={`block h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? 'rotate-45 translate-y-2' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-opacity duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : ''
                }`}
              />
              <span
                className={`block h-0.5 bg-current transition-transform duration-300 ${
                  mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="lg:hidden overflow-hidden border-t border-steel/30"
            >
              <div className="py-4 space-y-1 bg-pitch/95 backdrop-blur-md">
                {navItems.map((item) => (
                  <div key={item.label}>
                    <a
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className="block px-4 py-3 text-ghost/80 hover:text-cyan transition-colors font-heading tracking-wide uppercase"
                    >
                      {item.label}
                    </a>
                    {item.children && (
                      <div className="pl-8 space-y-1 border-l-2 border-cyan/20 ml-4">
                        {item.children.map((child) => (
                          <a
                            key={child.label}
                            href={child.href}
                            onClick={() => setMobileMenuOpen(false)}
                            className="block py-2 text-sm text-mist hover:text-cyan transition-colors"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}
