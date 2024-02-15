import Image from "next/image";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[#4169E1] w-full">
      <div className="flex flex-col items-center justify-center py-10 space-y-3">
        <Image src="/logo.png" alt="logo" width={100} height={100} />
        <p className="text-white">
          © {new Date().getFullYear()} Travel Pulse. All rights reserved
        </p>
      </div>
    </footer>
  );
}
