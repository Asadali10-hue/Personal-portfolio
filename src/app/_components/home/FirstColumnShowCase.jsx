"use client";

import { MagicCard } from "@/components/magicui/magic-card";
import { reviewsLong } from "@/data/longReviews";
import Marquee from "react-fast-marquee";
import { Quote } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


export function FirstColumnShowCase() {
  return (
    <div className="">
      <Marquee pauseOnHover autoFill className="flex items-center gap-4">
        {reviewsLong.map((review, index) => {
          return (
            <Link
              href={review.url}
              target="_blank"
              key={review.id}
              className="px-2 block "
            >
              <MagicCard className=" w-full h-full  xl:w-[400px] md:w-[300px]">
                <div className="relative hidden md:block  w-full md:h-[200px] xl:h-[300px] h-full  xl:w-[400px] ">
                  <Image
                    src={review.image}
                    alt="image"
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="text-white p-2 md:p-4 m-2 rounded-md max-w-[250px]">
                  <blockquote className="text-xs md:text-sm lg:text-base relative">
                    <Quote className="absolute text-muted-foreground opacity-40 -top-2" />
                    <span className="relative">{review.review}</span>
                  </blockquote>

                  <p className="mt-5 md:mt-10 text-xs ms:text-base font-medium text-muted-foreground">
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


