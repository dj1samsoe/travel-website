"use client";
import useIsMobile from "@/common/hooks/useIsMobile";
import { Button } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import LocationCard from "./LocationCard";
import { LOCATIONS } from "@/common/constant/locations";

export default function Locations() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center justify-center md:px-16 px-5 pt-10 pb-20">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col space-y-3 pb-5">
          <h1 className="text-3xl font-bold">Locations based on search</h1>
          <p className="text-lg font-medium">
            Check out fun places based on your searches
          </p>
        </div>
        {isMobile ? null : (
          <div className="flex gap-3">
            <Button colorScheme="gray" variant="solid" rounded={"full"}>
              <FaArrowLeft className="text-neutral-400" />
            </Button>
            <Button colorScheme="blue" variant="solid" rounded={"full"}>
              <FaArrowRight />
            </Button>
          </div>
        )}
      </div>
      <div className="w-full flex gap-5 py-5">
        <Carousel
          slidesToShow={isMobile ? 1 : 3}
          renderCenterLeftControls={({ previousSlide }) => null}
          renderCenterRightControls={({ nextSlide }) => null}
          renderBottomCenterControls={({
            slideCount,
            currentSlide,
            goToSlide,
          }) => null}
          cellSpacing={16}
        >
          {LOCATIONS.map((items, index) => (
            <LocationCard key={index} {...items} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
