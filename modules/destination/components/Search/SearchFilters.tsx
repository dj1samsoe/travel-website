import { Input, InputGroup, InputRightElement, Select } from "@chakra-ui/react";
import React from "react";
import { FiSearch } from "react-icons/fi";

export default function SearchFilters() {
  return (
    <section className="w-full md:px-16 px-5 pt-10 pb-20">
      <div className="max-w-[700px] w-full">
        <div className="flex flex-col space-y-5">
          <InputGroup size="md">
            <Input
              variant={"outline"}
              rounded={"full"}
              type="text"
              placeholder="Search for places, hotels, or restaurants"
              className="font-medium"
            />
            <InputRightElement>
              <FiSearch className="text-neutral-500 mr-4" size={20} />
            </InputRightElement>
          </InputGroup>
          <div className="flex md:flex-row flex-col gap-5">
            <div className="flex flex-col space-y-3 md:w-1/2 w-full">
              <h1 className="text-xl font-semibold">Filter by type of place</h1>
              <Select
                placeholder="All Types"
                rounded={"full"}
                className="font-semibold"
              >
                <option value="option1">Beach</option>
                <option value="option2">City View</option>
                <option value="option3">Desert</option>
                <option value="option3">Historical Heritage</option>
                <option value="option3">Waterfall</option>
              </Select>
            </div>
            <div className="flex flex-col space-y-3 md:w-1/2 w-full">
              <h1 className="text-xl font-semibold">Sort by</h1>
              <Select
                placeholder="Most Popular"
                rounded={"full"}
                className="font-semibold"
              >
                <option value="option1">Most Reviewed</option>
                <option value="option2">Most Visited</option>
                <option value="option3">Most Affordable</option>
                <option value="option3">Most Crowded</option>
              </Select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
