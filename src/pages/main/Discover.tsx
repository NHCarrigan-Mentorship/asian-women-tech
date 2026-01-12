import DiscoverHeader from "../../components/layout/DiscoverHeader";
import ProfileSearchBar from "../../components/profile/ProfileSearchBar";
import { useState } from "react";

export default function Discover() {
  const [search, setSearch] = useState("");

  const onSearch = setSearch;

  return (
    <>
      <DiscoverHeader />
      <ProfileSearchBar search={search} onSearch={onSearch} />
    </>
  );
}
