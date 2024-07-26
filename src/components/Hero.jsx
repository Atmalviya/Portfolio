import React from "react";
import { HERO_CONTENT } from "../constants/index";
import profilePic from "../assets/kevinRushProfile.png";

const Hero = () => {
  return (
    <div className="border-b border-neutral-950 pb-4 lg:mb-36`">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <h1 className="pb-16 text-6xl font-thin tracking-tight lg:text-8xl lg:mt-16">
              Atul Malviya
            </h1>
            <span className="bg-gradient-to-r from-pink-300 via-slate-500 to bg-purple-500 bg-clip-text text-4xl tracking-tight text-transparent ">
              Full Stack Developer
            </span>
            <p className="my-2 max-w-xl py-6 font-light tracking-tighter">
              {HERO_CONTENT}
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-8">
          <div className="flex justify-center">
            <img src={profilePic} alt="Profile pic" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
