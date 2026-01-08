import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  User,
  Briefcase,
  Award,
  Sparkles,
  Check,
  Rocket,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const steps = [
  {
    id: 1,
    icon: User,
    title: "Create Your Profile",
    description: "Add your name, photo, and professional headline",
    preview: {
      name: "Priya Chen",
      role: "AI Research Engineer",
      photo: true,
    },
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Share Your Experience",
    description: "Highlight your roles, companies, and career journey",
    preview: {
      company: "Google AI",
      experience: "8 years",
      location: "Mountain View, CA",
    },
  },
  {
    id: 3,
    icon: Award,
    title: "Showcase Your Impact",
    description: "Share achievements, projects, and technical expertise",
    color: "from-pink-500 to-rose-500",
    preview: {
      expertise: ["Machine Learning", "NLP", "Computer Vision"],
      achievements: "Led team of 12 engineers",
    },
  },
  {
    id: 4,
    icon: Sparkles,
    title: "Go Live!",
    description: "Your profile is now discoverable by the community",
    preview: {
      status: "Published",
      views: "live",
    },
  },
];

export default function ProfileCreationAnimation() {
  const [currentStep, setCurrentStep] = useState(0);
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);
  const [isLargeScreen, setIsLargeScreen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Detect screen size
  useEffect(() => {
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 768); // md breakpoint
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  // Auto-advance only on larger screens
  useEffect(() => {
    if (!isLargeScreen) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => {
        const nextStep = (prev + 1) % steps.length;

        // Mark previous step as completed
        if (prev < steps.length - 1) {
          setCompletedSteps((completed) =>
            completed.includes(prev) ? completed : [...completed, prev]
          );
        } else {
          // Reset when cycling back
          setCompletedSteps([]);
        }

        return nextStep;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [isLargeScreen]);

  // Manual navigation functions
  const goToNextStep = () => {
    setCurrentStep((prev) => {
      const nextStep = (prev + 1) % steps.length;

      if (prev < steps.length - 1) {
        setCompletedSteps((completed) =>
          completed.includes(prev) ? completed : [...completed, prev]
        );
      } else {
        setCompletedSteps([]);
      }

      return nextStep;
    });
  };

  const goToPrevStep = () => {
    setCurrentStep((prev) => {
      const prevStep = prev === 0 ? steps.length - 1 : prev - 1;

      // Update completed steps
      if (prevStep === steps.length - 1) {
        setCompletedSteps(steps.map((_, i) => i).slice(0, -1));
      } else {
        setCompletedSteps((completed) => completed.filter((i) => i < prevStep));
      }

      return prevStep;
    });
  };

  // Touch/swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    if (touchStartX.current === null || touchEndX.current === null) return;

    const diff = touchStartX.current - touchEndX.current;
    const minSwipeDistance = 50;

    if (Math.abs(diff) > minSwipeDistance) {
      if (diff > 0) {
        // Swiped left - go to next
        goToNextStep();
      } else {
        // Swiped right - go to prev
        goToPrevStep();
      }
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  const step = steps[currentStep];
  const Icon = step.icon;

  return (
    <div className="py-16 md:py-20 bg-gradient-to-br from-pink-50 via-pink-100 to-rose-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <motion.h2
            className="text-3xl md:text-4xl text-gray-900 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            See How Easy It Is
          </motion.h2>
          <motion.p
            className="text-lg text-gray-600"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Create your profile in minutes and take control of your story
          </motion.p>
        </div>

        {/* Progress Bar */}
        <div className="flex justify-center items-center gap-2 mb-12">
          {steps.map((s, index) => (
            <div key={s.id} className="flex items-center">
              <motion.div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                  index === currentStep
                    ? "bg-gradient-to-r from-pink-500 to-rose-500 text-white scale-110 shadow-lg"
                    : completedSteps.includes(index)
                    ? "bg-green-500 text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
                animate={{
                  scale: index === currentStep ? 1.1 : 1,
                }}
                transition={{ duration: 0.3 }}
              >
                {completedSteps.includes(index) ? (
                  <Check className="w-5 h-5" />
                ) : (
                  index + 1
                )}
              </motion.div>
              {index < steps.length - 1 && (
                <div className="w-12 md:w-20 h-1 mx-1 bg-gray-200 rounded overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-rose-500"
                    initial={{ width: 0 }}
                    animate={{
                      width: completedSteps.includes(index) ? "100%" : "0%",
                    }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Main Animation Area with Navigation */}
        <div className="relative">
          {/* Navigation Arrows for Small Screens */}
          {!isLargeScreen && (
            <>
              <button
                onClick={goToPrevStep}
                className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-pink-600"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={goToNextStep}
                className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-2 z-10 bg-white rounded-full p-2 shadow-lg hover:shadow-xl transition-all hover:scale-110 text-pink-600"
                aria-label="Next step"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          <div
            className="grid md:grid-cols-2 gap-8 items-center"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {/* Left: Step Info */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 50 }}
                transition={{ duration: 0.5 }}
                className="space-y-6"
              >
                <motion.div
                  className={`inline-flex p-4 rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 shadow-xl`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 0.6,
                    ease: "easeInOut",
                  }}
                >
                  <Icon className="w-10 h-10 text-white" />
                </motion.div>

                <div>
                  <h3 className="text-2xl md:text-3xl text-gray-900 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-lg text-gray-600">{step.description}</p>
                </div>

                <div className="flex gap-2 pt-4">
                  {steps.map((_, index) => (
                    <motion.div
                      key={index}
                      className={`h-1 rounded-full flex-1 ${
                        index === currentStep
                          ? "bg-gradient-to-r from-pink-500 to-rose-500"
                          : completedSteps.includes(index)
                          ? "bg-green-500"
                          : "bg-gray-300"
                      }`}
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Right: Profile Preview Card */}
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-pink-100"
              >
                {currentStep === 0 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-4">
                      <motion.div
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-pink-500 to-rose-500"
                        animate={{
                          scale: [1, 1.05, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut",
                        }}
                      />
                      <div className="flex-1">
                        <motion.div
                          className="h-6 bg-gradient-to-r from-pink-200 to-pink-300 rounded mb-2"
                          initial={{ width: 0 }}
                          animate={{ width: "80%" }}
                          transition={{ delay: 0.3, duration: 0.5 }}
                        />
                        <motion.div
                          className="h-4 bg-gradient-to-r from-pink-100 to-pink-200 rounded"
                          initial={{ width: 0 }}
                          animate={{ width: "60%" }}
                          transition={{ delay: 0.5, duration: 0.5 }}
                        />
                      </div>
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-center text-gray-500 text-sm pt-4 border-t"
                    >
                      Your name and photo appear here
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 1 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-4"
                  >
                    <div className="flex items-center gap-3">
                      <Briefcase className="w-6 h-6 text-pink-600" />
                      <motion.div
                        className="h-5 bg-gradient-to-r from-pink-200 to-pink-300 rounded flex-1"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                    <motion.div
                      className="pl-9 space-y-2"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="h-4 bg-pink-100 rounded w-3/4" />
                      <div className="h-4 bg-pink-200 rounded w-1/2" />
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-center text-gray-500 text-sm pt-6 border-t"
                    >
                      Your experience and journey
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 2 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6"
                  >
                    <div className="flex items-center gap-2">
                      <Award className="w-6 h-6 text-pink-600" />
                      <motion.div
                        className="h-5 bg-gradient-to-r from-pink-200 to-pink-300 rounded flex-1"
                        initial={{ width: 0 }}
                        animate={{ width: "70%" }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {[1, 2, 3].map((i) => (
                        <motion.div
                          key={i}
                          className="px-4 py-2 bg-gradient-to-r from-pink-100 to-pink-200 rounded-full"
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
                        >
                          <div className="h-3 w-16 bg-gradient-to-r from-pink-500 to-rose-500 rounded" />
                        </motion.div>
                      ))}
                    </div>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-center text-gray-500 text-sm pt-4 border-t"
                    >
                      Your skills and achievements
                    </motion.div>
                  </motion.div>
                )}

                {currentStep === 3 && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="space-y-6 text-center"
                  >
                    <motion.div
                      className="mx-auto w-24 h-24 rounded-full bg-gradient-to-br from-green-400 to-emerald-500 flex items-center justify-center"
                      animate={{
                        scale: [1, 1.1, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 0.6,
                        ease: "easeInOut",
                      }}
                    >
                      <Check className="w-12 h-12 text-white" />
                    </motion.div>
                    <div>
                      <motion.h4
                        className="text-2xl text-gray-900 mb-2"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4 }}
                      >
                        Profile Published!
                      </motion.h4>
                      <motion.p
                        className="text-gray-600"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 }}
                      >
                        Your story is now live and discoverable
                      </motion.p>
                    </div>
                    <motion.div
                      className="flex justify-center gap-6 pt-4"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                    >
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-pink-600">
                          ✓
                        </div>
                        <div className="text-xs text-gray-500">Visible</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-pink-600">
                          ∞
                        </div>
                        <div className="text-xs text-gray-500">Searchable</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-semibold text-rose-600">
                          ♥
                        </div>
                        <div className="text-xs text-gray-500">Featured</div>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
        >
          <p className="text-gray-600 mb-6 text-lg">
            Ready to share your story?
          </p>
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-pink-500 to-rose-500 text-white rounded-lg hover:from-pink-600 hover:to-rose-600 transition-all hover:scale-105 shadow-xl text-lg cursor-pointer"
          >
            <span>Join Now</span>
            <Rocket className="w-5 h-5" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
