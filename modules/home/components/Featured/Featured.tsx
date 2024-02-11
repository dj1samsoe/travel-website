"use client";
import Image from "next/image";
import React, { useRef } from "react";
import { useDraggable } from "react-use-draggable-scroll";

export default function Featured() {
  const ref =
    useRef<HTMLDivElement>() as React.MutableRefObject<HTMLInputElement>;
  const { events } = useDraggable(ref);
  return (
    <section className="flex flex-col items-center justify-center md:px-16 px-5 pt-20 pb-10">
      <h1 className="text-xl font-bold uppercase">Also Featured In</h1>
      <div
        className="w-full overflow-x-scroll no-scrollbar py-5"
        {...events}
        ref={ref}
      >
        <div className="flex gap-10 cursor-pointer">
          <Image
            src="/featured-1.png"
            alt="featured-logo"
            width={300}
            height={100}
          />
          <Image
            src="/featured-2.png"
            alt="featured-logo"
            width={150}
            height={100}
          />
          <Image
            src="/featured-3.png"
            alt="featured-logo"
            width={150}
            height={100}
          />
          <Image
            src="/featured-4.png"
            alt="featured-logo"
            width={150}
            height={100}
          />
          <Image
            src="/featured-5.png"
            alt="featured-logo"
            width={300}
            height={100}
          />
        </div>
      </div>
    </section>
  );
}
