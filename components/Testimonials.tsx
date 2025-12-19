'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Quote, ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    quote: "Coach Adegoke transformed my game completely. His attention to detail and patient coaching style helped me become the player I always dreamed of being. He doesn't just teach basketball – he teaches life skills.",
    name: 'Michael Johnson',
    role: 'High School Athlete',
    rating: 5,
  },
  {
    quote: "Having Coach Adegoke officiate our tournament was a game-changer. His professionalism, knowledge of the rules, and fair judgment made every game run smoothly. The players and parents all appreciated his expertise.",
    name: 'Sarah Williams',
    role: 'League Coordinator',
    rating: 5,
  },
  {
    quote: "The best referee we've ever had for our flag football league. Coach Adegoke's calls are always fair, he explains rules clearly, and he keeps the game moving. Highly recommend for any sports organization.",
    name: 'David Chen',
    role: 'Flag Football League Director',
    rating: 5,
  },
  {
    quote: "My son's confidence on the court has skyrocketed since training with Coach Adegoke. He's not just a coach – he's a mentor who genuinely cares about the development of young athletes.",
    name: 'Amanda Roberts',
    role: 'Parent',
    rating: 5,
  },
]

export default function Testimonials() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section id="testimonials" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-midnight-300/30" />
      <div className="absolute inset-0 geometric-pattern opacity-20" />
      
      {/* Decorative quote marks */}
      <div className="absolute top-20 left-10 text-gold/5">
        <Quote size={200} />
      </div>
      <div className="absolute bottom-20 right-10 text-gold/5 rotate-180">
        <Quote size={200} />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">Testimonials</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mt-4 tracking-wide">
            WHAT PEOPLE <span className="gradient-text">ARE SAYING</span>
          </h2>
        </motion.div>

        {/* Main testimonial carousel */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-4xl mx-auto"
        >
          <div className="relative bg-midnight-200/50 backdrop-blur-sm border border-gold/20 rounded-3xl p-8 sm:p-12">
            {/* Quote icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-gold-gradient flex items-center justify-center">
              <Quote className="w-6 h-6 text-midnight" />
            </div>

            {/* Rating */}
            <div className="flex justify-center gap-1 mb-6">
              {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-gold text-gold" />
              ))}
            </div>

            {/* Quote */}
            <motion.blockquote
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="text-xl sm:text-2xl text-gray-200 text-center leading-relaxed mb-8"
            >
              &quot;{testimonials[currentIndex].quote}&quot;
            </motion.blockquote>

            {/* Author */}
            <motion.div
              key={`author-${currentIndex}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-midnight-100 border-2 border-gold/30 flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-heading gradient-text">
                  {testimonials[currentIndex].name.split(' ').map(n => n[0]).join('')}
                </span>
              </div>
              <p className="font-semibold text-white text-lg">{testimonials[currentIndex].name}</p>
              <p className="text-gold text-sm">{testimonials[currentIndex].role}</p>
            </motion.div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <button
                onClick={prevTestimonial}
                className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                <ChevronLeft size={24} />
              </button>
              
              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? 'bg-gold w-8'
                        : 'bg-gold/30 hover:bg-gold/50'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="w-12 h-12 rounded-full border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300"
              >
                <ChevronRight size={24} />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-gray-600 text-sm mt-12"
        >
          * These are placeholder testimonials. Replace with real feedback from clients.
        </motion.p>
      </div>
    </section>
  )
}


