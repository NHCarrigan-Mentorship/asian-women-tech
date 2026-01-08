import { useAuth } from "../contexts/AuthContext";
import Hero from "../components/Hero";
import ProfileCreationAnimation from "../components/ProfileCreationAnimation";
import FeaturedProfiles from "../components/FeaturedProfiles";

export default function Home() {
  const { isAuthenticated } = useAuth();

  return (
    <div className="min-h-screen bg-gray-50">
      <Hero />
      {!isAuthenticated && <ProfileCreationAnimation />}
      <FeaturedProfiles />
    </div>
  );
}
5;
