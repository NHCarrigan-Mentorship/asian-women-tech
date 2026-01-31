import { useMemo, useState, useRef } from "react";
import CallToAction from "../../components/layout/CallToAction";
import SearchHeader from "../../features/search/components/SearchHeader";
import FilteredProfiles from "../../features/search/results/FilteredProfiles";
import ProfileSearchBar from "../../features/search/components/ProfileSearchBar";
import MobileFilterModal from "../../features/search/responsive/MobileFilterModal";
import { useProfilesContext } from "../../contexts/ProfilesContext";
import LoadingState from "../../components/ui/LoadingState";

export default function Search() {
  const [search, setSearch] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  const { profiles, loading } = useProfilesContext();

  console.log(profiles);

  // Get all unique expertise areas
  const allExpertise = useMemo(() => {
    const expertiseSet = new Set<string>();
    profiles.forEach(
      (profile) =>
        profile?.expertise &&
        profile.expertise.forEach((expertise) => {
          expertiseSet.add(expertise);
        }),
    );
    return Array.from(expertiseSet).sort();
  }, []);

  // Filter profiles based on search and expertise
  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesSearch =
        search != ""
          ? profile?.name.toLowerCase().includes(search.toLowerCase()) ||
            (profile?.role &&
              profile?.role.toLowerCase().includes(search.toLowerCase())) ||
            (profile?.company &&
              profile?.company.toLowerCase().includes(search.toLowerCase())) ||
            (profile?.bio &&
              profile?.bio.toLowerCase().includes(search.toLowerCase()))
          : true;

      const matchesExpertise =
        selectedExpertise.length === 0 ||
        (profile?.expertise &&
          profile?.expertise.some((exp) => selectedExpertise.includes(exp)));

      return matchesSearch && matchesExpertise;
    });
  }, [search, selectedExpertise]);

  // Toggle expertise filter
  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise],
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearch("");
    setSelectedExpertise([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <SearchHeader />

      <ProfileSearchBar
        search={search}
        onSearch={setSearch}
        allExpertise={allExpertise}
        selectedExpertise={selectedExpertise}
        setSelectedExpertise={setSelectedExpertise}
        filteredProfiles={filteredProfiles}
        onOpenMobileFilter={() => setShowMobileFilter(true)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8">
        {loading ? (
          <LoadingState message="Loading profiles..." />
        ) : (
          <FilteredProfiles
            filteredProfiles={filteredProfiles}
            onClearFilters={clearAllFilters}
          />
        )}
      </div>

      <div ref={ctaRef}>
        <CallToAction />
      </div>

      <MobileFilterModal
        isOpen={showMobileFilter}
        onClose={() => setShowMobileFilter(false)}
        searchQuery={search}
        setSearchQuery={setSearch}
        allExpertise={allExpertise}
        selectedExpertise={selectedExpertise}
        toggleExpertise={toggleExpertise}
        clearAllFilters={clearAllFilters}
        filteredProfilesCount={filteredProfiles.length}
      />
    </div>
  );
}
