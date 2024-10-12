"use client";
import React, { useRef } from "react";
import Image from "next/image";
import start from "../../../../assets/icons/star.svg";
import line from "../../../../assets/icons/lines.svg";
import starFill from "../../../../assets/icons/starFill.svg";
import ShortVideos from "./ShortVideos";
import { ParallaxProvider } from "react-scroll-parallax";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BlurIn } from "@/hooks/blurAnimation";
import AnimatedGridBackgroundSection from "../AnimatedGridBackgroundSection";
gsap.registerPlugin(ScrollTrigger);

export const PromVideo = () => {
  const containerRef = useRef(null);

  useGSAP(
    () => {
      gsap.set(".titleVideo", { y: 50 });
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "2% 90%",
          end: "100%, 100%",
          scrub: true,
          stagger: 0.1,
        },
      });

      tl.to(
        ".titleVideo",
        {
          y: 0,
          ease: "power4.inOut",
        },
        "a"
      )
        .to(".titleVideo1", { x: -10, scrub: true, ease: "power4.inOut" }, "a")
        .to(".titleVideo2", { x: 10, ease: "power4.inOut" }, "a")
        .to(".start", { rotate: 150, scale: 1.5 }, "a");
    },
    { scope: containerRef }
  );

  return (
    <BlurIn>
      <div ref={containerRef}>
        <AnimatedGridBackgroundSection>
          <div className="" id="our-craft">
            <div
              className={
                "text-2xl md:text-4xl lg:text-7xl relative font-medium text-center flex flex-col font-main text-white"
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
                  className=" w-10 lg:size-20 inline-flex start"
                />
              </div>
              <div className="relative flex flex-col gap-2">
                <div className="lg:mr-32 xl:text-[60px] titleVideo titleVideo1">
                  Videos
                </div>
                <div className="font-bold text-main lg:ml-56 xl:text-[80px] titleVideo titleVideo2">
                  that makes
                </div>
                <div className="lg:mr-40 xl:text-[60px] titleVideo titleVideo1">
                  your brand spread
                </div>
                <div className="font-bold text-main xl:text-[80px] titleVideo titleVideo2">
                  like wildfire
                </div>
                <p className="font-semibold text-white max-w-xl xl:max-w-3xl xl:text-xl mx-auto text-xs sm:text-sm md:text-md md:max-w-[350px] mt-5 lg:mt-10 text-center font-second titleVideo">
                  Our system bring you consistent organic followers and
                  predictably turn them into paying customers!
                </p>
              </div>
            </div>
            <ParallaxProvider>
              <ShortVideos />
            </ParallaxProvider>
          </div>
        </AnimatedGridBackgroundSection>
      </div>
    </BlurIn>
  );
}; 
