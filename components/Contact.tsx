'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Send, Mail, Phone, MapPin, Clock, CheckCircle, Loader2, AlertCircle } from 'lucide-react'

const contactInfo = [
  { icon: Mail, label: 'Email', value: 'Tadedoyin80@gmail.com', href: 'mailto:Tadedoyin80@gmail.com' },
  { icon: Phone, label: 'Phone', value: '08063112860', href: 'tel:+2348063112860' },
  { icon: MapPin, label: 'Location', value: 'Lagos, Nigeria', href: '#' },
  { icon: Clock, label: 'Availability', value: 'Mon - Sat: 8AM - 8PM', href: '#' },
]

const socialLinks = [
  { name: 'Instagram', href: 'https://www.instagram.com/olashot30/', username: '@olashot30' },
]

const serviceOptions = [
  'Basketball Coaching',
  'Basketball Officiating',
  'Flag Football Officiating',
  'Custom Package',
  'Other Inquiry',
]

type FormStatus = 'idle' | 'loading' | 'success' | 'error'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [formStatus, setFormStatus] = useState<FormStatus>('idle')
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setFormStatus('loading')

    try {
      // Using Web3Forms - free form backend
      // Get your access key at https://web3forms.com/
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Replace with your actual key
          subject: `New Contact from ${formData.name} - ${formData.service}`,
          from_name: 'Coach Adegoke Portfolio',
          ...formData,
        }),
      })

      const result = await response.json()
      
      if (result.success) {
        setFormStatus('success')
        setFormData({ name: '', email: '', phone: '', service: '', message: '' })
      } else {
        setFormStatus('error')
      }
    } catch {
      setFormStatus('error')
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300/50 to-midnight" />
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gold/5 blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Contact</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mt-4 tracking-wide">
            LET&apos;S <span className="gradient-text">WORK TOGETHER</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Ready to elevate your game or need professional officiating? 
            Get in touch and let&apos;s make it happen.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-8">
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            <div>
              <h3 className="font-heading text-2xl tracking-wide mb-6">GET IN TOUCH</h3>
              <p className="text-gray-400 mb-8">
                Have questions? Want to book a session? Fill out the form or reach out directly 
                using the contact information below.
              </p>
            </div>

            {/* Contact cards */}
            <div className="space-y-4">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-midnight-200/50 border border-gold/10 rounded-xl hover:border-gold/30 transition-all duration-300 group"
                >
                  <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center group-hover:bg-gold-gradient transition-all duration-300">
                    <item.icon className="w-5 h-5 text-gold group-hover:text-midnight transition-colors" />
                  </div>
                  <div>
                    <p className="text-gray-500 text-sm">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Social note */}
            <div className="pt-4">
              <p className="text-gray-500 text-sm">
                Follow for updates and basketball tips:
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-midnight-200/50 border border-gold/10 rounded-lg text-gray-400 hover:text-gold hover:border-gold/30 transition-all duration-300 text-sm"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit} className="bg-midnight-200/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="w-full px-4 py-3 bg-midnight-300/50 border border-gold/20 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    className="w-full px-4 py-3 bg-midnight-300/50 border border-gold/20 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {/* Phone */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 (555) 123-4567"
                    className="w-full px-4 py-3 bg-midnight-300/50 border border-gold/20 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>

                {/* Service */}
                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-2">
                    Service Interest *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-midnight-300/50 border border-gold/20 rounded-xl text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="" className="bg-midnight">Select a service</option>
                    {serviceOptions.map((option) => (
                      <option key={option} value={option} className="bg-midnight">
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Your Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your needs, goals, or questions..."
                  className="w-full px-4 py-3 bg-midnight-300/50 border border-gold/20 rounded-xl text-white placeholder-gray-500 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                />
              </div>

              {/* Submit button */}
              <button
                type="submit"
                disabled={formStatus === 'loading'}
                className="w-full bg-gold-gradient text-midnight font-bold py-4 px-8 rounded-xl hover:shadow-lg hover:shadow-gold/30 transition-all duration-300 btn-press disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {formStatus === 'loading' ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status messages */}
              {formStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Message sent successfully! Coach SK will get back to you soon.</p>
                </motion.div>
              )}

              {formStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-4"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  <p>Something went wrong. Please try again or contact directly via email.</p>
                </motion.div>
              )}

              {/* Note about setup */}
              <p className="text-gray-600 text-xs text-center">
                * Form requires Web3Forms setup. Get a free key at web3forms.com
              </p>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}


