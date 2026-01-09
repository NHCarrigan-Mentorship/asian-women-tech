import { useAuth } from "../contexts/AuthContext";
import Hero from "../components/Hero";
import ProfileCreation from "../components/ProfileCreation";
import FeaturedProfiles from "../components/FeaturedProfiles";
import CallToAction from "../components/CallToAction";

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
