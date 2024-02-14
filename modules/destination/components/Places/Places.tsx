import { PLACES } from "@/common/constant/places";
import React from "react";
import PlacesCard from "./PlacesCard";
import { Button } from "@chakra-ui/react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function Places() {
  return (
    <section className="w-full flex flex-col justify-center items-center md:px-16 px-5 pb-24">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 pb-20">
        {PLACES.map((place, index) => (
          <PlacesCard key={index} {...place} />
        ))}
      </div>
      <div className="flex items-center gap-7">
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
          <Button colorScheme="messenger" variant="outline" rounded={"md"}>
            50
          </Button>
        </div>
        <IoIosArrowForward />
      </div>
    </section>
  );
}
