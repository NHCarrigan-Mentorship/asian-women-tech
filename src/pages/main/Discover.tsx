import CallToAction from "../../components/layout/CallToAction";
import DiscoverHeader from "../../components/layout/DiscoverHeader";
import FilteredProfiles from "../../components/profile/FilteredProfiles";
import ProfileSearchBar from "../../components/profile/ProfileSearchBar";
import { useState } from "react";
import { profiles } from "../../data/profiles";

export default function Discover() {
  const [search, setSearch] = useState("");
  const filteredProfiles = profiles.filter(
    (profile) =>
      profile.name.toLowerCase().includes(search.toLowerCase()) ||
      profile.role.toLowerCase().includes(search.toLowerCase()) ||
      profile.company.toLowerCase().includes(search.toLowerCase())
  );

  console.log(filteredProfiles);

  const onSearch = setSearch;

  return (
    <>
      <DiscoverHeader />
      <ProfileSearchBar
        search={search}
        onSearch={onSearch}
        profilesCount={filteredProfiles.length}
      />
      <FilteredProfiles filteredProfiles={filteredProfiles} />
      <CallToAction />
    </>
  );
}
