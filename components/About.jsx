import { assets, infoList, toolsData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const About = () => {
  return (
    <div id="about" className=" w-full px-[12%] py-20 scroll-mt-0">
      <h4 className="text-center mb-2 text-lg font-ovo">Introduction</h4>
      <h2 className="text-center text-5xl font-ovo">About Me</h2>

      <div className="flex w-full flex-col lg:flex-row items-center gap-20 my-0">
        <div className="w-64 sm:w-80 rounded-3xl max-w-none">
          <Image
            src={assets.user_image}
            alt="user"
            className="w-full rounded-3xl"
          />
        </div>
        <div className="flex-1">
          <p className="mb-6 max-w-2xl font-ovo">
            I specialize in crafting modern, responsive, and visually engaging
            front-end experiences using technologies like React and Tailwind
            CSS. My work focuses on translating designs into smooth, functional
            interfaces with clean, maintainable code. While my main passion lies
            in frontend development, I also have experience with Flutter,
            enabling me to bring ideas to life across both web and mobile
            platforms.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl">
            {infoList.map(({icon, iconDark , title, description},index) => (
              <li className="border-[0.5px] border-gray-400 rounded-xl p-3 cursor-pointer hover:bg-slate-100 hover:-translate-y-1 duration-500 hover:shadow-xl/30  " key={index}>
                <Image className="w-7 mt-3" src={icon} alt={title} />
                <h3 className="my-4 font-semibold text-gray-700">{title}</h3>
                <p className="text-gray-600 text-sm">{description}</p>

              </li>
            ))}
          </ul>
          <h4 className="my-2 font-ovo">Tools I Use</h4>
          <ul className="flex items-center gap-3 sm:gap-5">
             {toolsData.map((tool,index) => (
              <li className="flex items-center justify-center aspect-square w-12 sm:w-14 border border-gray-400 rounded-lg  cursor-pointer hover:bg-[#fcf4ff] hover:-translate-y-1 duration-500 hover:shadow-xl/30  " key={index}>
                <Image className=" w-8 sm:w-10" src={tool} alt={tool} /></li>))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
