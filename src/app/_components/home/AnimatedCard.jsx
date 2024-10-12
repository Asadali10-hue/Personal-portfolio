'use client'
import React, {useEffect, useId, useRef} from 'react'
import {motion, useAnimation, useInView} from 'framer-motion'
import { cn } from '@/lib/utils'



function AnimatedCard(card) {
    const id = useId()
    const controls = useAnimation()
    const ref = useRef(null)
    const inView = useInView(ref, { once: true })
 
    useEffect(() => {
       if (inView) {
          controls.start({
             opacity: 1,
             transition: { delay: Math.random() * 2, ease: 'easeOut', duration: 1 },
          })
       }
    }, [controls, inView])
 
    return (
       <motion.div
          key={id}
          ref={ref}
          initial={{ opacity: 0 }}
          animate={controls}
          className={cn(
             'relative size-20 cursor-pointer border overflow-hidden rounded-2xl  p-4',
             // light styles
             'bg-black [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]',
             // dark styles
             // 'transform-gpu bg-transparent [border:1px_solid_rgba(255,255,255,.1)] [box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]',
          )}
       >
          {card.icon}
          {card.bg}
       </motion.div>
    )
 }

export default AnimatedCard
