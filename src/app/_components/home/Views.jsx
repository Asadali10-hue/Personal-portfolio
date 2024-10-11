'use client'

import { useState, useEffect } from 'react';
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { Separator } from '@/components/ui/separator'
import { delay, motion } from 'framer-motion';
import AOS from "aos";
import "aos/dist/aos.css";

const Views = () => {
  const [organicViews, setOrganicViews] = useState(75023489);
  useEffect(() => {
    // const interval = setInterval(() => {
    //   setOrganicViews((prevViews) => prevViews + 1); 
    // }, 2000); // Update every 2 seconds

    // return () => clearInterval(interval);

    AOS.init({duration:1200})
  }, []);


  const variants = {
    initial:{
      opacity: 0,
      scale: 0,
    },
    animate:{
      // rotateX: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        // bounce: 0.4,
        duration: 2,
       
      }

    }
  }

  const fadeAnim = {

    initial:{
      opacity: 0
    },
    animate:{
      // rotateX: 0,
      opacity: 1,
      transition: {
        // type: "spring",
        // bounce: 0.4,
        duration: 1,
        delay: .2
       
      }

    }

  }

  return (
    <section className='py-10 md:py-32 px-2 overflow-hidden'>

      <motion.div variants={variants} initial='initial' whileInView='animate'  className=''>
    <CardSpotlight className="relative max-w-[96rem] mx-auto px-2 flex h-fit py-5 w-full   rounded-lg border-8 bg-black md:shadow-xl" >
    <div className="w-full relative mt-2 whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-3xl md:text-4xl font-semibold leading-none text-transparent">
      <motion.span variants={fadeAnim} initial='initial' whileInView='animate' className='mx-auto w-full mt-5 whitespace-pre-wrap bg-gradient-to-b from-main to-main/30 bg-clip-text text-center font-second text-3xl md:text-4xl font-semibold leading-none text-transparent'>
        Unveiling Our Impact
      </motion.span>

      <div className='flex mx-auto items-center justify-center flex-col md:flex-row w-full mt-10 md:mt-20 gap-3 md:gap-5 lg:gap-16 min-h-fit'>
        <div className='flex flex-col gap-2 items-center'>
          {/* Step 4: Update the view */}
          <span className='text-3xl font-bold md:text-5xl lg:text-[80px]'>75,023,513</span>
          <span className='font-semibold text-xl md:text-3xl text-white lg:text-[3.75rem] lg:mt-5'>organic views</span>
        </div>
        <Separator orientation="vertical" className='!bg-white hidden md:block h-20 !text-white' />
        <Separator orientation="horizontal" className='!bg-white w-10 md:hidden !text-white' />
        <div className='flex flex-col gap-2 items-center'>
          <span className='text-3xl font-bold md:text-5xl lg:text-[80px]'>1,000,000 +</span>
          <span className='font-semibold text-white text-xl md:text-3xl lg:text-[3.75rem] lg:mt-5'>followers</span>
        </div>
      </div>

      <p className='h-fit mt-10 md:mt-20 py-2 font-main text-white font-bold  lg:text-[2.5rem]'>and counting...</p>
    </div>
      
    </CardSpotlight>
      </motion.div>
    </section>
  )
}

export default Views