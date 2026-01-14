import { useMemo, useState, useRef } from "react";
import CallToAction from "../../components/layout/CallToAction";
import ScrollToTopButton from "../../components/layout/ScrollToTopButton";
import DiscoverHeader from "../../components/profile/discover/DiscoverHeader";
import FilteredProfiles from "../../components/profile/discover/FilteredProfiles";
import ProfileSearchBar from "../../components/profile/discover/ProfileSearchBar";
import MobileFilterModal from "../../components/profile/discover/search/MobileFilterModal";
import { profiles } from "../../data/profiles";

export default function Discover() {
  const [search, setSearch] = useState<string>("");
  const [selectedExpertise, setSelectedExpertise] = useState<string[]>([]);
  const [showMobileFilter, setShowMobileFilter] = useState(false);
  const ctaRef = useRef<HTMLDivElement>(null);

  // Get all unique expertise areas
  const allExpertise = useMemo(() => {
    const expertiseSet = new Set<string>();
    profiles.forEach((profile) =>
      profile.expertise.forEach((expertise) => {
        expertiseSet.add(expertise);
      })
    );
    return Array.from(expertiseSet).sort();
  }, []);

  // Filter profiles based on search and expertise
  const filteredProfiles = useMemo(() => {
    return profiles.filter((profile) => {
      const matchesSearch =
        profile.name.toLowerCase().includes(search.toLowerCase()) ||
        profile.role.toLowerCase().includes(search.toLowerCase()) ||
        profile.company.toLowerCase().includes(search.toLowerCase()) ||
        profile.bio.toLowerCase().includes(search.toLowerCase());

      const matchesExpertise =
        selectedExpertise.length === 0 ||
        profile.expertise.some((exp) => selectedExpertise.includes(exp));

      return matchesSearch && matchesExpertise;
    });
  }, [search, selectedExpertise]);

  // Toggle expertise filter
  const toggleExpertise = (expertise: string) => {
    setSelectedExpertise((prev) =>
      prev.includes(expertise)
        ? prev.filter((e) => e !== expertise)
        : [...prev, expertise]
    );
  };

  // Clear all filters
  const clearAllFilters = () => {
    setSearch("");
    setSelectedExpertise([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <DiscoverHeader />

      <ProfileSearchBar
        search={search}
        onSearch={setSearch}
        allExpertise={allExpertise}
        selectedExpertise={selectedExpertise}
        setSelectedExpertise={setSelectedExpertise}
        filteredProfiles={filteredProfiles}
        onOpenMobileFilter={() => setShowMobileFilter(true)}
      />

      <FilteredProfiles
        filteredProfiles={filteredProfiles}
        onClearFilters={clearAllFilters}
      />

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

      <ScrollToTopButton />
    </div>
  );
}
