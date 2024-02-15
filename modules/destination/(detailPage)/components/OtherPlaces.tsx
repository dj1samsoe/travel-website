import { Button, Select } from "@chakra-ui/react";
import React from "react";
import { OTHER_PLACES } from "@/common/constant/otherPlaces";
import OtherPlacesCard from "./OtherPlacesCard";

export default function OtherPlaces() {
  return (
    <section className="w-full min-h-screen flex flex-col space-y-5 md:px-16 px-5 pb-24">
      <div className="flex flex-col space-y-5 pb-10">
        <p className="text-lg font-semibold text-[#4169E1] tracking-widest sm:text-start text-center">
          03 / OTHER FUN PLACES IN CROATIA
        </p>
        <div className="flex sm:flex-row flex-col space-y-3 w-full sm:justify-between">
          <h1 className="text-4xl font-medium sm:w-1/3 w-full sm:text-start text-center">
            Other Fun Places in Croatia
          </h1>
          <div className="flex flex-col space-y-3 sm:w-1/3 w-full sm:pt-0 pt-5">
            <h1 className="text-xl font-semibold sm:text-start text-center">
              Filter option
            </h1>
            <Select
              placeholder="All Popular Places"
              rounded={"full"}
              className="font-semibold"
            >
              <option value="option1">Option 1</option>
              <option value="option2">Option 2</option>
              <option value="option3">Option 3</option>
            </Select>
          </div>
        </div>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
        {OTHER_PLACES.map((item, index) => (
          <OtherPlacesCard key={index} {...item} />
        ))}
      </div>
      <div className="flex items-center justify-center pt-10">
        <Button colorScheme="messenger" variant="outline" rounded={"full"}>
          View All Other Places
        </Button>
      </div>
    </section>
  );
}
