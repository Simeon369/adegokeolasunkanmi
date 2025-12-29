"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden geometric-pattern"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300/50 to-midnight" />

      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating basketball */}
        <motion.div
          animate={{
            y: [0, -30, 0],
            rotate: [0, 15, 0],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-10 text-6xl sm:text-7xl md:text-8xl opacity-[0.08]"
        >
          🏀
        </motion.div>

        {/* Floating football */}
        <motion.div
          animate={{
            y: [0, 25, 0],
            rotate: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-32 right-10 sm:right-20 text-5xl sm:text-6xl md:text-7xl opacity-[0.08]"
        >
          🏈
        </motion.div>

        {/* Floating whistle */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-40 left-1/4 text-4xl sm:text-5xl md:text-6xl opacity-[0.08]"
        >
          🏅
        </motion.div>

        {/* Additional floating basketball - bottom right */}
        <motion.div
          animate={{
            y: [0, -35, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-32 right-1/4 text-5xl sm:text-6xl md:text-7xl opacity-[0.06]"
        >
          🏀
        </motion.div>

        {/* Diagonal lines */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
          <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-gold to-transparent transform rotate-12 origin-top-right" />
          <div className="absolute top-0 right-20 w-px h-full bg-gradient-to-b from-transparent via-fire to-transparent transform rotate-12 origin-top-right" />
        </div>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-24 sm:pt-0 my-0 mb-10 sm:my-30">
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading tracking-wider mb-3 sm:mb-4 flex flex-col items-center justify-center"
        >
          <span className="text-white text-5xl sm:text-6xl md:text-7xl lg:text-8xl block">
            COACH
          </span>
          <span className="gradient-text text-6xl sm:text-7xl md:text-8xl lg:text-9xl block my-1 sm:my-2">
            ADEGOKE
          </span>
          <span className="text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl block">
            OLASUNKANMI
          </span>
        </motion.h1>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-base sm:text-base md:text-2xl lg:text-3xl text-gray-400 font-light mb-6 sm:mb-8 tracking-wide px-4"
        >
          Elevating Athletes. Enforcing Excellence.
        </motion.p>

        {/* Role badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-row flex-wrap justify-center items-center gap-2 sm:gap-3 md:gap-4 mb-8 sm:mb-12 px-2"
        >
          <div className="flex items-center gap-1 sm:gap-2 bg-midnight-100/50 backdrop-blur-sm border border-gold/20 rounded-full px-2.5 py-1.5 sm:px-5 sm:py-2.5">
            <span className="text-sm sm:text-xl md:text-2xl">🏀</span>
            <span className="text-white font-medium text-[10px] sm:text-sm md:text-base whitespace-nowrap">
              Basketball Coach
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-midnight-100/50 backdrop-blur-sm border border-gold/20 rounded-full px-2.5 py-1.5 sm:px-5 sm:py-2.5">
            <span className="text-sm sm:text-xl md:text-2xl">🏀</span>
            <span className="text-white font-medium text-[10px] sm:text-sm md:text-base whitespace-nowrap">
              Basketball Referee
            </span>
          </div>
          <div className="flex items-center gap-1 sm:gap-2 bg-midnight-100/50 backdrop-blur-sm border border-fire/20 rounded-full px-2.5 py-1.5 sm:px-5 sm:py-2.5">
            <span className="text-sm sm:text-xl md:text-2xl">🏈</span>
            <span className="text-white font-medium text-[10px] sm:text-sm md:text-base whitespace-nowrap">
              Flag Football Referee
            </span>
          </div>
        </motion.div>

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-row gap-2 sm:gap-4 justify-center items-center"
        >
          <a
            href="#contact"
            className="bg-gold-gradient text-midnight font-bold px-4 py-2 sm:px-8 sm:py-4 rounded-full text-xs sm:text-lg hover:shadow-xl hover:shadow-gold/30 transition-all duration-300 btn-press text-center"
          >
            Book a Session
          </a>
          <a
            href="#services"
            className="border-2 border-gold/50 text-gold hover:bg-gold/10 font-bold px-4 py-2 sm:px-8 sm:py-4 rounded-full text-xs sm:text-lg transition-all duration-300 text-center"
          >
            View Services
          </a>
        </motion.div>

        {/* Coach image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-10 sm:mt-16 mb-16 sm:mb-8 relative inline-block"
        >
          <div className="w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 rounded-full border-4 border-gold/30 mx-auto relative overflow-hidden shadow-2xl shadow-gold/20">
            <Image
              src="/galleryImages/gallery-11.jpeg"
              alt="Coach Adegoke Olasunkanmi"
              fill
              className="object-cover object-top"
              sizes="(max-width: 640px) 192px, (max-width: 768px) 256px, 320px"
              priority
            />
            {/* Decorative ring */}
            <div className="absolute inset-0 rounded-full border-2 border-gold/20" />
          </div>
          {/* Glow effect */}
          <div className="absolute inset-0 rounded-full bg-gold/20 blur-3xl -z-10" />
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-1 sm:gap-2 text-gray-500"
        >
          <span className="text-[10px] sm:text-xs uppercase tracking-widest">
            Scroll
          </span>
          <ChevronDown size={16} className="text-gold sm:w-5 sm:h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
