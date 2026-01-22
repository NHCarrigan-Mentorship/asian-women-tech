import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import BackNavigation from "../../components/navigation/BackNavigation";
import ProfileAuthorshipNotice from "../../components/profile/detail/ProfileAuthorshipNotice";
import ProfileCard from "../../components/profile/detail/ProfileCard";
import ProfileNotFound from "../../features/search/results/ProfileNotFound";
import { profiles } from "../../data/profiles";

export default function ProfileDetail() {
  const { username } = useParams();
  const profile = profiles.find((profile) => profile.username === username);
  const [showBottomNotice, setShowBottomNotice] = useState(false);
  const [noticeDismissed, setNoticeDismissed] = useState(false);

  useEffect(() => {
    if (noticeDismissed) return;
    const handleScroll = () => {
      setShowBottomNotice(window.scrollY > 200);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [noticeDismissed]);

  if (!profile) {
    return (
      <div className="flex flex-1 justify-center items-center p-10">
        <ProfileNotFound />
      </div>
    );
  }
  return (
    <div className="flex-1 py-2">
      <BackNavigation />
      <ProfileAuthorshipNotice position="top" />
      <ProfileCard id={profile.id} />
      {/* Notice Banner - Bottom (abstracted) */}
      {showBottomNotice && !noticeDismissed && (
        <ProfileAuthorshipNotice
          position="bottom"
          show={true}
          onClose={() => {
            setNoticeDismissed(true);
            setShowBottomNotice(false);
          }}
        />
      )}
    </div>
  );
}
