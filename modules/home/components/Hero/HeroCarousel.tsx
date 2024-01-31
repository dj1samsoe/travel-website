import Carousel from "nuka-carousel";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import { GoHorizontalRule } from "react-icons/go";

export default function HeroCarousel() {
  return (
    <Carousel
      autoplay
      autoplayInterval={5000}
      wrapAround={true}
      slidesToShow={1}
      renderCenterLeftControls={({ previousSlide }) => null}
      renderCenterRightControls={({ nextSlide }) => null}
      renderBottomCenterControls={({ slideCount, currentSlide, goToSlide }) => (
        <div className="slider-control-bottomcenter max-w-screen-2xl">
          <ul className="flex gap-1h-fit justify-center px-10">
            {Array.from({ length: slideCount }).map((_, index) => (
              <li key={index}>
                <button
                  onClick={() => goToSlide(index)}
                  style={{
                    color: index === currentSlide ? "white" : "gray",
                  }}
                >
                  {currentSlide === index ? (
                    <GoHorizontalRule className="w-16 h-16" />
                  ) : (
                    <GoHorizontalRule className="w-10 h-16" />
                  )}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    >
      <div className="flex w-full min-h-screen">
        <div
          className="w-full min-h-screen bg-cover"
          style={{
            backgroundImage: "url('/hero1-1.png')",
            backgroundPosition: "center, center",
          }}
        >
          <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-all duration-200">
            <div className="w-full h-full flex items-end justify-between px-5 py-20">
              <h1 className="text-white font-bold text-2xl w-[24rem]">
                Why you should reconsider The Inca Trail, Peru Trip
              </h1>
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full min-h-screen">
        <div
          className="w-full min-h-screen bg-cover"
          style={{
            backgroundImage: "url('/hero2-2.png')",
            backgroundPosition: "center, center",
          }}
        >
          <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-all duration-200">
            <div className="w-full h-full flex items-end justify-between px-5 py-20">
              <h1 className="text-white font-bold text-2xl w-[24rem]">
                The Hidden Powers of The Northern Lights, Iceland
              </h1>
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex w-full min-h-screen">
        <div
          className="w-full min-h-screen bg-cover"
          style={{
            backgroundImage: "url('/hero3-3.png')",
            backgroundPosition: "center, center",
          }}
        >
          <div className="w-full h-full bg-black/50 hover:bg-black/30 transition-all duration-200">
            <div className="w-full h-full flex items-end justify-between px-5 py-20">
              <h1 className="text-white font-bold text-2xl w-[24rem]">
                10 Facts you didn’t know about The Blue Hole, Belize
              </h1>
              <FaArrowRight size={40} className="text-white" />
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}
