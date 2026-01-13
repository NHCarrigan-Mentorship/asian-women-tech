import { profiles } from "../../../data/profiles";
import { Clock, ExternalLink } from "lucide-react";

interface ProfileContentProps {
  id: string;
}

export default function ProfileContent({ id }: ProfileContentProps) {
  const profile = profiles.find((profile) => profile?.id === id);

  return (
    <div className="flex-1 min-w-0">
      {/* Profile Name */}
      <h1 className="pb-2 border-b-2 border-pink-200 text-4xl text-gray-900 font-bold">
        {profile?.name}
      </h1>

      {/* Profile Last Updated */}
      <div className="flex items-center gap-1.5 py-2 mb-6 text-gray-600 text-sm italic">
        <Clock className="w-3.5 h-3.5" />
        <span>Last updated: {profile?.lastUpdated}</span>
      </div>

      {/* Profile About */}
      <div className="mb-8">
        <h2 className="mb-4 border-b-1 border-pink-200 pb-1 text-2xl text-gray-900 font-bold">
          About
        </h2>
        <p className="text-base">{profile?.bio}</p>
      </div>

      {/* Profile Achievements */}
      <div className="mb-8">
        <h2 className="mb-4 border-b-1 border-pink-200 pb-1 text-2xl text-gray-900 font-bold">
          Key Achievements
        </h2>
        <ul className="space-y-3">
          {profile?.achievements.map((achievement, index) => {
            return (
              <li className="flex flex-wrap gap-2 text-base" key={index}>
                <span className="text-pink-600">•</span>
                <span className="flex flex-wrap gap-1 flex-1 text-gray-900">
                  <span>{achievement.text}</span>
                  {achievement.link && (
                    <a
                      href={achievement.link}
                      className="flex items-center gap-1 text-pink-700"
                    >
                      [link]
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  )}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
