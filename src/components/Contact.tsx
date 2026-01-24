import { useState } from 'react'
import { motion } from 'framer-motion'

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission - replace with actual form handler (Formspree, etc.)
    await new Promise((resolve) => setTimeout(resolve, 1000))

    setIsSubmitting(false)
    setSubmitted(true)
    setFormData({ name: '', email: '', subject: '', message: '' })
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  return (
    <section id="contact" className="py-24 lg:py-32 bg-pitch relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-cyan/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] bg-magenta/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-cyan text-sm font-heading font-medium tracking-[0.2em] uppercase">
              Get in Touch
            </span>
            <h2 className="font-display text-white mt-2 mb-6">
              LET'S CREATE SOMETHING
            </h2>
            <p className="text-ghost/80 mb-12 font-body">
              Whether you need props for a production, materials for a project,
              or a bespoke commission, I'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-cyan border border-cyan/30 bg-cyan/10 flex-shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-heading font-medium mb-1 tracking-wide">LOCATION</h4>
                  <p className="text-ghost/70 font-body">Littleport, Ely, Cambridgeshire</p>
                  <a
                    href="https://www.google.com/maps/place/Littleport,+Ely/@52.4579,-0.0342,13z"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan text-sm hover:text-white transition-colors font-body mt-1 inline-block"
                  >
                    View on Google Maps →
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 flex items-center justify-center text-magenta border border-magenta/30 bg-magenta/10 flex-shrink-0">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-heading font-medium mb-1 tracking-wide">INSTAGRAM</h4>
                  <div className="space-y-1">
                    <a
                      href="https://instagram.com/the_craftist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-cyan hover:text-white transition-colors font-body"
                    >
                      @the_craftist (Artist)
                    </a>
                    <a
                      href="https://instagram.com/studio32_thecraftist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-magenta hover:text-white transition-colors font-body"
                    >
                      @studio32_thecraftist (Studio)
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {submitted ? (
              <div className="h-full flex items-center justify-center">
                <div className="text-center p-8 bg-cyan/10 border border-cyan/30">
                  <div className="w-16 h-16 mx-auto mb-4 flex items-center justify-center border border-cyan/50 bg-cyan/20">
                    <svg className="w-8 h-8 text-cyan" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl text-white mb-2">MESSAGE SENT!</h3>
                  <p className="text-ghost/70 font-body">Thanks for reaching out. I'll get back to you soon.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-ghost/80 text-sm mb-2 font-heading tracking-wide uppercase">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-smoke border border-steel text-white placeholder-mist focus:outline-none focus:border-cyan transition-colors font-body"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-ghost/80 text-sm mb-2 font-heading tracking-wide uppercase">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-smoke border border-steel text-white placeholder-mist focus:outline-none focus:border-cyan transition-colors font-body"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-ghost/80 text-sm mb-2 font-heading tracking-wide uppercase">
                    I'm interested in...
                  </label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-smoke border border-steel text-white focus:outline-none focus:border-cyan transition-colors appearance-none cursor-pointer font-body"
                  >
                    <option value="" className="bg-void">Select an option</option>
                    <option value="prop-hire" className="bg-void">Prop Hire</option>
                    <option value="materials" className="bg-void">Browsing Materials</option>
                    <option value="commission" className="bg-void">Bespoke Commission</option>
                    <option value="collaboration" className="bg-void">Collaboration</option>
                    <option value="other" className="bg-void">Other Inquiry</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-ghost/80 text-sm mb-2 font-heading tracking-wide uppercase">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-smoke border border-steel text-white placeholder-mist focus:outline-none focus:border-cyan transition-colors resize-none font-body"
                    placeholder="Tell me about your project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>
              </form>
            )}
          </motion.div>
        </div>

        {/* Map Section - Full width below the two columns */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16"
        >
          <div className="relative border border-steel overflow-hidden" style={{ paddingBottom: '25%', minHeight: '200px' }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d38893.89559767476!2d0.2787!3d52.4579!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47d7f7c6c0d8c0a9%3A0x9b8b9b8b9b8b9b8b!2sLittleport%2C%20Ely!5e0!3m2!1sen!2suk!4v1700000000000!5m2!1sen!2suk"
              className="absolute inset-0 w-full h-full"
              style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(90%)' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Location Map"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
