import React from "react";
import Hero from "./Hero/Hero";
import SearchFilters from "./Search/SearchFilters";
import Places from "./Places/Places";

export default function DestinationPage() {
  return (
    <>
      <Hero />
      <SearchFilters />
      <Places />
    </>
  );
}
