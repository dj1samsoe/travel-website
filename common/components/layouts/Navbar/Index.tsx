import { useEffect, useState } from "react";
import Menu from "./Menu";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={
        isVisible
          ? "z-[99999] fixed shadow-lg max-w-screen-2xl w-full md:px-16 md:py-2 bg-white text-black font-medium transition-all ease-in-out duration-500"
          : "z-[99999] fixed max-w-screen-2xl w-full md:px-16 md:py-2 bg-transparent md:text-white text-black transition-all ease-in-out duration-500"
      }
    >
      <Menu />
    </nav>
  );
}
