import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HeroDesktop() {
  return (
    <div className="flex w-full min-h-screen">
      <div
        className="w-1/3 min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/hero1-1.png')",
          backgroundPosition: "center, center",
        }}
      >
        <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-all duration-200">
          <div className="w-full h-full flex items-end justify-between p-5">
            <h1 className="text-white font-bold lg:text-2xl md:text-xl w-[20rem]">
              Why you should reconsider The Inca Trail, Peru Trip
            </h1>
            <FaArrowRight size={40} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="w-1/3 min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/hero2-2.png')",
          backgroundPosition: "center, center",
        }}
      >
        <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-all duration-200">
          <div className="w-full h-full flex items-end justify-between p-5">
            <h1 className="text-white font-bold lg:text-2xl text-xl w-[20rem]">
              The Hidden Powers of The Northern Lights, Iceland
            </h1>
            <FaArrowRight size={40} className="text-white" />
          </div>
        </div>
      </div>
      <div
        className="w-1/3 min-h-screen bg-cover"
        style={{
          backgroundImage: "url('/hero3-3.png')",
          backgroundPosition: "center, center",
        }}
      >
        <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-all duration-200">
          <div className="w-full h-full flex items-end justify-between p-5">
            <h1 className="text-white font-bold lg:text-2xl text-xl w-[20rem]">
              10 Facts you didn’t know about The Blue Hole, Belize
            </h1>
            <FaArrowRight size={40} className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
}
