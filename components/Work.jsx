import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = ({ isDarkMode }) => {
  return (
    <div id="mywork" className=" w-full px-[12%] py-15 scroll-mt-0">
      <h4 className="text-center mb-2 text-lg font-outfit">My Portforlio</h4>
      <h2 className="text-center text-5xl font-outfit">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-outfit">
        Explore some of my most recent projects, showcasing my skills in
        creating responsive, user-friendly, and visually engaging applications.
        Each project reflects my focus on clean code, intuitive design, and
        practical functionality.
      </p>
      <div className="grid lg:grid-cols-4 gap-6 my-8">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="dark:bg-[#121213]  bg-slate-100 w-10/12 opacity-70 hover:opacity-100 rounded-md absolute bottom-3 left-1/2 -translate-x-1/2 py-2 px-4 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-xs">{project.title}</h2>
                <p className="text-xs">{project.description}</p>
              </div>
              <div>
                <Image
                  src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon}
                  alt=""
                  className="w-3"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a
        className="w-max flex items-center justify-center gap-2 border border-gray-700 rounded-full py-2 mb-15 px-20 mx-auto dark:bg-black bg-slate-100 opacity-50 hover:opacity-100 hover:scale-110 hover-bounce-continuous duration-400 cursor-pointer transition-all"
        href="https://github.com/DevMuhammadUmar"
        target="_blank"
      >
        <svg
          className={`w-5 h-5 ${isDarkMode ? "fill-white" : "fill-black"}`}
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
        See More
        <Image
          src={
            isDarkMode ? assets.right_arrow_bold_dark : assets.right_arrow_bold
          }
          alt="Hover arrow"
          className="w-5"
        />
      </a>
    </div>
  );
};

export default Work;
