import { useParams } from "react-router-dom";
import ProfileNotFound from "../components/ProfileNotFound";
import BackNavigation from "../components/BackNavigation";
import ProfileAuthorshipNotice from "../components/ProfileAuthorshipNotice";
import ProfileCard from "../components/ProfileCard";
import { profiles } from "../data/profiles";

export default function ProfileDetail() {
  const { id } = useParams();
  const profile = profiles.find((profile) => profile.id === id);

  if (!profile) {
    return (
      <div className="flex flex-1 justify-center items-center p-10 bg-gray-50">
        <ProfileNotFound />
      </div>
    );
  }
  return (
    <div className="flex-1 py-2 bg-gray-50">
      <BackNavigation />
      <ProfileAuthorshipNotice />
      <ProfileCard id={profile.id} />
    </div>
  );
}
