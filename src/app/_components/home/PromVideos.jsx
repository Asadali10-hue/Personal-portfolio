"use client";
import React from "react";
import { Tiles } from "../Tiles";
import Image from "next/image";
import start from "../../../../assets/icons/star.svg";
import line from "../../../../assets/icons/lines.svg";
import starFill from "../../../../assets/icons/starFill.svg";
import ShortVideos from "./ShortVideos";
import { ParallaxProvider } from "react-scroll-parallax";

export const PromVideo = () => (
  <AnimatedGridBackgroundSection>
    <div className="" id='our-craft'>

    <div
      className={
        "text-4xl md:text-7xl relative font-medium text-center flex flex-col font-main text-white"
      }
    >
      <div className="absolute left-20 lg:left-48 lg:top-20">
        <Image
          src={start}
          alt="start"
          className="w-5 lg:w-10 animate-spin [animation-duration:5s]"
        />
      </div>
      <div className="absolute bottom-20 right-20 lg:right-60">
        <Image
          src={start}
          alt="start"
          className="w-5 lg:w-10  animate-ping [animation-duration:5s]"
        />
      </div>
      <div className="absolute -top-10 size-24 lg:size-44">
        <Image
          src={line}
          alt="lines"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="absolute size-24 lg:size-44 right-10 lg:right-28 top-5 ">
        <Image
          src={starFill}
          alt="start"
          className=" w-10 lg:size-20 inline-flex "
        />
      </div>
      <div className="relative flex flex-col gap-2">
        <div className="lg:mr-32">Videos</div>
        <div className="font-bold text-main lg:ml-56">that makes</div>
        <div className="lg:mr-40">your brand spread</div>
        <div className="font-bold text-main">like wildfire</div>
        <p className="font-semibold text-white text-sm md:text-xl mt-5 lg:mt-10 text-center font-second">
        Our system bring you consistent organic followers and predictably turn them into paying customers!

        </p>
      </div>

    </div>
    <ParallaxProvider>

      <ShortVideos/>
    </ParallaxProvider>
        </div>
  </AnimatedGridBackgroundSection>
);

const AnimatedGridBackgroundSection = ({ children }) => {
  return (
    
    <div className={"w-screen min-h-screen overflow-hidden relative mx-auto"}>
      <div className={"container mx-auto relative z-[2] px-2 my-32"}>
        {children}
      </div>
      <div className={"absolute inset-0"}>
        <Tiles rows={40} cols={30} />
      </div>
    </div>
  );
};
