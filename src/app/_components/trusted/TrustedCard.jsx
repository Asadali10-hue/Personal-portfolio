import Image from 'next/image'
import React from 'react'
import Title from '../Title'
import Link from 'next/link'

const TrustedCard = ({user}) => {
  return (
    <div className="animate-fade-in flex flex-col items-center gap-1 [--animation-delay:200ms]">
        <Title>

        <Link href={user.url} target='_blank' className='size-fit block relative border duration-300 border-transparent p-1 rounded-full group hover:border-white cursor-pointer'>
            <div className='absolute inset-0 flex items-center duration-300 justify-center z-10 opacity-0 group-hover:opacity-100'>
                <user.icon className='text-white md:size-10'/>
            </div>
        <div className=' rounded-full size-24 md:size-44 overflow-hidden '>
            <Image src={user.image} alt='user image' placeholder='blur' className='h-full w-full object-cover object-center grayscale group-hover:grayscale-0'/>
        </div>
        </Link>
        </Title>
        <div className='font-medium text-white text-xl'>{user.total}</div>
    </div>
  )
}

export default TrustedCard