"use client";
import React from "react";
import StackCard from "./StackCard";
import Stack from "./Stack";
import { BlurIn } from "@/hooks/blurAnimation";

const WhyInstagram = () => {
  return (
    <BlurIn>

    <section className="relative text-white ">
      <div className="absolute top-0 z-[-2] inset-0 rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">

        
      </div>
      <div className="container px-2">
        <Stack />
      </div>
    </section>
    </BlurIn>

  );
};

export default WhyInstagram;