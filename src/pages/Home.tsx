import { Link } from "react-router-dom";
import HeadlineSlider from "../components/HeadlineSlider";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative text-white py-16 md:py-24 overflow-hidden bg-gradient-to-br from-brand-purple to-brand-pink">
        {/* Background Image */}
        <div className="absolute inset-0 bg-cover bg-center" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Her Tech Story
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mb-8">
            Create your public profile, control how you’re represented, and
            discover other inspiring women in tech.
          </p>
          <Link
            to="/join"
            className="px-8 py-4 bg-white text-purple-600 font-bold rounded-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-xl text-lg inline-flex items-center gap-2 group cursor-pointer"
          >
            Join Now
            <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
      {/* Headline Slider Section */}
      <HeadlineSlider />
    </div>
  );
}
5;
