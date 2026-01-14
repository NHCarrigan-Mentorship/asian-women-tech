import { useMemo } from "react";
import { Search } from "lucide-react";
import { profiles } from "../../../data/profiles";

interface ProfileSearchBarProps {
  search: string;
  onSearch: (value: string) => void;
  profilesCount: number;
}

export default function ProfileSearchBar({
  search,
  onSearch,
  profilesCount,
}: ProfileSearchBarProps) {
  // Get all unique expertise areas
  const allExpertise = useMemo(() => {
    const expertiseSet = new Set<string>();
    profiles.forEach((profile) => {
      profile.expertise.forEach((expertise) => {
        expertiseSet.add(expertise);
      });
    });
    return Array.from(expertiseSet).sort();
  }, []);

  return (
    <div className="border border-pink-200 bg-gradient-to-br from-pink-50 to-rose-50 sticky top-14 md:top-16 z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-center gap-4">
          {/* Search Bar */}
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-pink-400 w-5 h-5" />
            <input
              type="text"
              value={search}
              onChange={(e) => onSearch(e.target.value)}
              placeholder="Search by name, role, company, or keywords..."
              className="w-full px-10 py-2 border border-pink-200 rounded bg-white focus:ring-2 focus:ring-pink-500 focus:border-transparent"
            ></input>
          </div>
          {/* Filter Dropdown Panel */}
          <div className="md:w-64">
            <select className="w-full px-5 py-2 border border-pink-200 rounded bg-white text-gray-900 focus:ring-2 focus:ring-pink-500 focus:border-transparent">
              {allExpertise.map((expertise) => {
                return <option>{expertise}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="mt-4 text-sm text-pink-800 font-semi-bold">
          Showing {profilesCount} {profilesCount === 1 ? "profile" : "profiles"}
        </div>
      </div>
    </div>
  );
}
