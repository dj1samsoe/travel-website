"use client";
import { CROATIA } from "@/common/constant/croatiaStories";
import { Button } from "@chakra-ui/react";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import LatestFeaturedCard from "./LatestFeaturedCard";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function LatestFeatured() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const renderCards = () => {
    return CROATIA.map((item, index) => (
      <LatestFeaturedCard key={index} {...item} />
    ));
  };

  return (
    <section className="w-full min-h-screen flex flex-col space-y-5 md:px-16 px-5 pb-24">
      <div className="flex flex-col space-y-5 pb-10">
        <p className="text-lg font-semibold text-[#4169E1] tracking-widest">
          02 / LATEST FEATURED STORIES
        </p>
        <div className="flex sm:flex-row flex-col space-y-3 w-full sm:justify-between">
          <h1 className="text-4xl font-medium sm:w-1/3 w-full">
            Latest Stories from Croatia
          </h1>
          <div className="flex items-center justify-center">
            <Button colorScheme="messenger" variant="outline" rounded={"full"}>
              View All Stories
            </Button>
          </div>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <div
          className="flex w-full gap-4 overflow-x-scroll no-scrollbar"
          {...events}
          ref={ref}
        >
          {renderCards()}
        </div>
      </div>
      <div className="flex justify-end items-center pt-5">
        <div className="flex gap-3">
          <Button colorScheme="gray" variant="solid" rounded={"full"}>
            <FaArrowLeft className="text-neutral-400" />
          </Button>
          <Button colorScheme="blue" variant="solid" rounded={"full"}>
            <FaArrowRight />
          </Button>
        </div>
      </div>
    </section>
  );
}
