import Image from "next/image";
import React from "react";

export default function Featured() {
  return (
    <section className="flex flex-col items-center justify-center md:px-16 px-5 pt-20 pb-10">
      <h1 className="text-xl font-bold uppercase">Also Featured In</h1>
      <div className="w-full overflow-x-scroll no-scrollbar py-5">
        <div className="flex gap-10">
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
