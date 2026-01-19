import { useAuth } from "../../contexts/AuthContext";
import Hero from "../../components/layout/Hero";
import ProfileCreation from "../../components/profile/home/ProfileCreation";
import FeaturedProfiles from "../../components/profile/home/FeaturedProfiles";
import CallToAction from "../../components/layout/CallToAction";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen">
      <Hero />
      {!isAuthenticated && <ProfileCreation />}
      <FeaturedProfiles />
      {!isAuthenticated && <CallToAction />}
    </div>
  );
}
5;
