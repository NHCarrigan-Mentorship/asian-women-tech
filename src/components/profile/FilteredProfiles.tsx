import EmptyProfiles from "./EmptyProfiles";
import type { Profile } from "../../data/profiles";

interface FilteredProfilesProps {
  filteredProfiles: Profile[];
}

export default function FilteredProfiles({
  filteredProfiles,
}: FilteredProfilesProps) {
  return (
    <>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProfiles.length === 0 && <EmptyProfiles />}
      </div>
    </>
  );
}
