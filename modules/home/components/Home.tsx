import React from "react";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import BestTrip from "./BestTrip/BestTrip";
import Explore from "./Explore/Explore";
import RecentSearch from "./RecentSearch/RecentSearch";
import Locations from "./LocationSearch/Locations";
import Stories from "./Stories/Stories";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <BestTrip />
      <Explore />
      <RecentSearch />
      <Locations />
      <Stories />
    </>
  );
}
