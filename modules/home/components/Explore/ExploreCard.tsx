import Card from "@/common/components/elements/Card";
import Image from "next/image";
import React from "react";

interface ExploreCardProps {
  image: string;
  location: string;
  title: string;
}

export default function ExploreCard({
  image,
  location,
  title,
}: ExploreCardProps) {
  return (
    <Card className="flex flex-col space-y-1">
      <Image
        src={image}
        alt="destination-image"
        width={400}
        height={400}
        className="object-fit rounded-3xl pb-2"
      />
      <p className="text-md text-neutral-700">{location}</p>
      <h1 className="text-xl mt-5 font-bold">{title}</h1>
    </Card>
  );
}
