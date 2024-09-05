'use client'
import React,{ useRef } from 'react';
import Image from 'next/image';
import { useTransform, motion, useScroll } from 'framer-motion';
import { MagicCard } from '@/components/magicui/magic-card';

const StackCard = ({i, project, progress, range, targetScale}) => {

  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  })

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1])
  const scale = useTransform(progress, range, [1, targetScale]);
 
  return (
    <div ref={container} className='h-screen flex items-center justify-center sticky top-0'>
      <motion.div 
        style={{scale, top:`calc(-5vh + ${i * 25}px)`}} 
        className='flex flex-col relative top-[-25%] h-[500px] lg:w-[700px] rounded-md p-[50px] origin-top'
      >
       
        <MagicCard className='flex items-center justify-center p-4 '>
            <div className=''>
            <div className='flex flex-col gap-4'>
                <project.image className='size-20 md:size-30 text-main' strokeWidth={0.75}/>
                <p className='boxText font-bold'>{project.title}</p>
            </div>
            </div>
        </MagicCard>
      </motion.div>
    </div>
  )
}

export default StackCard