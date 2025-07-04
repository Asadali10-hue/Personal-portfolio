'use client'

import { CardSpotlight } from '@/components/ui/card-spotlight'
import { Separator } from '@/components/ui/separator'
import { motion } from 'framer-motion';
import "aos/dist/aos.css";
import { fadeAnim, viewAnimation } from '@/lib/animation';

const Views = () => {

  return (
    <section className='py-10 md:py-32 px-2 overflow-hidden'>

      <motion.div variants={viewAnimation} initial='initial' whileInView='animate'  className=''>
    <CardSpotlight className="relative max-w-[96rem] mx-auto px-2 flex h-fit py-5 w-full   rounded-lg border-8 bg-black md:shadow-xl" >
    <div className="w-full relative mt-2 whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-3xl md:text-4xl font-semibold leading-none text-transparent">
      <motion.span variants={fadeAnim} initial='initial' whileInView='animate' className='mx-auto w-full mt-5 whitespace-pre-wrap bg-gradient-to-b from-main to-main/30 bg-clip-text text-center font-second text-3xl md:text-4xl font-semibold leading-none text-transparent'>
        Unveiling Our Impact
      </motion.span>

      <div className='flex mx-auto items-center justify-center flex-col md:flex-row w-full mt-10 md:mt-20 gap-3 md:gap-5 lg:gap-16 min-h-fit'>
        <div className='flex flex-col gap-2 items-center'>
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