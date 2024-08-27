"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";
import { ArrowRightIcon } from "lucide-react";
import { BorderBeam } from "@/components/magicui/border-beam";
import AnimatedShinyText from "@/components/magicui/animated-shiny-text";
import { Button } from "@/components/ui/button";
import Particles from "@/components/magicui/particles";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";
import { creators } from "@/data/creators";
import CreatorsComposent from "./CreatorsComposent";

const starts = [1, 2, 3, 4, 5];

export default function Hiro1() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  return (
    <section
      id="hero"
      className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
    >
      <Particles className="absolute inset-0" />
      <div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 ">
        <AnimatedShinyText className="inline-flex items-center justify-center">
          <span>✨ Introducing Refine Frame</span>{" "}
          <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
        </AnimatedShinyText>
      </div>
      <h1 className="animate-fade-in uppercase -translate-y-4 text-balance bg-gradient-to-br from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-wide text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl">
        We grow
        <br className="hidden md:block" /> Brands
      </h1>
      <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
        We help entrepreneurs and creators build, grow, and monetize their
        brands
        <br className="hidden md:block" /> on Instagram and YouTube.
      </p>
      <Button className="animate-fade-in -translate-y-4 gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:600ms] ">
        <span>Book a Demo Call </span>
        <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
      </Button>
      <div
        ref={ref}
        className="animate-fade-up relative mt-5 opacity-0 [--animation-delay:400ms] [perspective:2000px] after:absolute after:inset-0  after:[background:linear-gradient(to_top,transparent,transparent)]"
      >
        <div className=" p-6 mb-10 text-white relative z-50">
            <CreatorsComposent/>
        </div>
        <div
          className={`rounded-xl h-[200px] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,#7b38a8,#4b2c85,transparent_80%)] before:[filter:blur(180px)] ${
            inView ? "before:animate-image-glow" : ""
          }`}
        ></div>
      </div>
    </section>
  );
}
