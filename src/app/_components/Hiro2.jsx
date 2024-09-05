import React from "react";
import CreatorsComposent from "./CreatorsComposent";
import ShimmerButton from "@/components/magicui/shimmer-button";
import Particles from "@/components/magicui/particles";

const Hiro2 = () => {
  return (
    <section className="relative h-fit w-full flex items-center overflow-hidden md:min-h-screen">
      <div className="absolute left-0 top-0 h-full w-full"></div>
       <Particles className="absolute inset-0 " />
      {/* <BackgroundBeams/> */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-start px-sm pt-20 pb-10 text-center">
        <div className="max-w-6xl">
          <div
            className="flex flex-col items-center justify-start gap-8 md:gap-5"
            style={{ opacity: 1, transform: "none" }}
          >
            {/* <div className="flex w-full items-start justify-center">
              <a href="/pricing">
                <div className="flex h-9 w-fit cursor-pointer items-center justify-start rounded-full border border-white/10 bg-white/[0.05] px-2 py-1 text-sm font-medium transition-all duration-200 hover:bg-white/10">
                  <div
                    className="select-none rounded-full bg-highlight px-1 py-[1px] text-xs text-white"
                    style={{ boxShadow: "#8806cd 0px 0px 10px" }}
                  >
                    new
                  </div>
                  <div
                    className="overflow-hidden text-nowrap flex items-center justify-start gap-0.5"
                    style={{ width: "fit-content", marginLeft: "0.5rem" }}
                  >
                    Checkout our new pricing
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="tabler-icon tabler-icon-chevron-right mt-[0.1rem]"
                    >
                      <path d="M9 6l6 6-6 6"></path>
                    </svg>
                  </div>
                </div>
              </a>
            </div> */}
            <div>


            <h1 className="mainAdjusted">
            Shaping Your Brand’s
            </h1>
            <h2 className="animate-fade-in w-fit  z-50 mx-auto bg-white/20 -translate-y-4 border-b opacity-0 backdrop-blur-md [--animation-delay:600ms]  rounded-full px-8 py-2 border">

             <span className="text-main  mainAdjusted ">
             Visual Story
                </span> 
            </h2>
            </div>
            <p className="subTitle">
              We help entrepreneurs and creators build, grow, and monetize their
              brands
              <br className="hidden md:block" /> on Instagram and YouTube.
            </p>

            <CreatorsComposent />
            <div className="mt-8 flex items-center gap-10">
              <ShimmerButton>Book a Call Now</ShimmerButton>
            </div>
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
