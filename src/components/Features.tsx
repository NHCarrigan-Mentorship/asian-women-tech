import { Link } from "react-router-dom";
import { CheckCircle2, Rocket } from "lucide-react";

export default function Features() {
  return (
    <div className="py-16 md:py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl text-gray-900 font-bold mb-4">
            Your Profile, Your Story
          </h2>
          <p className="text-lg text-gray-600">
            Take control of your professional narrative and amplify your impact
          </p>
        </div>

        <div className="grid grid-cols-2 gap-3 md:gap-6">
          <div className="flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm md:text-xl text-gray-900 mb-1 md:mb-2">
                Create and edit your public profile
              </h3>
              <p className="hidden md:block text-xs md:text-base text-gray-600">
                Build a comprehensive profile that showcases your expertise and
                achievements
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm md:text-xl text-gray-900 mb-1 md:mb-2">
                Control how you're represented on the site
              </h3>
              <p className="hidden md:block text-xs md:text-base text-gray-600">
                Manage your public image with accuracy, agency, and self-defined
                identity
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm md:text-xl text-gray-900 mb-1 md:mb-2">
                Share your role, experience, and tech focus
              </h3>
              <p className="hidden md:block text-xs md:text-base text-gray-600">
                Highlight your unique path across disciplines, career stages,
                and technical focuses
              </p>
            </div>
          </div>

          <div className="flex items-start gap-2 md:gap-4 p-3 md:p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer">
            <CheckCircle2 className="w-5 h-5 md:w-8 md:h-8 text-purple-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="text-sm md:text-xl text-gray-900 mb-1 md:mb-2">
                Be featured in site highlights and headlines
              </h3>
              <p className="hidden md:block text-xs md:text-base text-gray-600">
                Get recognized for your contributions to technology, leadership,
                and industry influence
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-10">
          <Link
            to="/join"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-900 to-pink-900 text-white rounded-lg hover:from-purple-800 hover:to-pink-800 transition-all hover:scale-105 shadow-xl text-lg cursor-pointer"
          >
            <span>Get Started Today</span>
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
