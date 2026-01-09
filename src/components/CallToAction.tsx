import { Link } from "react-router-dom";
import { UserPlus } from "lucide-react";

export default function CallToAction() {
  return (
    <div className="flex flex-col gap-6 items-center py-16 md:py-20 bg-gradient-to-br from-pink-500 to-rose-500 text-white mb-20">
      <div className="p-4 bg-white/20 rounded-full">
        {/* Icon */}
        <UserPlus className="w-8 h-8" />
      </div>

      {/* Heading */}
      <h2 className="text-3xl md:text-4xl font-bold">Share Your Story</h2>

      {/* Description */}
      <p className="max-w-2xl text-lg md:text-xl text-center mb-4">
        Are you a woman in tech who wants to share your story? Write your own
        profile now.
      </p>

      {/* Call to Action Button */}
      <Link
        to="/signup"
        className="px-8 py-4 bg-white text-pink-500 font-bold hover:bg-pink-500 hover:text-white transition-all hover:scale-105 shadow-lg text-lg inline-flex items-center gap-2 group cursor-pointer"
      >
        Create Profile
        <UserPlus className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
}
