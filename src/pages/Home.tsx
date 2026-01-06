import { Link } from "react-router-dom";
import HeadlineSlider from "../components/HeadlineSlider";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 md:py-24 overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url(https://images.unsplash.com/photo-1650784853603-bd1ee8fb6712?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWVuJTIwdGVjaCUyMGNvbmZlcmVuY2V8ZW58MXx8fHwxNzY3NDI3Njc4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral)",
          }}
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/85 to-pink-900/85" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Celebrating Asian Women
            <br />
            Shaping the Future of Tech
          </h1>
          <p className="text-xl md:text-2xl text-purple-100 max-w-3xl mb-8">
            Discover the stories, achievements, and impact of Asian women
            leaders who are transforming the technology industry worldwide.
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
      {/* Pillars of Action Section */}
      {/* Headline Slider Section */}
      <HeadlineSlider />
    </div>
  );
}
5;
