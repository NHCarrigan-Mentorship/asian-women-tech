import type { UserProfile } from "../../../types/UserProfile";
import ProfileCard from "./ProfileCard";

interface ProfileListProps {
  filteredProfiles: UserProfile[];
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
