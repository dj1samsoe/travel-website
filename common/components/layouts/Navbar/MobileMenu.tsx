import { motion } from "framer-motion";
import { FC } from "react";
import Link from "next/link";

export const MobileMenu: FC = () => {
  return (
    <motion.div
      className="h-fit w-full flex flex-col bg-white pb-5 rounded-md"
      initial={{ y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div>
        <ul className="flex flex-col space-y-5 items-center text-quaternary-black font-medium">
          <li>
            <Link href={"/#"} aria-label="destination" target="_blank">
              Destination
            </Link>
          </li>
          <li>
            <Link href={"/#"} aria-label="stories" target="_blank">
              Stories
            </Link>
          </li>
          <li>
            <Link href={"/#"} aria-label="reviews" target="_blank">
              Reviews
            </Link>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};
