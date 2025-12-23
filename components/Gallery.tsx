"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const galleryImages = [
  // 1. Coaching - Special Event (Great opener)
  {
    id: 1,
    src: "/galleryImages/gallery-20.jpeg",
    title: "Ayo Charity Basketball Championship",
    category: "Coaching",
  },
  // 2. Basketball Officiating
  {
    id: 2,
    src: "/galleryImages/gallery-01.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 3. Flag Football Officiating
  {
    id: 3,
    src: "/galleryImages/gallery-08.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 4. Coaching - Special Event
  {
    id: 4,
    src: "/galleryImages/gallery-24.jpeg",
    title: "Coach Kenzie's Basketball Clinic",
    category: "Coaching",
  },
  // 5. Basketball Officiating
  {
    id: 5,
    src: "/galleryImages/gallery-02.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 6. Flag Football Officiating
  {
    id: 6,
    src: "/galleryImages/gallery-10.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 7. Coaching - Special Event
  {
    id: 7,
    src: "/galleryImages/gallery-27.jpeg",
    title: "Milo Basketball Clinic",
    category: "Coaching",
  },
  // 8. Basketball Officiating
  {
    id: 8,
    src: "/galleryImages/gallery-03.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 9. Flag Football Officiating
  {
    id: 9,
    src: "/galleryImages/gallery-11.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 10. Coaching
  {
    id: 10,
    src: "/galleryImages/gallery-33.jpeg",
    title: "Elite Workout Session",
    category: "Coaching",
  },
  // 11. Basketball Officiating
  {
    id: 11,
    src: "/galleryImages/gallery-04.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 12. Flag Football Officiating
  {
    id: 12,
    src: "/galleryImages/gallery-12.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 13. Coaching
  {
    id: 13,
    src: "/galleryImages/gallery-35.jpeg",
    title: "Academy Training",
    category: "Coaching",
  },
  // 14. Basketball Officiating
  {
    id: 14,
    src: "/galleryImages/gallery-05.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 15. Flag Football Officiating
  {
    id: 15,
    src: "/galleryImages/gallery-14.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 16. Coaching - Special Event
  {
    id: 16,
    src: "/galleryImages/gallery-28.jpeg",
    title: "Milo Basketball Clinic",
    category: "Coaching",
  },
  // 17. Basketball Officiating
  {
    id: 17,
    src: "/galleryImages/gallery-06.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 18. Flag Football Officiating
  {
    id: 18,
    src: "/galleryImages/gallery-15.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 19. Coaching
  {
    id: 19,
    src: "/galleryImages/gallery-38.jpeg",
    title: "Academy Training",
    category: "Coaching",
  },
  // 20. Basketball Officiating - Special Event
  {
    id: 20,
    src: "/galleryImages/gallery-22.jpeg",
    title: "Final Four",
    category: "Officiating",
  },
  // 21. Flag Football Officiating
  {
    id: 21,
    src: "/galleryImages/gallery-16.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 22. Basketball Officiating
  {
    id: 22,
    src: "/galleryImages/gallery-07.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 23. Flag Football Officiating
  {
    id: 23,
    src: "/galleryImages/gallery-17.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 24. Basketball Officiating - Special Event
  {
    id: 24,
    src: "/galleryImages/gallery-29.jpeg",
    title: "Milo Secondary School Tournament",
    category: "Officiating",
  },
  // 25. Flag Football Officiating
  {
    id: 25,
    src: "/galleryImages/gallery-19.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 26. Basketball Officiating
  {
    id: 26,
    src: "/galleryImages/gallery-18.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 27. Flag Football Officiating
  {
    id: 27,
    src: "/galleryImages/gallery-30.jpeg",
    title: "Flag Football",
    category: "Officiating",
  },
  // 28. Basketball Officiating - Special Event
  {
    id: 28,
    src: "/galleryImages/gallery-32.jpeg",
    title: "Milo Secondary School Tournament",
    category: "Officiating",
  },
  // 29. Basketball Officiating
  {
    id: 29,
    src: "/galleryImages/gallery-21.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 30. Basketball Officiating
  {
    id: 30,
    src: "/galleryImages/gallery-23.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 31. Basketball Officiating
  {
    id: 31,
    src: "/galleryImages/gallery-25.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 32. Basketball Officiating
  {
    id: 32,
    src: "/galleryImages/gallery-36.jpeg",
    title: "Basketball",
    category: "Officiating",
  },
  // 33. Special closing - Legacy
  {
    id: 33,
    src: "/galleryImages/gallery-37.jpeg",
    title: "Legacy",
    category: "Officiating",
  },
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
            className="absolute -left-1 sm:-left-4 lg:-left-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-midnight-200/90 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300 shadow-lg shadow-black/30"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute -right-1 sm:-right-4 lg:-right-6 top-1/2 -translate-y-1/2 z-10 w-9 h-9 sm:w-12 sm:h-12 rounded-full bg-midnight-200/90 backdrop-blur-sm border border-gold/30 flex items-center justify-center text-gold hover:bg-gold hover:text-midnight transition-all duration-300 shadow-lg shadow-black/30"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
          </button>

          {/* Carousel Track */}
          <div className="overflow-hidden mx-8 sm:mx-8 lg:mx-10">
            {/* Mobile: Single centered image */}
            <div className="sm:hidden">
              <motion.div
                className="flex"
                animate={{
                  x: `-${currentIndex * 100}%`,
                }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 30,
                }}
              >
                {galleryImages.map((image) => (
                  <div
                    key={image.id}
                    className="flex-shrink-0 w-full flex justify-center px-2"
                  >
                    <div className="w-full max-w-[320px] group relative aspect-[4/3] bg-midnight-200 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300 shadow-xl shadow-black/20">
                      {/* Actual Image */}
                      <Image
                        src={image.src}
                        alt={image.title}
                        fill
                        className="object-cover object-top"
                        sizes="320px"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />

                      {/* Image Info */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                        <span className="inline-block px-3 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-xs font-medium mb-2">
                          {image.category}
                        </span>
                        <h3 className="text-white font-semibold text-base drop-shadow-lg">
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

            {/* Tablet & Desktop: Multiple images */}
            <motion.div
              className="hidden sm:flex gap-6"
              animate={{
                x: `-${currentIndex * (100 / visibleSlides)}%`,
              }}
              transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
              }}
            >
              {galleryImages.map((image) => (
                <div
                  key={image.id}
                  className="flex-shrink-0 sm:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)]"
                >
                  <div className="group relative aspect-[4/3] bg-midnight-200 rounded-2xl overflow-hidden border border-gold/10 hover:border-gold/30 transition-all duration-300">
                    {/* Actual Image */}
                    <Image
                      src={image.src}
                      alt={image.title}
                      fill
                      className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-midnight via-transparent to-transparent opacity-80" />

                    {/* Image Info */}
                    <div className="absolute bottom-0 left-0 right-0 p-5">
                      <span className="inline-block px-2 py-1 bg-gold/20 backdrop-blur-sm rounded-full text-gold text-xs font-medium mb-2">
                        {image.category}
                      </span>
                      <h3 className="text-white font-semibold text-base lg:text-lg drop-shadow-lg">
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
          <div className="flex justify-center gap-1.5 sm:gap-2 mt-6 sm:mt-8">
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
      </div>
    </section>
  );
}
