import { Link } from "react-router-dom";
import { profiles } from "../data/profiles";
import { ArrowRight } from "lucide-react";

export default function FeaturedProfiles() {
  const featuredProfiles = profiles.map((profile) => {
    // Leader Card
    return (
      <div className="max-w-4xl mx-auto relative">
        <div className="grid md:grid-cols-5 gap-0 bg-white rounded-2xl">
          <div className="md:col-span-2 relative h-[300px] md:h-[400px]">
            <img
              src={profile.imageUrl}
              alt={profile.name}
              className="w-full h-full object-cover rounded-2xl"
            ></img>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          </div>
          <div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center gap-3">
            <div className="w-fit px-3 py-1 mb- bg-purple-100 text-purple-700 text-sm rounded-full">
              Featured Leader
            </div>
            <div className="text-3xl md:text-4xl font-bold">{profile.name}</div>

            <div className="text-xl md:text-2xl text-purple-600">
              {profile.role}
            </div>

            <div className="text-lg text-gray-900 mb-4">{profile.company}</div>

            <blockquote className="border-l-4 border-purple-600 pl-4 mb-4">
              <p className="text-lg text-gray-900 italic">{`"${profile.impact.description}"`}</p>
            </blockquote>

            <Link
              to={`profile/${profile.id}`}
              className="flex gap-2 w-fit px-6 py-3 mx-auto md:mx-0 bg-purple-600 text-white font-bold rounded-lg hover:bg-purple-700 transition-colors group cursor-ponter"
            >
              Learn About Her Story
              <ArrowRight className="w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="py-16 md:py-20">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col gap-5 text-center mb-15">
          <h2 className="text-3xl md:text-4xl font-bold">
            Inspiring Leader Spotlight
          </h2>
          <p className="text-lg md:text-xl text-gray-900">
            Meet the trailblazers transforming technology
          </p>
        </div>
        {featuredProfiles}
      </div>
    </div>
  );
}
