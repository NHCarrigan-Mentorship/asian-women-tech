import { useAuth } from "../../contexts/AuthContext";
import Hero from "../../components/layout/Hero";
import ProfileCreation from "../../components/profile/ProfileCreation";
import FeaturedProfiles from "../../components/profile/FeaturedProfiles";
import CallToAction from "../../components/layout/CallToAction";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      {!isAuthenticated && <ProfileCreation />}
      <FeaturedProfiles />
      {!isAuthenticated && <CallToAction />}
    </div>
  );
}
5;
