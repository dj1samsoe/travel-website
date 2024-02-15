import Card from "@/common/components/elements/Card";
import Image from "next/image";
import React from "react";

interface ITopSIghtsCardProps {
  image: string;
  title: string;
}

export default function TopSightsCard({ image, title }: ITopSIghtsCardProps) {
  return (
    <Card className="flex flex-col">
      <Image
        src={image}
        alt="top-image"
        width={400}
        height={400}
        className="object-fit rounded-3xl"
      />
      <h1 className="text-2xl mt-5 font-bold">{title}</h1>
    </Card>
  );
}
