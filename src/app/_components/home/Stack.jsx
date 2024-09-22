"use client";
import { animate, easeInOut, useScroll } from "framer-motion";
import { useRef } from "react";
import StackCard from "./StackCard";
import { projects } from "@/data/stackData";
import colored from "../../../../assets/whyus/colored.svg";
import transparent from "../../../../assets/whyus/transparent.svg";
import Image from "next/image";
import {motion} from 'framer-motion'

export default function Stack() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const rotateAnim = {
    initial:{
      rotate: 0,

    },
    animate:{
      rotate: 360,
      transition:{
        duration: 0.5,
        easeInOut
      }

    },
  }

  return (
    <main ref={container} className=" relative  flex flex-col md:flex-row ">
      <div className="md:sticky relative md:top-0 pt-32 md:py-[30vh] h-fit flex-1">
        <div className="mainTitleText relative text-center md:text-left">
          <h2>Why choose Us</h2>
          <motion.div className="absolute -top-20 -left-4" variants={rotateAnim} initial='initial' whileInView='animate'>
            <Image src={transparent} alt="icon" />
          </motion.div>
          <motion.div className="absolute -top-20 -right-4" variants={rotateAnim} initial='initial' whileInView='animate'>
            <Image src={colored} alt="icon" />
          </motion.div>
        </div>
        <div className="relative">
          <motion.div className="absolute -bottom-20 right-10" variants={rotateAnim} initial='initial' whileInView='animate'>
            <Image src={transparent} alt="icon" />
          </motion.div>

          <p className="font-semibold text-black text-xl md:text-xl mt-5 text-center md:text-left">
            Over 1000+ videos edited to perfection, showcasing our expertise and
            precision.
          </p>
        </div>
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