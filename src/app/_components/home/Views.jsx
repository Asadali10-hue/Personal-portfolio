'use client'

import { useState, useEffect } from 'react';
import { BorderBeam } from '@/components/magicui/border-beam'
import { CardSpotlight } from '@/components/ui/card-spotlight'
import { Separator } from '@/components/ui/separator'

const Views = () => {
  const [organicViews, setOrganicViews] = useState(75023489);
  // Increment logic using useEffect
  useEffect(() => {
    // Define the interval to increment the views by 1
    const interval = setInterval(() => {
      setOrganicViews((prevViews) => prevViews + 1); // Increase by 1
    }, 2000); // Update every 2 seconds

    // Cleanup the interval on component unmount
    return () => clearInterval(interval);
  }, []);


  return (
    <section className='py-32 px-2 overflow-hidden'>

    <CardSpotlight className="relative container mx-auto px-2 flex h-fit py-5 w-full   rounded-lg border bg-black md:shadow-xl">
    <div className="w-full relative mt-2 whitespace-pre-wrap bg-gradient-to-b from-white to-gray-300/80 bg-clip-text text-center text-3xl md:text-4xl font-semibold leading-none text-transparent">
      <span className='mx-auto w-full mt-5 whitespace-pre-wrap bg-gradient-to-b from-main to-main/30 bg-clip-text text-center text-3xl md:text-4xl font-semibold leading-none text-transparent'>
        Unveiling Our Impact
      </span>

      <div className='flex mx-auto items-center justify-center flex-col md:flex-row w-full mt-20 gap-3 md:gap-5 lg:gap-8 min-h-fit'>
        <div className='flex flex-col gap-2 items-center'>
          {/* Step 4: Update the view */}
          <span className='text-3xl font-bold md:text-5xl lg:text-7xl'>75,023,513</span>
          <span className='font-semibold text-xl md:text-3xl lg:text-5xl'>organic views</span>
        </div>
        <Separator orientation="vertical" className='!bg-white hidden md:block h-20 !text-white' />
        <Separator orientation="horizontal" className='!bg-white w-10 md:hidden !text-white' />
        <div className='flex flex-col gap-2 items-center'>
          <span className='text-3xl font-bold md:text-5xl lg:text-7xl'>1,000,000 +</span>
          <span className='font-semibold text-xl md:text-3xl lg:text-5xl'>followers</span>
        </div>
      </div>

      <p className='h-fit mt-10 py-2 text-white font-bold'>and counting...</p>
    </div>
      
      <BorderBeam size={550} duration={12} delay={9} />
    </CardSpotlight>
    </section>
  )
}

export default Views