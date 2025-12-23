'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Award, Users, Target, Heart } from 'lucide-react'
import Image from 'next/image'

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Pursuing the highest standards in every game, training, and interaction.'
  },
  {
    icon: Users,
    title: 'Teamwork',
    description: 'Building strong connections and fostering collaborative success.'
  },
  {
    icon: Award,
    title: 'Integrity',
    description: 'Upholding fairness and honesty on and off the court.'
  },
  {
    icon: Heart,
    title: 'Passion',
    description: 'Bringing energy and dedication to every moment of the game.'
  },
]

export default function About() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="py-24 sm:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300/30 to-midnight" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-gold text-sm font-semibold uppercase tracking-widest">About</span>
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl mt-4 tracking-wide">
            THE MAN BEHIND <span className="gradient-text">THE WHISTLE</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl border border-gold/20 overflow-hidden relative shadow-2xl shadow-black/30">
              <Image
                src="/galleryImages/gallery-03.jpeg"
                alt="Coach Adegoke Olasukanmi officiating"
                fill
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* Decorative corner */}
              <div className="absolute top-0 right-0 w-24 h-24 bg-gold-gradient opacity-20 blur-2xl" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-fire opacity-10 blur-3xl" />
            </div>
            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 right-2 sm:-bottom-6 sm:-right-6 bg-midnight-200 border border-gold/30 rounded-xl p-3 sm:p-4 shadow-xl"
            >
              <div className="text-center">
                <p className="text-2xl sm:text-3xl font-heading gradient-text">10+</p>
                <p className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider">Years Experience</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h3 className="font-heading text-3xl sm:text-4xl tracking-wide">
              A LEGACY OF <span className="text-gold">DEDICATION</span>
            </h3>
            
            <div className="space-y-4 text-gray-300 leading-relaxed">
              <p>
                Coach Adegoke Olasukanmi brings over a decade of experience to the world of sports, 
                combining his passion for basketball and football with an unwavering commitment to excellence.
              </p>
              <p>
                As a <span className="text-gold font-semibold">certified basketball coach</span>, he has mentored 
                countless athletes, helping them develop not just their skills on the court, but their character 
                and discipline off it. His coaching philosophy centers on building fundamentals, fostering teamwork, 
                and nurturing a winning mindset.
              </p>
              <p>
                His expertise extends to officiating, where he serves as both a <span className="text-gold font-semibold">basketball referee</span> and
                <span className="text-fire font-semibold"> flag football referee</span>. His deep understanding of the game from 
                multiple perspectives makes him a uniquely valuable asset to any sports organization.
              </p>
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-gold pl-6 py-2 italic text-gray-400 my-8">
              "Every game is an opportunity to inspire, every call is a commitment to fairness, 
              and every training session is a step toward greatness."
              <footer className="mt-2 text-gold not-italic font-medium">— Coach SK</footer>
            </blockquote>
          </motion.div>
        </div>

        {/* Values grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20"
        >
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="bg-midnight-200/50 backdrop-blur-sm border border-gold/10 rounded-xl p-6 text-center card-hover"
            >
              <div className="w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <value.icon className="w-7 h-7 text-gold" />
              </div>
              <h4 className="font-heading text-xl tracking-wide mb-2">{value.title}</h4>
              <p className="text-gray-400 text-sm">{value.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}


