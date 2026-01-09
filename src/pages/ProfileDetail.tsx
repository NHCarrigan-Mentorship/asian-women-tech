import { useParams } from "react-router-dom";
import { profiles } from "../data/profiles";
import BackNavigation from "../components/BackNavigation";
import ProfileAuthorshipNotice from "../components/ProfileAuthorshipNotice";

export default function ProfileDetail() {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-white">
      <BackNavigation />
      <ProfileAuthorshipNotice />
      {/* Render profile */}
      <h1>Dr. Amara Johnson</h1>
    </div>
  );
}
