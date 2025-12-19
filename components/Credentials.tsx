'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { Trophy, Calendar, Users, Star, Award, Shield, Medal, GraduationCap } from 'lucide-react'

const stats = [
  { icon: Calendar, value: 10, suffix: '+', label: 'Years Experience' },
  { icon: Users, value: 500, suffix: '+', label: 'Athletes Trained' },
  { icon: Trophy, value: 200, suffix: '+', label: 'Games Officiated' },
  { icon: Star, value: 50, suffix: '+', label: 'Tournaments' },
]

const certifications = [
  { icon: Award, title: 'Certified Basketball Coach', org: 'National Basketball Association' },
  { icon: Shield, title: 'Licensed Basketball Referee', org: 'State Athletic Commission' },
  { icon: Medal, title: 'Flag Football Official', org: 'National Flag Football League' },
  { icon: GraduationCap, title: 'Sports Science Certificate', org: 'Continuing Education' },
]

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const increment = value / steps
      let current = 0

      const timer = setInterval(() => {
        current += increment
        if (current >= value) {
          setCount(value)
          clearInterval(timer)
        } else {
          setCount(Math.floor(current))
        }
      }, duration / steps)

      return () => clearInterval(timer)
    }
  }, [isInView, value])

  return (
    <span ref={ref} className="font-heading text-5xl sm:text-6xl gradient-text">
      {count}{suffix}
    </span>
  )
}

export default function Credentials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="credentials" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight-300/50 via-midnight to-midnight-300/30" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-gold/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fire/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Credentials</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mt-4 tracking-wide">
            PROVEN <span className="gradient-text">TRACK RECORD</span>
          </h2>
        </motion.div>

        {/* Stats grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
              className="relative bg-midnight-200/50 backdrop-blur-sm border border-gold/20 rounded-2xl p-6 sm:p-8 text-center group card-hover"
            >
              {/* Icon */}
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-gold/20 transition-colors">
                <stat.icon className="w-6 h-6 text-gold" />
              </div>
              
              {/* Animated number */}
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              
              {/* Label */}
              <p className="text-gray-400 mt-2 text-sm sm:text-base">{stat.label}</p>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mb-12"
        >
          <h3 className="font-heading text-3xl tracking-wide mb-2">
            CERTIFICATIONS & <span className="text-gold">CREDENTIALS</span>
          </h3>
          <p className="text-gray-400">Professional certifications ensuring quality and expertise</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
              className="bg-midnight-200/30 backdrop-blur-sm border border-gold/10 rounded-xl p-6 hover:border-gold/30 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-gold-gradient flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                  <cert.icon className="w-6 h-6 text-midnight" />
                </div>
                <div>
                  <h4 className="font-semibold text-white mb-1 leading-tight">{cert.title}</h4>
                  <p className="text-gray-500 text-sm">{cert.org}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note about placeholder */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          * Statistics and certifications are placeholders. Update with actual credentials.
        </motion.p>
      </div>
    </section>
  )
}


