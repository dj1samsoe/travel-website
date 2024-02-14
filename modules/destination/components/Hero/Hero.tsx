import { Button } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { FcGoogle } from "react-icons/fc";

export default function Hero() {
  return (
    <section className="flex w-full min-h-screen">
      <div
        className="w-full h-screen object-cover"
        style={{
          backgroundImage: "url('/hero-destination.png')",
          backgroundPosition: "top, center",
        }}
      >
        <div className="w-full h-full bg-black/30 transition-all duration-200">
          <div className="w-full h-full flex items-center justify-center md:px-16 px-5">
            <h1 className="text-white font-bold text-center text-7xl">
              Discovering the wonders of our planet, one adventure at a time
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
