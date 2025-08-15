import React, { useRef} from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Navbar = () => {
   const sideMenuRef = useRef();
  const openMenu = () => {
    sideMenuRef.current.style.transform = "translateX(-16rem)";
  };
  const closeMenu = () => {
    sideMenuRef.current.style.transform = "translateX(16rem)";
  };

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 z-10  translate-y-[-80%]">
        <Image src={assets.header_bg_color} alt="" className="w-20" />
      </div>
      <nav className=" bg-white w-full fixed px-5 lg:px-7 xl:px-[8%] py-0  flex items-center justify-between  z-50">
        <a href="#top">
          <Image
            src={assets.logo}
            alt=""
            className="w-28 cursor-pointer mr-14"
          />
        </a>
        <ul className="hidden md:flex w-full items-center justify-center gap-6 lg:gap-8 px-12 py-3 bg-white ">
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Servicers
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-4">
          <button>
            <Image src={assets.moon_icon} className="w-6"alt="" />
          </button>
          <a
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo"
            href="#contact"
          >
            Contact <Image src={assets.arrow_icon} className="w-3" alt="" />
          </a>
          <button onClick={openMenu} className="block md:hidden ml-3 cursor-pointer">
            <Image src={assets.menu_black} className="w-6" alt="" />
          </button>
        </div>

        {/* Mobile Menu */}
        <ul
          ref={sideMenuRef}
          className="flex md:hidden flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-slate-100 transition duration-500"
        >
          <div onClick={closeMenu} className="absolute top-6 right-6">
            <Image
              src={assets.close_black}
              alt=""
              className="w-5 cursor-pointer"
            />
          </div>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#services">
              Servicers
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a onClick={closeMenu} className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
