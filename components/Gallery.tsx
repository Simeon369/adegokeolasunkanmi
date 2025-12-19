"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Camera } from "lucide-react";

const galleryImages = [
  { id: 1, title: "Training Session", category: "Coaching" },
  { id: 2, title: "Game Day", category: "Officiating" },
  { id: 3, title: "Youth Camp", category: "Coaching" },
  { id: 4, title: "Tournament Finals", category: "Officiating" },
  { id: 5, title: "Team Practice", category: "Coaching" },
  { id: 6, title: "Championship Game", category: "Officiating" },
  { id: 7, title: "Skills Workshop", category: "Coaching" },
  { id: 8, title: "League Match", category: "Officiating" },
  { id: 9, title: "One-on-One Training", category: "Coaching" },
  { id: 10, title: "Flag Football Event", category: "Officiating" },
];

export default function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Number of visible slides based on screen size
  const getVisibleSlides = () => {
    if (typeof window !== "undefined") {
      if (window.innerWidth >= 1024) return 3;
      if (window.innerWidth >= 640) return 2;
      return 1;
    }
    return 3;
  };

  const [visibleSlides, setVisibleSlides] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      setVisibleSlides(getVisibleSlides());
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const maxIndex = galleryImages.length - visibleSlides;

  // Auto-scroll effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, maxIndex]);

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  const goToPrev = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1));
  };

  return (
    <section
      id="gallery"
      className="py-16 sm:py-24 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-midnight via-midnight-300/30 to-midnight" />

      <div
        className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        ref={ref}
      >
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 sm:mb-12 lg:mb-16"
        >
          <span className="text-gold text-xs sm:text-sm font-semibold uppercase tracking-widest">
            Gallery
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl lg:text-6xl mt-3 sm:mt-4 tracking-wide">
            MOMENTS OF <span className="gradient-text">EXCELLENCE</span>
          </h2>
          <p className="text-gray-400 text-sm sm:text-base mt-3 sm:mt-4 max-w-2xl mx-auto px-4 sm:px-0">
            Capturing the passion, dedication, and victories on the court and
            field.
          </p>
        </motion.div>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-0 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-midnight-200/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300 shadow-lg"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-0 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-midnight-200/80 backdrop-blur-sm border border-gold/20 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300 shadow-lg"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-6 sm:mx-8 lg:mx-10">
            <motion.div
              className="flex gap-4 sm:gap-6"
              animate={{
                x: `-${currentIndex * (100 / visibleSlides)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {galleryImages.map((image, index) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 w-full sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="group relative aspect-[4/3] bg-gradient-to-br from-midnight-100 to-midnight-300 rounded-xl sm:rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    {/* Placeholder Image */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center bg-midnight-200/50">
                      <Camera className="w-12 h-12 sm:w-16 sm:h-16 text-gold/30 mb-3" />
                      <span className="text-gray-500 text-xs sm:text-sm">
                        Image {image.id}
                      </span>
                    </div>

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />

                    {/* Image Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-5">
                      <span className="inline-block px-2 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-[10px] sm:text-xs font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-sm sm:text-base lg:text-lg">
                        {image.title}
                      </h3>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 bg-gold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6 sm:mt-8">
            {Array.from({ length: maxIndex + 1 }).map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsAutoPlaying(false);
                  setCurrentIndex(index);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gold w-6 sm:w-8"
                    : "bg-gold/30 hover:bg-gold/50 w-2"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Auto-play indicator */}
          <div className="flex justify-center mt-4">
            <button
              onClick={() => setIsAutoPlaying(!isAutoPlaying)}
              className={`text-xs sm:text-sm px-4 py-2 rounded-full border transition-all duration-300 ${
                isAutoPlaying
                  ? "border-gold/30 text-gold"
                  : "border-gray-600 text-gray-500"
              }`}
            >
              {isAutoPlaying ? "● Auto-playing" : "○ Paused"}
            </button>
          </div>
        </motion.div>

        {/* Note */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center text-gray-600 text-xs sm:text-sm mt-8 sm:mt-12"
        >
          * These are placeholder images. Replace with actual photos from
          events.
        </motion.p>
      </div>
    </section>
  );
}


