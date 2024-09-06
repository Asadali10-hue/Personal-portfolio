import React from "react";
import CreatorsComposent from "./CreatorsComposent";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Particles from "@/components/magicui/particles";
import Link from "next/link";

const Hiro2 = () => {
  return (
    <section className="relative min-h-[80vh] w-full flex items-center overflow-hidden md:min-h-screen">
      <div className="absolute left-0 top-0 h-full w-full"></div>
       <Particles className="absolute inset-0 " />
      {/* <BackgroundBeams/> */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-start px-sm pt-20 pb-10 text-center">
        <div className="max-w-6xl">
          <div
            className="flex flex-col items-center justify-start gap-8 md:gap-5"
            style={{ opacity: 1, transform: "none" }}
          >
            <div>


            <h1 className="mainAdjusted">
            Shaping Your Brand’s
            </h1>
            <h2 className="animate-fade-in w-fit  z-50 mx-auto bg-black/30 sm:px-9 sticky top-0  backdrop-filter backdrop-blur-[20px]  border-b opacity-0 [--animation-delay:600ms]  rounded-full px-8 py-2 border">

             <span className="!text-main text-3xl font-main font-bold md:mainAdjusted ">
             Visual Story
                </span> 
            </h2>
            </div>
            <p className="text-sm sm:text-base text-white md:subTitle mt-2">
              We help entrepreneurs and creators build, grow, and monetize their
              brands
              <br className="hidden md:block" /> on Instagram and YouTube.
            </p>

            {/* <CreatorsComposent /> */}
            <Link href='#book' className="flex items-center gap-10">
              <ShimmerButton>Book a Call Now</ShimmerButton>
            </Link>
          </div>
        </div>
      </div>
      <div className="absolute left-0 top-0 -z-[1] h-[900px] w-full overflow-hidden md:h-[1400px]">
        <div className="absolute left-0 top-0 z-10 h-[500px] w-full bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute -right-[660px] top-0 z-10 h-[700px] w-[1400px] rotate-45 bg-gradient-to-b from-black to-transparent"></div>
        <div className="absolute -right-[1000px] top-0 z-10 h-[200px] w-[1400px] rotate-45 bg-black"></div>
        <div
          className="absolute inset-0 h-full w-full min-w-[1000px] bg-no-repeat"
          style={{
            background:
              "radial-gradient(211.5% 113.1% at -66.4% 35.9%, rgb(0, 0, 0) 39.132%, rgb(0, 0, 0) 39.4243%, rgb(153, 0, 255) 67.5951%, #8806cd 84.1832%)",
            opacity: 1,
          }}
        ></div>
      </div>
    </section>
  );
};

export default Hiro2;
