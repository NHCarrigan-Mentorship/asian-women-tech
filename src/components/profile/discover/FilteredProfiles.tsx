import EmptyProfiles from "./EmptyProfiles";
import ProfileList from "./ProfileList";
import type { Profile } from "../../../data/profiles";

interface FilteredProfilesProps {
  filteredProfiles: Profile[];
  onClearFilters: () => void;
}

export default function FilteredProfiles({
  filteredProfiles,
  onClearFilters,
}: FilteredProfilesProps) {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProfiles.length === 0 ? (
          <EmptyProfiles onClearFilters={onClearFilters} />
        ) : (
          <ProfileList filteredProfiles={filteredProfiles} />
        )}
      </div>
    </div>
  );
}
