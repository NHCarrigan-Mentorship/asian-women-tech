import ProfileContent from "./ProfileContent";
import ProfileInfobox from "./ProfileInfobox";
import { useAuth } from "../../../contexts/AuthContext";
import { useParams } from "react-router-dom";
import useProfiles from "../../../hooks/useProfiles";

export default function ProfileCard() {
  const { username } = useParams();
  const { isAuthenticated, user } = useAuth();

  const { profiles } = useProfiles();

  const currentProfile = profiles.find(
    (profile) => profile.username === username,
  );

  const isOwner = isAuthenticated && currentProfile?.id === user?.id;
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="flex flex-col md:flex-row gap-6 lg:gap-8">
        <ProfileInfobox isOwner={isOwner} profile={currentProfile} />
        <ProfileContent isOwner={isOwner} profile={currentProfile} />
      </div>
    </div>
  );
}
