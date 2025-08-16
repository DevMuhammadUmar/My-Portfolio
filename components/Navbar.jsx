import React, { useRef } from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = ({ isDarkMode, setIsDarkMode }) => {
  const sideMenuRef = useRef();

  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(0)";
  };

  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
  <nav className=" bg-white w-full fixed px-5 lg:px-7 xl:px-[8%] pt-4 py-2 flex items-center justify-between z-50 dark:text-white dark:bg-[#121213]">

      {/* Dark Mode Toggle - Left */}
      <button
        className="cursor-pointer flex items-center justify-center"
        onClick={() => setIsDarkMode((prev) => !prev)}
      >
        <Image
          src={isDarkMode ? assets.sun_icon : assets.moon_icon}
          alt="Toggle dark mode"
          width={24}
          height={24}
          className="w-6"
        />
      </button>

      {/* Desktop Menu Items - Center */}
      <ul className="hidden md:flex w-full items-center justify-center gap-6 lg:gap-8">
        {["Home", "About", "Services", "My Work", "Contact"].map((item) => (
          <li key={item}>
            <a className="font-outfit" href={`#${item.toLowerCase().replace(" ", "")}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Icon - Right */}
      <button
        onClick={openMenu}
        className="block md:hidden cursor-pointer"
      >
        <Image
          src={isDarkMode ? assets.menu_white : assets.menu_black}
          alt="Menu"
          width={24}
          height={24}
          className="w-6"
        />
      </button>

      {/* Mobile Menu */}
      <ul
        ref={sideMenuRef}
        className="flex md:hidden flex-col gap-4 py-20 px-10 fixed right-0 top-0 bottom-0 w-64 h-screen z-50 bg-slate-100 dark:bg-[#161616] transform translate-x-64 transition-transform duration-500"
      >
        <div onClick={closeMenu} className="absolute top-6 right-6">
          <Image
            src={isDarkMode ? assets.close_white : assets.close_black}
            alt="Close menu"
            width={20}
            height={20}
            className="w-5 cursor-pointer"
          />
        </div>

        {["Home", "About", "Services", "My Work", "Contact"].map((item) => (
          <li key={item}>
            <a onClick={closeMenu} className="font-outfit" href={`#${item.toLowerCase().replace(" ", "")}`}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
