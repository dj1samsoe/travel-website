import Hero from "@/modules/destination/(detailPage)/components/Hero";
import LatestFeatured from "@/modules/destination/(detailPage)/components/LatestFeatured";
import OtherPlaces from "@/modules/destination/(detailPage)/components/OtherPlaces";
import ShortDescription from "@/modules/destination/(detailPage)/components/ShortDescription";
import TopSights from "@/modules/destination/(detailPage)/components/TopSights";
import React from "react";

export default function DetailPage() {
  return (
    <>
      <Hero />
      <ShortDescription />
      <TopSights />
      <LatestFeatured />
      <OtherPlaces />
    </>
  );
}
