'use client'
import Image from 'next/image'
import React from 'react'
import Title from '../Title'
import Link from 'next/link'
import { Instagram, Youtube } from 'lucide-react'
import { easeInOut, motion } from 'framer-motion'

const TrustedCard = ({user, index}) => {

  console.log(user);

  const animationUser = {
    initial:{
      opacity: 0,
      y: -100
    },
    animate: (index)=>({
      opacity: 1,
      y: 0,
      transition:{
        duration: 0.5,
        easeInOut,
        delay: 0.1 * index
      }
    }),
  }
  return (
    <motion.div className="animate-fade-in flex flex-col items-center gap-1 [--animation-delay:200ms]" variants={animationUser}
    
    initial='initial'
    whileInView='animate'
    // viewport={{
    //   once: true,
    // }}
      custom={index}
    >
        <Title>

        <Link href={user.fields.url} target='_blank' className='size-fit block relative border duration-300 border-transparent p-1 rounded-full group hover:border-white cursor-pointer'>
            <div className='absolute inset-0 flex items-center duration-300 justify-center z-10 opacity-0 group-hover:opacity-100'>
              {user.fields.social === 'youtube'? (
                <Youtube className='text-white md:size-10'/>
              ) : (
                
                <Instagram className='text-white md:size-10'/>
              )}
            </div>
        <div className=' rounded-full size-24 md:size-44 overflow-hidden '>
            <Image src={`https:${user.fields.image?.fields.file.url}`} alt='user image' width={200} quality={100} height={200}  className='h-full w-full object-cover object-center grayscale group-hover:grayscale-0'/>
        </div>
        </Link>
        </Title>
        <div className='font-medium text-white text-xl'>{user.fields.followers}</div>
    </motion.div>
  )
}

export default TrustedCard