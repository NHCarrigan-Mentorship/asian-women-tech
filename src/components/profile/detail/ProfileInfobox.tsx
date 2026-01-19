import {
  Award,
  Building2,
  MapPin,
  Linkedin,
  Twitter,
  Globe,
} from "lucide-react";
import { profiles } from "../../../data/profiles";

interface ProfileInfoboxProps {
  id: string;
}

export default function ProfileInfobox({ id }: ProfileInfoboxProps) {
  const profile = profiles.find((profile) => profile.id === id);
  return (
    <>
      <aside className="md:w-72 lg:w-80 flex-shrink-0">
        <div className="bg-gradient-to-br from-pink-50 to-rose-50 border border-pink-200 rounded">
          {/* Profile Image */}
          <div className="aspect-square overflow-hidden bg-gray-100">
            <img
              src={profile?.imageUrl}
              alt={profile?.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Infobox Content */}
          <div className="p-4 space-y-3 text-sm">
            <div className="pb-3 border-b border-pink-200">
              {/* Profile Name */}
              <h3 className="mb-2 text-base font-bold text-gray-900">
                {profile?.name}
              </h3>
            </div>

            <div className="space-y-3">
              {/* Profile Role */}
              <div>
                <div className="text-pink-700 font-semibold">Role</div>
                <div className="flex items-center gap-1">
                  <Award className="w-3.5 h-3.5 text-pink-700" />
                  <div className="text-gray-900">{profile?.role}</div>
                </div>
              </div>

              {/* Profile Company */}
              <div>
                <div className="text-pink-700 font-semibold">
                  Company/Organization
                </div>
                <div className="flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5 text-pink-700" />
                  <div className="text-gray-900">{profile?.company}</div>
                </div>
              </div>

              {/* Profile Location */}
              <div>
                <div className="text-pink-700 font-semibold">Location</div>
                <div className="flex items-center gap-1">
                  <MapPin className="w-3.5 h-3.5 text-pink-700" />
                  <div className="text-gray-900">{profile?.location}</div>
                </div>
              </div>

              {/* Profile Links */}
              <div>
                <div className="mb-2 text-pink-700 font-semibold">Links</div>
                <div className="flex items-center gap-3">
                  {profile?.social &&
                    Object.entries(profile.social).map(([platform, url]) => {
                      if (!url) return null;

                      const socialConfig = {
                        linkedin: { icon: Linkedin, label: "Linkedin" },
                        twitter: { icon: Twitter, label: "Twitter" },
                        website: { icon: Globe, label: "Website" },
                      };

                      const config =
                        socialConfig[platform as keyof typeof socialConfig];
                      const Icon = config.icon;

                      return (
                        <a
                          href={url}
                          aria-label={`${profile.name}'s ${platform} profile`}
                          className="flex items-center justify-center min-w-[44px] min-h-[44px] border border-pink-200 bg-white rounded hover:bg-pink-100 transition-colors"
                        >
                          <Icon
                            className="w-5 h-5 text-pink-700"
                            aria-hidden="true"
                          />
                        </a>
                      );
                    })}
                </div>
              </div>

              {/* Profile Expertise */}
              <div>
                <div className="mb-2 text-pink-700 font-semibold">
                  Expertise
                </div>
                <div className="flex items-center flex-wrap gap-1">
                  {profile?.expertise.map((expertise) => {
                    return (
                      <span className="px-2 py-0.5 border border-pink-200 bg-white text-pink-700 text-xs rounded hover:bg-pink-100 transition-colors">
                        {expertise}
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
