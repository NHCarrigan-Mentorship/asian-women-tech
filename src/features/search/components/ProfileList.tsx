import type { Profile } from "../../../data/profiles";
import ProfileCard from "./ProfileCard";

interface ProfileListProps {
  filteredProfiles: Profile[];
}

export default function ProfileList({ filteredProfiles }: ProfileListProps) {
  return (
    <div className="space-y-4">
      {filteredProfiles.map((profile) => (
        <ProfileCard key={profile.id} profile={profile} />
      ))}
    </div>
  );
}
