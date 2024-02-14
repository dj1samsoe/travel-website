import { Spinner } from "@chakra-ui/react";
import React from "react";

export default function Loading() {
  return (
    <section className="w-full h-screen flex items-center justify-center">
      <div className="flex flex-col space-y-3 items-center justify-center">
        <h1 className="text-4xl font-bold">Loading</h1>
        <Spinner size="xl" />
      </div>
    </section>
  );
}
