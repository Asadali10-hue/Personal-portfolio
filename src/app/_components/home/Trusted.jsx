import { trusted } from '@/data/trusted'
import React from 'react'
import TrustedCard from '../trusted/TrustedCard'

const Trusted = () => {
  return (
    <section className='h-fit py-32'>
      <div className='container px-2 flex flex-wrap justify-center gap-16'>

      {trusted.map((user)=>{
        return(
          <TrustedCard key={user.id} user={user}/>
        )
      })}
      </div>
    </section>
  )
}

export default Trusted