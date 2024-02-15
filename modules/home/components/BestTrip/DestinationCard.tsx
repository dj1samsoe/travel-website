"use client";
import React from "react";
import Image from "next/image";
import Card from "@/common/components/elements/Card";
import Link from "next/link";

interface DestinationCardProps {
  image: string;
  title: string;
}

export default function DestinationCard({
  image,
  title,
}: DestinationCardProps) {
  return (
    <Link href={`/destination/${title.toLocaleLowerCase()}`}>
      <Card className="flex flex-col">
        <Image
          src={image}
          alt="destination-image"
          width={400}
          height={400}
          className="object-fit rounded-3xl"
        />
        <h1 className="text-xl mt-5 font-bold">{title}</h1>
      </Card>
    </Link>
  );
}
