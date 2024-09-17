"use client";;
import { useScroll, useTransform, motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import star from '../../../assets/icons/star.svg'
import Image from "next/image";

export const Timeline = ({
  data
}) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    (<div
      className="w-full bg-neutral-950 font-sans md:px-10 py-32"
      ref={containerRef}>
      <div className="text-2xl md:text-7xl relative font-medium  text-center flex flex-col font-main">
           
           <div className="flex ml-32 relative w-fit">
           <div className="absolute -left-12 animate-spin [animation-duration:10s]">
               <Image alt="star" src={star} className="fill-main"/>
           </div>
           <div className="absolute -right-12 animate-spin [animation-duration:10s]">
               <Image alt="star" src={star} className="fill-main size-5  opacity-80"/>
           </div>

           <div className="flex items-center">

               <div className="text-main font-bold mr-2 relative xl:text-[80px]">
               Simple 
               </div>
               <div className="text-white whitespace-nowrap xl:text-[60px]">

               5-steps process
               </div>
           </div>
           </div>
           <div className="relative text-white  whitespace-nowrap xl:text-[60px] lg:mt-5">
           <div className="absolute -bottom-10 left-1/2">
               <Image alt="star" src={star} className="size-8 animate-pulse [animation-duration:5s]"/>
           </div>
           to make <br className="md:hidden"/> your brand
           <span className="font-bold text-main ml-2 xl:text-[80px]">

           Go Big!
           </span>
           </div>
           </div>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:pt-40 md:gap-10">
            <div
              className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
              <div
                className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-white dark:bg-black flex items-center justify-center">
                <div
                  className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
              </div>
              <h3
                className="hidden md:block text-xl md:pl-20 md:text-7xl text-stroke-3 font-bold text-neutral-950 ">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-20 pr-4 md:pl-4 w-full">
              <h3
                className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-950 text-stroke-2">
                {item.title}
              </h3>
              {item.content}{" "}
            </div>
          </div>
        ))}
        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] ">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full" />
        </div>
      </div>
    </div>)
  );
};