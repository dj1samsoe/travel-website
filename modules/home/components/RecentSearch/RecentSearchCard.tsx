import Card from "@/common/components/elements/Card";
import React from "react";

interface RecentSearchCardProps {
  icon: React.ReactNode;
  building: string;
  location: string | null;
}

export default function RecentSearchCard({
  icon,
  building,
  location,
}: RecentSearchCardProps) {
  return (
    <Card className="flex items-center justify-center border border-neutral-600 rounded-xl p-2 cursor-pointer w-full">
      {location ? (
        <div className="flex items-center gap-3 w-full px-3">
          {icon}
          <div className="flex flex-col">
            <h1 className="text-lg font-bold truncate">{building}</h1>
            <p className="text-md">{location}</p>
          </div>
        </div>
      ) : (
        <div className="flex items-center justify-center gap-3 pt-3 px-3">
          <div>{icon}</div>
          <h1 className="text-lg font-bold truncate">{building}</h1>
        </div>
      )}
    </Card>
  );
}
