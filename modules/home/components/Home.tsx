import React from "react";
import Hero from "./Hero/Hero";
import Featured from "./Featured/Featured";
import BestTrip from "./BestTrip/BestTrip";
import Explore from "./Explore/Explore";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Featured />
      <BestTrip />
      <Explore />
    </>
  );
}
