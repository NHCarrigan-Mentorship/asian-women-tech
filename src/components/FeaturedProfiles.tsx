import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { profiles } from "../data/profiles";

export default function FeaturedProfiles() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [touchStart, setTouchStart] = useState<number | null>(null);
  const [touchEnd, setTouchEnd] = useState<number | null>(null);
  const navigate = useNavigate();

  // Minimum swipe distance (in px)
  const minSwipeDistance = 50;

  useEffect(() => {
    if (isPaused) return;

    // Only auto-play on medium screens and up
    const mediaQuery = window.matchMedia("(min-width: 768px)");

    if (!mediaQuery.matches) return; // Don't auto-play on mobile

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  const currentLeader = profiles[currentIndex];

  const handleLearnMore = () => {
    navigate(`/profile/${currentLeader.id}`);
  };

  const handleCardClick = () => {
    navigate(`/profile/${currentLeader.id}`);
  };

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent card click
    setCurrentIndex((prev) => (prev + 1) % profiles.length);
  };

  const onTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      // Swipe left - go to next
      setCurrentIndex((prev) => (prev + 1) % profiles.length);
    }

    if (isRightSwipe) {
      // Swipe right - go to previous
      setCurrentIndex((prev) => (prev - 1 + profiles.length) % profiles.length);
    }
  };

  return (
    <div className="py-16 md:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-3">
            Inspiring Leader Spotlight
          </h2>
          <p className="text-lg text-gray-600">
            Meet the trailblazers transforming technology
          </p>
        </div>

        {/* Leader Card */}
        <div
          className="max-w-4xl mx-auto relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Navigation Arrows - Only visible on mobile */}
          <button
            onClick={handlePrevious}
            className="md:hidden absolute left-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Previous leader"
          >
            <ChevronLeft className="w-6 h-6 text-pink-600" />
          </button>

          <button
            onClick={handleNext}
            className="md:hidden absolute right-2 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all hover:scale-110 cursor-pointer"
            aria-label="Next leader"
          >
            <ChevronRight className="w-6 h-6 text-pink-600" />
          </button>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              onClick={handleCardClick}
              onTouchStart={onTouchStart}
              onTouchMove={onTouchMove}
              onTouchEnd={onTouchEnd}
              className="bg-white rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="grid md:grid-cols-5 gap-0">
                {/* Image - Portrait orientation (2 columns, narrower) */}
                <div className="md:col-span-2 relative h-[400px] md:h-[500px]">
                  <img
                    src={currentLeader.imageUrl}
                    alt={currentLeader.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                </div>

                {/* Content (3 columns, wider) */}
                <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2, duration: 0.6 }}
                  >
                    <div className="mb-4">
                      <div className="inline-block px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm mb-4">
                        Featured Leader
                      </div>
                    </div>

                    <h3 className="text-3xl md:text-4xl text-gray-900 font-bold mb-3">
                      {currentLeader.name}
                    </h3>

                    <p className="text-xl text-pink-500 mb-2">
                      {currentLeader.role}
                    </p>

                    <p className="text-lg text-gray-600 mb-6">
                      {currentLeader.company}
                    </p>

                    <blockquote className="border-l-4 border-pink-500 pl-4 mb-8">
                      <p className="text-lg text-gray-700 italic">
                        "{currentLeader.impact.description}"
                      </p>
                    </blockquote>

                    <button
                      onClick={handleLearnMore}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 text-white font-bold rounded-lg hover:bg-rose-600 transition-colors group cursor-pointer"
                    >
                      Learn About Her Story
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {profiles.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`transition-all cursor-pointer ${
                  index === currentIndex
                    ? "w-8 h-2 bg-pink-500"
                    : "w-2 h-2 bg-gray-300 hover:bg-gray-400"
                } rounded-full`}
                aria-label={`View leader ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
