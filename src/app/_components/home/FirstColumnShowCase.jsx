"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { reviewsLong } from "@/data/longReviews";
import React, { useState } from "react";
// import Marquee from "react-fast-marquee";
import Marquee from "react-fast-marquee";
import ReactPlayer from "react-player";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function FirstColumnShowCase() {
  const [playingIndex, setPlayingIndex] = useState(null);

  const togglePlayPause = (index) => {
    // Toggle play/pause for the clicked video, and pause all others
    setPlayingIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="">
      <Marquee pauseOnHover autoFill className="flex items-center gap-4">
        {reviewsLong.map((review, index) => {
          return (
            <Link href={review.url} target="_blank" key={review.id} className="px-2 block">
              <MagicCard className=" w-full h-full  xl:w-[400px] md:w-[200px]">
                <div className="relative w-full md:w-[200px] md:h-[300px] h-full  xl:w-[400px] ">
                  {" "}
                  {/* Increased to max-w-2xl for larger videos */}
                  {/* <div
                    className="bg-red-500 opacity-0 absolute inset-0 z-10"
                    onClick={() => togglePlayPause(review.id)}
                  ></div> */}
                  {/* <ReactPlayer
                    url={review.url}
                    pip
                    className=""
                    controls={false}
                    playing={playingIndex === review.id}
                     width="100%"
      height="100%"
                  /> */}
                  <Image src={review.image} alt="image" className="h-full w-full object-cover object-center"/>
                </div>
                <div className="text-white p-2 md:p-4 m-2 rounded-md ">
                
                <blockquote className='text-xs md:text-base relative'>
                  <Quote className="absolute text-muted-foreground opacity-40 -top-2"/>
                  <span className="relative">

                  {review.review}
                  </span>
                </blockquote>

                <p className="mt-5 md:mt-10 font-medium text-muted-foreground">
                  {review.name}
                </p>
                  
                </div>
              </MagicCard>
            </Link>
          );
        })}
      </Marquee>
    </div>
  );
}


