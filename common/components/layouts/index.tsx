"use client";

import React, { ReactNode } from "react";
import Navbar from "./Navbar/Index";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  return (
    <React.Fragment>
      <header>
        <Navbar />
      </header>
      <main className="min-h-screen max-w-screen-2xl">{children}</main>
    </React.Fragment>
  );
}