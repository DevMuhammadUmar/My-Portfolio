import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = ({ isDarkMode }) => {
  return (
    <div
      id="home"
      className="h-[580px] flex flex-col items-center justify-center px-4 text-center"
    >
      <h1 className="text-3xl mt-40 sm:text-4xl md:text-5xl font-semibold dark:text-white text-black">
        Hello my name is
      </h1>
      <h1
        className="text-5xl mt-10 sm:text-7xl md:text-9xl font-extrabold text-transparent bg-clip-text 
                     bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
                     dark:from-green-400 dark:via-teal-400 dark:to-cyan-400"
      >
        MUHAMMAD UMAR
      </h1>

     <p className="flex flex-row items-center text-lg sm:text-2xl text-gray-700 mt-4 dark:text-white whitespace-nowrap">
  From Lahore, Pakistan  
  <img
    src="/pakistan-flag-icon.svg"
    alt="Pakistan Flag"
    className="w-8 h-5 ml-4 mt-1"
  />
</p>

      <div className="mt-10 max-w-3xl text-center">
        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold dark:text-white text-black">
          Building Intelligent & Scalable Digital Experiences
        </h2>

        <p className="mt-4 px-4 dark:text-white text-gray-600 text-sm sm:text-base">
          from real-time AR try-ons in Flutter to AI-powered SaaS platforms with
          React, Node.js, and TensorFlow. I craft clean, maintainable code and
          user-focused applications that turn ideas into polished products.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
        <a
          className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:scale-105 transition-all duration-400 cursor-pointer"
          href="#contact"
        >
          Contact Me
          <Image src={assets.right_arrow_white} alt="Arrow" className="w-4" />
        </a>
        <a
          className="dark:text-black dark:bg-slate-200 px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:scale-105 transition-all duration-400 cursor-pointer"
          download
          href="/sample-resume.pdf"
        >
          My Resume
          <Image src={assets.download_icon} alt="Download" className="w-4" />
        </a>
      </div>
    </div>
  );
};

export default Header;
