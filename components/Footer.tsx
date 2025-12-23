'use client'

import { motion } from 'framer-motion'
import { ArrowUp } from 'lucide-react'
import Image from 'next/image'

const footerLinks = {
  navigation: [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Credentials', href: '#credentials' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ],
  services: [
    { name: 'Basketball Coaching', href: '#services' },
    { name: 'Basketball Officiating', href: '#services' },
    { name: 'Flag Football Officiating', href: '#services' },
  ],
  social: [
    { name: 'Instagram', href: 'https://www.instagram.com/olashot30/' },
  ],
}

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-midnight-400 border-t border-gold/10">
      {/* Top decorative line */}
      <div className="h-1 bg-gold-gradient" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <a href="#home" className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-gold/40 relative">
                <Image
                  src="/galleryImages/gallery-11.jpeg"
                  alt="Coach SK"
                  fill
                  className="object-cover object-top"
                  sizes="56px"
                />
              </div>
            </a>
            <h3 className="font-heading text-2xl tracking-wide mb-2">COACH SK</h3>
            <p className="font-heading text-lg gradient-text tracking-wide mb-4">ADEGOKE OLASUKANMI</p>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating athletes and enforcing excellence on every court and field.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-heading text-lg tracking-wide mb-6">NAVIGATION</h4>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading text-lg tracking-wide mb-6">SERVICES</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social & CTA */}
          <div>
            <h4 className="font-heading text-lg tracking-wide mb-6">CONNECT</h4>
            <ul className="space-y-3 mb-8">
              {footerLinks.social.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#contact"
              className="inline-block bg-gold-gradient text-midnight font-bold px-6 py-3 rounded-full text-sm hover:shadow-lg hover:shadow-gold/30 transition-all duration-300"
            >
              Book Now
            </a>
          </div>
        </div>

        {/* Bottom section */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} Coach SK. All rights reserved.
          </p>
          
          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -3 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-2 text-gold hover:text-gold-400 transition-colors group"
          >
            <span className="text-sm">Back to Top</span>
            <div className="w-10 h-10 rounded-full border border-gold/30 flex items-center justify-center group-hover:bg-gold group-hover:text-midnight transition-all duration-300">
              <ArrowUp size={18} />
            </div>
          </motion.button>
        </div>
      </div>
    </footer>
  )
}


