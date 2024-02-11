"use client";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";
import { RECENT_SEARCH } from "@/common/constant/recentSearch";
import RecentSearchCard from "./RecentSearchCard";

const RecentSearch = () => {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);

  const renderCards = () => {
    return RECENT_SEARCH.map((item, index) => (
      <RecentSearchCard key={index} {...item} />
    ));
  };

  return (
    <section className="relative overflow-hidden md:px-16 px-5 pb-10">
      <div className="flex flex-col space-y-2 pb-10">
        <h1 className="text-3xl font-bold">Your Recent Searches</h1>
        <p className="text-lg font-medium">
          Here are some of the places you have searched
        </p>
      </div>
      <div
        className="flex w-full gap-4 overflow-x-scroll no-scrollbar"
        {...events}
        ref={ref}
      >
        {renderCards()}
      </div>
    </section>
  );
};

export default RecentSearch;
