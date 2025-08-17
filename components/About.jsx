import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = ({ isDarkMode }) => {
  return (
    <div id="about" className=" w-full px-[12%] py-20 scroll-mt-0">
      <h4 className="text-center mb-2 text-lg font-outfit">Introduction</h4>
      <h2 className="text-center text-5xl font-outfit">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-0">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mt-4 mb-4 max-w-2xl font-outfit">
            I create modern, responsive, and engaging front-end experiences with
            React and Tailwind CSS. I turn designs into smooth, maintainable
            interfaces and also work with Flutter to build cross-platform web
            and mobile applications.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {infoList.map(
              ({ icon, iconDark, title, description, cgpa }, index) => (
                <li
                  key={index}
                  className="flex flex-col items-center text-center border-[0.5px] border-gray-400 rounded-lg p-3 cursor-pointer hover:bg-slate-100 dark:hover:bg-[#0a0a0a] hover:-translate-y-1 duration-500 hover:shadow-xl/30"
                >
                  <Image
                    className="w-8 h-8 mt-2"
                    src={isDarkMode ? iconDark : icon}
                    alt={title}
                  />
                  <h3 className="my-2 font-semibold text-base dark:text-white text-gray-700">
                    {title}
                  </h3>
                  <p className="dark:text-white text-gray-600 text-sm">
                    {description}
                  </p>
                  <h2
                    className="mt-2 text-md sm:text-md md:text-sm font-semibold 
             bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 
             dark:from-green-400 dark:via-teal-400 dark:to-cyan-400 
             bg-clip-text text-transparent"
                  >
                    {cgpa}
                  </h2>
                </li>
              )
            )}
          </ul>

          <h4 className="my-2 font-outfit">Technologies & Tools</h4>

          <ul className="grid grid-cols-5 sm:grid-cols-9 gap-3 sm:gap-5 justify-center">
            {toolsData.map((tool, index) => (
              <li
                key={index}
                className="flex items-center justify-center aspect-square w-12 sm:w-14 border border-gray-400 rounded-lg cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl/30 dark:hover:bg-[#0a0a0a]"
              >
                <Image
                  src={tool}
                  alt={`Skill ${index}`}
                  width={40}
                  height={40}
                  unoptimized
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
