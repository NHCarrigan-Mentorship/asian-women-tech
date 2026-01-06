import { useState, useEffect } from "react";
import { profiles } from "../data/profiles";

interface Headline {
  text: string;
  name: string;
  relatedProfileId?: string;
}

const headlines: Headline[] = profiles.flatMap((profile) => ({
  text: profile.achievements[0],
  name: profile.name,
  relatedProfileId: profile.id,
}));

export default function HeadlineSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    // Stop when paused
    if (isPaused) {
      return;
    }
    // Move to next headline every 4 seconds, loop back to start when reaching the end
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % headlines.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, headlines]);

  return (
    <div className="relative bg-gradient-to-br from-brand-purple to-brand-pink py-16 md:py-24 text-white overflow-hidden mt-12">
      Headline here
    </div>
  );
}
