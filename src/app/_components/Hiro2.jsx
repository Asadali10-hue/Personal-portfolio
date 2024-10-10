'use client'
import React from "react";
import CreatorsComposent from "./CreatorsComposent";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Particles from "@/components/magicui/particles";
import Link from "next/link";
import CanvasCursor from "@/components/edil-ozi/canvas-cursor";
import useCanvasCursor from "@/hooks/CanvasCursor";

const Hiro2 = () => {
  useCanvasCursor();

  return (
    <section className="relative min-h-[80vh] w-full flex items-center overflow-hidden md:min-h-[92vh]" >
      <div className="absolute left-0 top-0 h-full w-full"></div>
       <Particles className="absolute inset-0 " />
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-start px-sm pt-20 pb-10 text-center">
        <div className="max-w-6xl">
          <div
            className="flex flex-col items-center justify-start gap-8 md:gap-5"
            style={{ opacity: 1, transform: "none" }}
          >
            <div>


            <h1 className="mainTitleAjusted">
            We Give
            </h1>
            <h2 className="animate-fade-in w-fit  z-50 mx-auto bg-white opacity-0 [--animation-delay:600ms] mt-5 rounded-full px-8 py-2 lg:px-10 lg:py-4 ">

             <span className="!text-main font-bold text-4xl lg:mainTitleAjusted">
             Brands a Visual
                </span> 
            </h2>
          
            </div>
            <p className="text-sm font-sans sm:text-base md:text-[18px] !text-white md:subTitle !line-clamp-3 mt-2 lg:mt-5">
              We help entrepreneurs and creators build, grow, and monetize their
              brands
              <br className="hidden md:block text-main" /> on Instagram and YouTube.
            </p>

            {/* <CreatorsComposent /> */}
            <Link href='#book' className="flex items-center gap-10 lg:mt-5">
              <ShimmerButton>Book a Call Now</ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-[1] h-[900px] w-full overflow-hidden md:h-[1400px]">
        {/* <div className="absolute left-0 top-0 z-10 h-[500px] w-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute -right-[660px] top-0 z-10 h-[700px] w-[1400px] rotate-45 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute -right-[1000px] top-0 z-10 h-[200px] w-[1400px] rotate-45 bg-black"></div> */}
  <div
  className="absolute inset-0 h-full w-full min-w-[1000px] bg-no-repeat"
  style={{
    background: 
      "radial-gradient(circle at bottom, #8806cd 10%, rgb(0, 0, 0) 60%)",
    opacity: 1,
  }}
></div>
      </div>
      {/* <CanvasCursor/> */}
      <canvas
      className="pointer-events-none absolute inset-0"
      id="canvas"
    />
    </section>
  );
};

export default Hiro2;
