import React from "react";

export default function ShortDescription() {
  return (
    <section className="flex items-center justify-center w-full md:px-16 px-5 pt-10 pb-20">
      <div className="flex flex-col space-y-3 items-center justify-center max-w-[575px] w-full">
        <h1 className="text-4xl font-bold text-[#4169E1]">Croatia</h1>
        <p className="text-xl text-neutral-700 font-semibold">Europe</p>
        <p className="text-md font-medium text-center">
          Croatia is a fun destination with a wide range of attractions,
          including beautiful coastal cities, stunning national parks, charming
          seaside towns, and picturesque islands. The country offers a rich
          history and culture, with ancient ruins, impressive architecture, and
          a vibrant cultural scene.
        </p>
      </div>
    </section>
  );
}
