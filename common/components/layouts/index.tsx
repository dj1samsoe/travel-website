"use client";

import React, { ReactNode } from "react";
import Navbar from "./Navbar/Index";
import { Providers } from "./providers";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  return (
    <Providers>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen max-w-screen-2xl">{children}</main>
    </Providers>
  );
}
