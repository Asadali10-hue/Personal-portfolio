"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import dynamic from "next/dynamic";
import React from "react";
const WistiaDynamic = dynamic(() => import("./WistiaVideo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});
import WistiaVideo from "./WistiaVideo";
import Marquee from "react-fast-marquee";
import { MagicCard } from "@/components/magicui/magic-card";

export function SecondColmnShowcase({ data }) {
  return (
    <div className="mt-20">

<Marquee pauseOnHover autoFill direction="right" className="flex items-center gap-4">

    {data?.map((review, index)=>{
      return(
        <div className="px-4" key={review.sys.id}>

        <div  className='flex  gap-4 bg-[#1c1c1c] p-2 rounded-md border border-main'>
        <div className="rounded-md flex flex-col antialiased bg-black  items-center justify-center relative">
          <Card className="p-0 w-[200px] md:w-[150px] xl:w-[210px] md:right-10 bg-black overflow-hidden">
            <CardContent className="p-0">
              <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                <WistiaVideo id={review.fields.url} />
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="max-w-[270px] bg-main/50 p-2 rounded-md flex items-center">
          <blockquote>

            <span className="text-white font-medium text-lg">{review.fields.review}</span>
          </blockquote>
        </div>
      </div>
        </div>

)
})}
</Marquee>





    </div>
  );
}


