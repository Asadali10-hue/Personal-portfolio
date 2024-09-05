import CallToActionSection from '@/app/_components/home/CallToActionSection';
import WorkData from '@/app/_components/work/WorkData';
import WorkHeader from '@/app/_components/work/WorkHeader';
import { contentfullvideos } from '@/lib/contentfulData'
import React, { Suspense } from 'react'

const OurWork = async() => {
 
  return (
    <main className='min-h-screen '>
      <WorkHeader/>
      <Suspense fallback={<p className='text-white'>Loading...</p>}>

      <WorkData/>
      </Suspense>
      <CallToActionSection/>
    </main>
  )
}

export default OurWork