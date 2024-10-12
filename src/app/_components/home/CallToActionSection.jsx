'use client'

import logoNoBg from '../../../../assets/logo/logoNoBg.png'
import { useEffect, useState } from 'react'
import Marquee from '@/components/magicui/marquee'
import CtaButton from '../CtaButton';
import Image from 'next/image';
import { tiles } from "@/data/tiles";
import AnimatedCard from "./AnimatedCard";
import shuffleArray from "./shuffleArray";





export default function CallToActionSection() {
   const [randomTiles1, setRandomTiles1] = useState([])
   const [randomTiles2, setRandomTiles2] = useState([])
   const [randomTiles3, setRandomTiles3] = useState([])
   const [randomTiles4, setRandomTiles4] = useState([])

   useEffect(() => {
      if (typeof window !== "undefined") {
        setRandomTiles1(shuffleArray([...tiles]));
        setRandomTiles2(shuffleArray([...tiles]));
        setRandomTiles3(shuffleArray([...tiles]));
        setRandomTiles4(shuffleArray([...tiles]));
      }
   }, [])

   return (
     <section id="cta">
       <div className="py-14">
         <div className="flex w-full flex-col items-center justify-center">
           <div className="relative flex w-full flex-col items-center justify-center overflow-hidden">
             <Marquee
               reverse
               className="-delay-[200ms] [--duration:10s]"
               repeat={5}
             >
               {randomTiles1.map((review, idx) => (
                 <AnimatedCard key={idx} {...review} />
               ))}
             </Marquee>
             <Marquee reverse className="[--duration:25s]" repeat={5}>
               {randomTiles2.map((review, idx) => (
                 <AnimatedCard key={idx} {...review} />
               ))}
             </Marquee>
             <Marquee
               reverse
               className="-delay-[200ms] [--duration:20s]"
               repeat={5}
             >
               {randomTiles1.map((review, idx) => (
                 <AnimatedCard key={idx} {...review} />
               ))}
             </Marquee>
             <Marquee reverse className="[--duration:30s]" repeat={5}>
               {randomTiles2.map((review, idx) => (
                 <AnimatedCard key={idx} {...review} />
               ))}
             </Marquee>
             <Marquee
               reverse
               className="-delay-[200ms] [--duration:20s]"
               repeat={5}
             >
               {randomTiles3.map((review, idx) => (
                 <AnimatedCard key={idx} {...review} />
               ))}
             </Marquee>
             <Marquee reverse className="[--duration:30s]" repeat={5}>
               {randomTiles4.map((review, idx) => (
                 <AnimatedCard key={idx} {...review} />
               ))}
             </Marquee>
             <div className="absolute z-10 ">
               <div className="mx-auto size-24 rounded-[2rem] border  p-3 shadow-2xl backdrop-blur-md lg:size-32 bg-black/10">
                 <Image src={logoNoBg} alt="logo" />
               </div>
               <div className="text-primary z-10 mt-4 flex flex-col items-center text-center">
                 <h1 className="text-3xl font-bold lg:text-4xl text-white mb-10">
                   Accelerate Your Brand's Success Today.
                 </h1>
                 <CtaButton text="Book a Call" url="#book" />
               </div>
               <div className="bg-black absolute inset-0  -z-10 rounded-full opacity-40 blur-xl" />
             </div>
             <div className="to-black absolute inset-x-0 bottom-0 h-full bg-gradient-to-b from-transparent to-70%" />
           </div>
         </div>
       </div>
     </section>
   );
}
