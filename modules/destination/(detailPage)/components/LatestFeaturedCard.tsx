import Card from "@/common/components/elements/Card";
import React from "react";
import Image from "next/image";
import { Button } from "@chakra-ui/react";
import { IoMdArrowUp } from "react-icons/io";

interface ILatestFeaturedCardProps {
  image: string;
  location: string;
  date: string;
  readTime: string;
  title: string;
  description: string;
}

export default function LatestFeaturedCard({
  image,
  location,
  date,
  readTime,
  title,
  description,
}: ILatestFeaturedCardProps) {
  return (
    <Card className="flex flex-col space-y-3 relative w-full min-w-[500px]">
      <Image
        src={image}
        alt="croatia-image"
        width={600}
        height={400}
        className="object-fit rounded-3xl"
      />
      <div className="flex justify-between text-neutral-700 font-medium text-md">
        <p>{location}</p>
        <p>
          {date} · {readTime}
        </p>
      </div>
      <div className="flex flex-col space-y-2 pb-5">
        <h1 className="text-xl font-bold">{title}</h1>
        <p className="text-lg text-neutral-900 font-medium line-clamp-3">
          {description}
        </p>
      </div>
      <Button colorScheme="messenger" variant="link" className="flex gap-2">
        Read Full Post
        <IoMdArrowUp size={20} className="transform rotate-45" />
      </Button>
    </Card>
  );
}
