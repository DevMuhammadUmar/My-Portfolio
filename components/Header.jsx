import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";

const Header = () => {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4">
      <div className="mt-10">
        <Image src={assets.profile_img} alt="" className="rounded-full w-32" />
      </div>
      <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
        Hi! I'M MUHAMMAD UMAR{" "}
        <Image src={assets.hand_icon} alt="" className="w-6" />
      </h3>
      <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">Software Engineer based in Lahore Pakistan</h1>
      <p className="max-w-2xl mx-auto font-ovo">I’m a curious and detail-oriented professional who enjoys bringing ideas to life. With hands-on experience creating practical, impactful solutions, I thrive on learning new things and finding better ways to get the job done</p>
      <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
        <a className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2" href="#contact">Contact Me   <Image src={assets.right_arrow_white} alt="" className="w-4" /></a>
                <a className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2" download href="/sample-resume.pdf">My Resume   <Image src={assets.download_icon} alt="" className="w-4" /></a>
      </div>
    </div>
  );
};

export default Header;
