import { useState, useEffect, useRef } from "react";
import CallToAction from "../../components/layout/CallToAction";
import DiscoverHeader from "../../components/profile/discover/DiscoverHeader";
import FilteredProfiles from "../../components/profile/discover/FilteredProfiles";
import ProfileSearchBar from "../../components/profile/discover/ProfileSearchBar";
import { profiles } from "../../data/profiles";

export default function Discover() {
  const [search, setSearch] = useState("");
  const [isSticky, setIsSticky] = useState(true);
  const ctaRef = useRef<HTMLDivElement>(null);

  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.role.toLowerCase().includes(search.toLowerCase()) ||
      profile.company.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When CTA is visible, disable sticky
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 0, rootMargin: "-80px 0px 0px 0px" } // Adjust rootMargin based on your header height
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <DiscoverHeader />
      <div className={isSticky ? "sticky top-0 z-10 bg-white" : ""}>
        <ProfileSearchBar
          search={search}
          onSearch={setSearch}
          profilesCount={filteredProfiles.length}
        />
      </div>
      <FilteredProfiles filteredProfiles={filteredProfiles} />
      <div ref={ctaRef}>
        <CallToAction />
      </div>
    </>
  );
}
