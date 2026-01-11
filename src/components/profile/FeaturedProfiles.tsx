import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import type { PanInfo } from "motion/react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  MapPin,
  Briefcase,
} from "lucide-react";
import { useNavigate, Link } from "react-router-dom";
import { profiles } from "../../data/profiles";

export default function FeaturedProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [direction, setDirection] = useState(0);
  const navigate = useNavigate();

  // Minimum swipe distance (in px)
  const swipeConfidenceThreshold = 10000;
  const swipePower = (offset: number, velocity: number) => {
    return Math.abs(offset) * velocity;
  };

  useEffect(() => {
    if (isPaused) return;

    // Only auto-play on medium screens and up
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (!mediaQuery.matches) return; // Don't auto-play on mobile

    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentProfile = profiles[currentIndex];

  const handleCardClick = () => {
    navigate(`/profile/${currentProfile.id}`);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const handleDragEnd = (
    _e: MouseEvent | TouchEvent | PointerEvent,
    { offset, velocity }: PanInfo
  ) => {
    const swipe = swipePower(offset.x, velocity.x);

    if (swipe < -swipeConfidenceThreshold) {
      // Swiped left - go to next
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    } else if (swipe > swipeConfidenceThreshold) {
      // Swiped right - go to previous
      setDirection(-1);
      setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
    }
  };

  const variants = {
    enter: (direction: number) => {
      return {
        x: direction > 0 ? 300 : -300,
        opacity: 0,
      };
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => {
      return {
        zIndex: 0,
        x: direction < 0 ? 300 : -300,
        opacity: 0,
      };
    },
  };

  return (
    <div className="py-8 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-6 md:mb-8">
          <h2 className="text-2xl md:text-4xl text-gray-900 mb-2 font-bold border-b-2 border-pink-200 pb-2 inline-block">
            Featured Leader
          </h2>
          <p className="text-sm md:text-base text-gray-600 mt-3 md:mt-4">
            Highlighting trailblazers transforming technology
          </p>
        </div>

        {/* Profile Card */}
        <div
          className="max-w-5xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows */}
          <button
            onClick={handlePrevious}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 p-1.5 md:p-2 rounded-full shadow-md border border-pink-200 transition-all cursor-pointer"
            aria-label="Previous profile"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white hover:bg-gray-50 p-1.5 md:p-2 rounded-full shadow-md border border-pink-200 transition-all cursor-pointer"
            aria-label="Next profile"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5 text-pink-600" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              custom={direction}
              transition={{ duration: 0.3 }}
              onClick={handleCardClick}
              onDragEnd={handleDragEnd}
              drag
              dragConstraints={{ left: 0, right: 0 }}
              className="bg-white border-2 border-pink-200 rounded overflow-hidden cursor-pointer hover:border-pink-400 transition-all"
            >
              <div className="grid md:grid-cols-3 gap-0">
                {/* Image */}
                <div className="md:col-span-1 relative h-[250px] md:h-[400px] border-r-2 border-pink-200">
                  <img
                    src={currentProfile.imageUrl}
                    alt={currentProfile.name}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="md:col-span-2 p-4 md:p-8">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                  >
                    <div className="mb-2 md:mb-3">
                      <span className="px-2 py-1 bg-pink-100 text-pink-700 text-xs rounded border border-pink-200 font-bold">
                        Featured Profile
                      </span>
                    </div>

                    <h3 className="text-xl md:text-3xl text-gray-900 mb-2 font-bold border-b border-pink-200 pb-2">
                      {currentProfile.name}
                    </h3>

                    <div className="space-y-1 md:space-y-1.5 mb-3 md:mb-4 text-xs md:text-sm">
                      <div className="flex items-center gap-2 text-gray-700">
                        <Briefcase className="w-3 h-3 md:w-4 md:h-4 text-pink-600" />
                        <span>
                          {currentProfile.role} at {currentProfile.company}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-700">
                        <MapPin className="w-3 h-3 md:w-4 md:h-4 text-pink-600" />
                        <span>{currentProfile.location}</span>
                      </div>
                    </div>

                    <p className="text-sm md:text-base text-gray-900 mb-3 md:mb-4 leading-relaxed">
                      {currentProfile.bio}
                    </p>
                    {currentProfile.achievements &&
                      currentProfile.achievements.length > 0 && (
                        <div className="mb-3 md:mb-4 p-2 md:p-3 bg-pink-50 border-l-4 border-pink-500">
                          <p className="text-xs md:text-sm text-gray-800">
                            {currentProfile.achievements[0].text}
                          </p>
                        </div>
                      )}

                    {/* Expertise Tags */}
                    <div className="flex flex-wrap gap-1 md:gap-1.5 mb-3 md:mb-4">
                      {currentProfile.expertise
                        .slice(0, 4)
                        .map((exp, index) => (
                          <span
                            key={index}
                            className="px-2 py-0.5 bg-white border border-pink-200 text-pink-700 rounded text-xs"
                          >
                            {exp}
                          </span>
                        ))}
                    </div>

                    <Link
                      to={`/profile/${currentProfile.id}`}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-pink-500 to-rose-500 text-white font-bold rounded hover:from-pink-600 hover:to-rose-600 transition-all text-xs md:text-sm group cursor-pointer"
                    >
                      Read Full Profile
                      <ArrowRight className="w-3 h-3 md:w-4 md:h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-4 md:mt-6">
            {profiles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all cursor-pointer ${
                  index === currentIndex
                    ? "w-5 h-1.5 md:w-6 md:h-2 bg-pink-500"
                    : "w-1.5 h-1.5 md:w-2 md:h-2 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
                aria-label={`View profile ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
