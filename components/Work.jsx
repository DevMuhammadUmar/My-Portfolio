import { assets, workData } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Work = () => {
  return (
    <div id="work" className=" w-full px-[12%] py-15 scroll-mt-0">
      <h4 className="text-center mb-2 text-lg font-ovo">My Portforlio</h4>
      <h2 className="text-center text-5xl font-ovo">My Latest Work</h2>
      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Explore some of my most recent projects, showcasing my skills in
        creating responsive, user-friendly, and visually engaging applications.
        Each project reflects my focus on clean code, intuitive design, and
        practical functionality.
      </p>
      <div className="grid lg:grid-cols-4 gap-6 my-10">
        {workData.map((project, index) => (
          <div
            key={index}
            className="aspect-square bg-no-repeat bg-center bg-cover rounded-lg relative cursor-pointer group"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-slate-100 w-10/12 opacity-70 hover:opacity-100 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-300 group-hover:bottom-7">
              <div>
                <h2 className="font-semibold text-sm">{project.title}</h2>
                <p className="text-sm">{project.description}</p>
              </div>
              <div >
                <Image src={assets.send_icon} alt="" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>
      <a className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 mb-10 px-10 mx-auto my-10 bg-slate-100 opacity-50 hover:opacity-100  duration-500 cursor-pointer" href="https://github.com/DevMuhammadUmar" target="_blank">Show More
      <Image src={assets.right_arrow_bold} alt="" className="w-5"/>
      
      </a>
    </div>
  );
};

export default Work;
