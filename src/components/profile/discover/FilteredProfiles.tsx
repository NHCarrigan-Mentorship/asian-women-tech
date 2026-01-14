import EmptyProfiles from "./EmptyProfiles";
import ProfileList from "./ProfileList";
import type { Profile } from "../../../data/profiles";

interface FilteredProfilesProps {
  filteredProfiles: Profile[];
}

export default function FilteredProfiles({
  filteredProfiles,
}: FilteredProfilesProps) {
  return (
    <div className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {filteredProfiles.length === 0 ? (
          <EmptyProfiles />
        ) : (
          <ProfileList filteredProfiles={filteredProfiles} />
        )}
      </div>
    </div>
  );
}
