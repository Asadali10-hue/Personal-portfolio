import React from "react";
import star from '../../../assets/icons/star.svg'
import Image from "next/image";
import { FeaturesSection } from "./home/FeaturesSection";

const Perks = () => {
  return (
    <section className="py-32 overflow-clip">
      <div className="container px-2 mx-auto text-white">
        <div className="text-4xl md:text-7xl relative font-medium  text-center flex flex-col font-main">
           
            <div className="flex ml-32 relative w-fit">
            <div className="absolute -left-12 animate-spin [animation-duration:10s]">
                <Image alt="star" src={star} className="fill-main"/>
            </div>
            <div className="absolute -right-12 animate-spin [animation-duration:10s]">
                <Image alt="star" src={star} className="fill-main size-5  opacity-80"/>
            </div>
                <div className="text-main font-bold mr-2 relative">
                    Perks
                </div>
                <div>

            So Good
                </div>
            </div>
            <div className="relative">
            <div className="absolute -bottom-10 left-1/2">
                <Image alt="star" src={star} className="size-8 animate-pulse [animation-duration:5s]"/>
            </div>
             you will never go back
            </div>
            </div>


            {/* Feature section */}

            <div className="mt-20 lg:mt-48">
                <FeaturesSection/>
            </div>
      </div>
    </section>
  );
};

export default Perks;

