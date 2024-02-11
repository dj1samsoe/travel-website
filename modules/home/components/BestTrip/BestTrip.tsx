"use client";
import React from "react";
import DestinationCard from "./DestinationCard";
import { DESTINATIONS } from "@/common/constant/bestTrip";
import { Button } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import useIsMobile from "@/common/hooks/useIsMobile";

export default function BestTrip() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center justify-center md:px-16 px-5 pt-10 pb-20">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col space-y-3 pb-5">
          <h1 className="text-3xl font-bold">Plan your best trip ever</h1>
          <p className="text-lg font-medium">
            Making the Most of Your Travel Experience in 2023
          </p>
        </div>
        {isMobile ? null : (
          <Button colorScheme="blue" variant="outline" rounded={"full"}>
            View All Destination
          </Button>
        )}
      </div>
      <div className="w-full flex py-5">
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
          {DESTINATIONS.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </Carousel>
      </div>
      {isMobile && (
        <Button colorScheme="blue" variant="outline" rounded={"full"}>
          View All Destination
        </Button>
      )}
    </section>
  );
}
