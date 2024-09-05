"use client";
import { useScroll } from "framer-motion";
import { useRef } from "react";
import StackCard from "./StackCard";
import { projects } from "@/data/stackData";

export default function Stack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <main ref={container} className=" relative  flex flex-col md:flex-row ">
      <div className="md:sticky md:top-0 pt-32 md:py-[30vh] h-fit flex-1">
        <h2 className="mainTitleText text-center md:text-left">
          Why choose Us
        </h2>
        <p className='font-semibold text-black text-xl md:text-xl mt-5 text-center md:text-left'>Over 1000+ videos edited to perfection, showcasing our expertise and precision.</p>
      </div>

      <div className="flex-1">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <StackCard
              key={`p_${i}`}
              i={i}
              project={project}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
            />
          );
        })}
      </div>
    </main>
  );
}