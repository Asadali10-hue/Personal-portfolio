'use client'
import { trusted } from '@/data/trusted'
import React from 'react'
import TrustedCard from '../trusted/TrustedCard'
import dynamic from 'next/dynamic'
import { Skeleton } from '@/components/ui/skeleton'

const TrustedCardDynamic = dynamic(() => import ('../trusted/TrustedCard'),{
  ssr: false,
  loading: ()=> <div className="flex flex-col items-center justify-center gap-2 lg:gap-4">
  <Skeleton className="h-12 w-12 lg:size-40 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[50px]" />
  </div>
</div>
})

const Trusted = () => {
  return (
    <section className='h-fit py-32'>
      <div className='container px-2 flex flex-wrap justify-center gap-16'>

      {trusted.map((user)=>{
        return(
          <TrustedCardDynamic key={user.id} user={user}/>
        )
      })}
      </div>
    </section>
  )
}

export default React.memo(Trusted)