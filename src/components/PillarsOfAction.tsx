import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface Pillar {
  title: string;
  subtitle: string;
  imageUrl: string;
}

const pillars: Pillar[] = [
  {
    title: "Education",
    subtitle: "Building Tomorrow's Tech Leaders",
    imageUrl:
      "https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Business",
    subtitle: "Unlocking Economic Opportunity",
    imageUrl:
      "https://images.unsplash.com/photo-1758691736975-9f7f643d178e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMG1lZXRpbmclMjBkaXZlcnNlJTIwdGVhbSUyMGNvbGxhYm9yYXRpb258ZW58MXx8fHwxNzY3NDM4MzIxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    title: "Digital Inclusion",
    subtitle: "Bridging the Digital Divide",
    imageUrl:
      "https://images.unsplash.com/photo-1573495783211-ec2daee0c53d?q=80&w=1469&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Advocacy and Tech Diplomacy",
    subtitle: "Shaping Policy at the Highest Levels",
    imageUrl:
      "https://images.unsplash.com/photo-1646369505567-3a9cbb052342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHNwZWFrZXIlMjBhdWRpZW5jZSUyMHByZXNlbnRhdGlvbiUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY3NDM4MzIyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export default function PillarsOfAction() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % pillars.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [isPaused]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + pillars.length) % pillars.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % pillars.length);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-2">
            Our 4 Pillars of Action
          </h2>
        </div>

        {/* Slider Container */}
        <div
          className="relative"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* Main Slider Content */}
          <div className="overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-105"
              >
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Image Section */}
                  <div className="relative h-[300px] md:h-[450px] overflow-hidden">
                    <motion.div
                      initial={{ scale: 1.1 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5 }}
                    >
                      <img
                        src={pillars[currentIndex].imageUrl}
                        alt={pillars[currentIndex].title}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-900/30 to-transparent" />
                  </div>

                  {/* Content Section */}
                  <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-purple-50 to-pink-50">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2, duration: 0.5 }}
                    >
                      <div className="inline-block px-4 py-2 bg-purple-600 text-white rounded-full text-xs tracking-wider mb-6">
                        PILLAR {currentIndex + 1} OF {pillars.length}
                      </div>

                      <h3 className="text-3xl md:text-4xl lg:text-5xl text-purple-900 mb-4 tracking-tight">
                        {pillars[currentIndex].title}
                      </h3>

                      <p className="text-xl md:text-2xl text-gray-700 leading-relaxed">
                        {pillars[currentIndex].subtitle}
                      </p>

                      {/* Progress Bar */}
                      <div className="mt-8">
                        <div className="h-1 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            key={`progress-${currentIndex}`}
                            className="h-full bg-gradient-to-r from-purple-600 to-pink-600"
                            initial={{ width: "0%" }}
                            animate={{ width: isPaused ? "0%" : "100%" }}
                            transition={{
                              duration: isPaused ? 0 : 4.5,
                              ease: "linear",
                            }}
                          />
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-110 z-10 cursor-pointer"
            aria-label="Previous pillar"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white shadow-lg rounded-full flex items-center justify-center transition-all hover:scale-110 z-10 cursor-pointer"
            aria-label="Next pillar"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>

          {/* Progress Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {pillars.map((pillar, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`transition-all cursor-pointer ${
                  index === currentIndex
                    ? "w-12 h-2 bg-purple-600 rounded-full"
                    : "w-2 h-2 bg-gray-300 rounded-full hover:bg-purple-400"
                }`}
                aria-label={`Go to ${pillar.title}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
