"use client";
import { EXPLORE } from "@/common/constant/explore";
import useIsMobile from "@/common/hooks/useIsMobile";
import { Button } from "@chakra-ui/react";
import Carousel from "nuka-carousel";
import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ExploreCard from "./ExploreCard";

export default function Explore() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center justify-center md:px-16 px-5 pt-10 pb-20">
      <div className="flex w-full items-center justify-between">
        <div className="flex flex-col space-y-3 pb-5">
          <h1 className="text-3xl font-bold">Top Locations to Explore</h1>
          <p className="text-lg font-medium">
            Here are some of the most visited places in 2023
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
          {EXPLORE.map((items, index) => (
            <ExploreCard key={index} {...items} />
          ))}
        </Carousel>
      </div>
    </section>
  );
}
