import Card from "@/common/components/elements/Card";
import Image from "next/image";
import React from "react";

interface PlacesCardProps {
  image: string;
  region: string;
  country: string;
}

export default function PlacesCard({
  image,
  region,
  country,
}: PlacesCardProps) {
  return (
    <Card className="flex flex-col space-y-1">
      <Image
        src={image}
        alt="places-image"
        width={400}
        height={400}
        className="object-fit rounded-3xl pb-2"
      />
      <p className="text-lg text-neutral-700 font-medium">{region}</p>
      <h1 className="text-2xl mt-5 font-bold">{country}</h1>
    </Card>
  );
}
