"use client";

import { Card, CardContent, CardFooter } from "@/components/ui/card";
import React from "react";
import Marquee from "react-fast-marquee";
import { MagicCard } from "@/components/magicui/magic-card";
import Image from "next/image";
import Link from "next/link";

export function SecondColmnShowcase({ data }) {
  return (
    <div className="mt-20">

<Marquee pauseOnHover autoFill direction="right" className="flex items-center gap-4">

    {data?.map((review, index)=>{
      return (
        <Link href={review.fields.url} className="px-4 block" key={review.sys.id}>
          <div className="flex  gap-4 bg-[#1c1c1c] p-2 rounded-md border border-main">
            <div className="rounded-md hidden md:flex flex-col antialiased bg-black  items-center justify-center relative">
              <Card className="p-0 w-[200px] md:w-[150px] xl:w-[210px] md:right-10 bg-black overflow-hidden border-none">
                <CardContent className="p-0">
                  <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
                    {/* <WistiaVideo id={review.fields.url} /> */}

                    <Image
                      src={`https:${review.fields.image?.fields.file.url}`}
                      alt={review.fields.name}
                      width={100}
                      height={200}
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="max-w-[270px] bg-main/50 p-2 rounded-md flex items-center">
              <blockquote>
                <span className="text-white text-xs md:text-sm font-medium xl-lg">
                  {review.fields.review}
                </span>
              </blockquote>
            </div>
          </div>
        </Link>
      );
})}
</Marquee>





    </div>
  );
}


