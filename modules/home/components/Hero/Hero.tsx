"use client";
import useIsMobile from "@/common/hooks/useIsMobile";
import React from "react";
import HeroCarousel from "./HeroCarousel";
import HeroDesktop from "./HeroDesktop";

export default function Hero() {
  const isMobile = useIsMobile();
  return (
    <section className="flex items-center justify-center max-w-screen-2xl">
      <div className="relative w-full h-full">
        <div className="absolute top-48 left-48 right-48 z-50">
          <div className="hidden md:flex flex-col items-center justify-center text-white">
            <h1 className="lg:text-6xl md:text-5xl font-bold text-center">
              Discover New Places and Create Unforgettable Memories
            </h1>
          </div>
        </div>
        {isMobile ? <HeroCarousel /> : <HeroDesktop />}
      </div>
    </section>
  );
}
