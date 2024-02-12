"use client";
import { STORIES } from "@/common/constant/stories";
import React from "react";
import StoriesCard from "./StoriesCard";
import { Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import useIsMobile from "@/common/hooks/useIsMobile";

export default function Stories() {
  const isMobile = useIsMobile();
  return (
    <section className="flex flex-col items-center justify-center md:px-16 px-5 pt-20 pb-20">
      <div className="flex w-full items-center justify-between pb-10">
        <div className="flex flex-col space-y-3 pb-5">
          <h1 className="text-3xl font-bold">Top Travel Stories</h1>
          <p className="text-lg font-medium">
            Explore our latest stories from our active users{" "}
          </p>
        </div>

        {isMobile ? null : (
          <Button colorScheme="blue" variant="outline" rounded={"full"}>
            View All Stories
          </Button>
        )}
      </div>
      <article className="grid sm:grid-cols-2 grid-cols-1 gap-7 pb-10">
        {STORIES.map((items, index) => (
          <StoriesCard key={index} {...items} />
        ))}
      </article>
      {isMobile && (
        <Button colorScheme="blue" variant="outline" rounded={"full"}>
          View All Stories
        </Button>
      )}
      <div className="flex items-center justify-center pt-10">
        <div className="flex items-center gap-3">
          <IoIosArrowBack />
          <div className="flex gap-2">
            <Button colorScheme="messenger" variant="solid" rounded={"md"}>
              1
            </Button>
            <Button colorScheme="messenger" variant="outline" rounded={"md"}>
              2
            </Button>
            <Button colorScheme="messenger" variant="outline" rounded={"md"}>
              3
            </Button>
            <Button colorScheme="messenger" variant="outline" rounded={"md"}>
              4
            </Button>
            <Button colorScheme="messenger" variant="outline" rounded={"md"}>
              ...
            </Button>
          </div>
          <IoIosArrowForward />
        </div>
      </div>
    </section>
  );
}
