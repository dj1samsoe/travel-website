"use client";

import React, { ReactNode } from "react";
import Navbar from "./Navbar/Index";
import { Providers } from "./providers";
import Footer from "./Footer/Footer";
import { usePathname } from "next/navigation";

interface LayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: LayoutsProps) {
  const pathname = usePathname();
  const hideNavbar = pathname === "/login" || pathname === "/sign-up";
  return (
    <Providers>
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen max-w-screen-2xl">{children}</main>
      {!hideNavbar && <Footer />}
    </Providers>
  );
}
