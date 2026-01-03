import { Link } from "react-router-dom";
import { Rocket } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-purple-600 to-pink-600 text-white py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            Celebrating Asian Women
            <br />
            Shaping the Future of Tech
          </h1>
          <p className="mt-5 text-xl md:text-1xl lg:text-2xl max-w-3xl">
            Discover the stories, achievements, and impact of Asian women
            leaders who are transforming the technology industry worldwide.
          </p>
          <Link
            to="/login"
            className="inline-flex items-center justify-center gap-2 group mt-6 px-8 py-4 bg-white text-purple-600 text-lg rounded-lg hover:bg-purple-50 transition-all hover:scale-105 shadow-xl cursor-pointer"
          >
            Join Now
            <Rocket className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
5;
