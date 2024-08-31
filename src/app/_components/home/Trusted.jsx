'use client'
import { trusted } from '@/data/trusted'
import React from 'react'
import TrustedCard from '../trusted/TrustedCard'
import dynamic from 'next/dynamic'

const TrustedCardDynamic = dynamic(() => import ('../trusted/TrustedCard'),{
  ssr: false,
  loading: ()=> <p className='text-white'>Loading...</p>
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