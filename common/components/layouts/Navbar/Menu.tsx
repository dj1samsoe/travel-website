"use client";

import clsx from "clsx";
import { AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

import { useMenu } from "@/common/context/menu";

import MobileMenuButton from "./MobileMenuButton";
import MenuHeader from "./MenuHeader";
import { MobileMenu } from "./MobileMenu";
import MenuItems from "./MenuItems";
import useIsMobile from "@/common/hooks/useIsMobile";
import { BiSearch } from "react-icons/bi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Menu() {
  const isMobile = useIsMobile();
  const imageSize = isMobile ? 75 : 75;
  const { isOpen, toggleMenu } = useMenu();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const pathname = usePathname();
  const hideNavbar = pathname === "/login" || pathname === "/sign-up";

  return (
    <div className={clsx("md:p-0 p-5 w-full md:border-none", isOpen && "pb-0")}>
      <div className="flex items-center justify-between">
        <MenuHeader expandMenu={isOpen} imageSize={imageSize} />
        {!hideNavbar && (
          <>
            <div className="hidden md:flex">
              <MenuItems />
            </div>
            <div className="hidden md:flex gap-5 items-center">
              <BiSearch size={25} />
              <Link
                href={"/sign-up"}
                aria-label="Sign Up"
                className="text-lg font-medium"
              >
                Sign Up
              </Link>
              <Link
                href={"/login"}
                aria-label="Login"
                className="text-black bg-white px-5 py-2 rounded-full font-medium text-lg"
              >
                Login
              </Link>
            </div>
          </>
        )}

        {isMobile && (
          <div
            className={clsx(
              "flex md:hidden items-center gap-5",
              isOpen && "!items-end flex-col-reverse justify-between"
            )}
          >
            <MobileMenuButton expandMenu={isOpen} setExpandMenu={toggleMenu} />
          </div>
        )}
      </div>

      {isMobile && (
        <AnimatePresence>{isOpen && <MobileMenu />}</AnimatePresence>
      )}
    </div>
  );
}
