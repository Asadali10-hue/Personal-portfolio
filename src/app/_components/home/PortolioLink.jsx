import React from 'react'
import circle from '../../../../assets/icons/circle.svg'
import Image from 'next/image'
import Link from 'next/link'
import { MoveUpRight } from 'lucide-react'
import { CursorComponent } from './CursorComponent'
import { BlurIn } from '@/hooks/blurAnimation'

const PortolioLink = () => {
  return (
    <BlurIn>

    <section className='w-full min-h-fit py-32 px-2'>
        <div className='relative text-white container mx-auto p-8 lg:p-16 min-h-fit lg:min-h-fit rounded-xl overflow-hidden'>
        <div className="absolute top-0 z-[-2] inset-0 rotate-180 transform bg-white bg-[radial-gradient(60%_120%_at_50%_50%,hsla(0,0%,100%,0)_0,rgba(252,205,238,.5)_100%)]">

        
</div>

<div>
    <div className='relative'>
        <div className='text-black font-semibold text-2xl md:text-5xl lg:text-7xl w-fit relative'>
    <Image alt='circle' src={circle} className='absolute -top-3 lg:-top-2 w-20 md:w-20 lg:w-32 -right-20 lg:-right-32'/>
            <span>

            Deep dive on
            </span>
            
            </div>
        <p className='text-main font-main font-bold headerText2 tracking-wide'>Clients Results</p>
    </div>
    <div className='bg-white text-black mt-10 lg:mt-20 h-full p-4 lg:p-8 rounded-xl'>
        <CursorComponent>

       <Link href="/our-work?page=1&industry=real-estate" className='text-xl lg:text-3xl xl:text-5xl font-medium py-8 xl:py-8 flex justify-between items-center group'>
       <span>
       View our work
       </span>
       <MoveUpRight className='size-8 lg:size-16 group-hover:rotate-45 duration-300 [animation-duration:5s]'/>
       </Link>
        </CursorComponent>
    </div>
</div>
        </div>
    </section>
    </BlurIn>

  )
}

export default PortolioLink