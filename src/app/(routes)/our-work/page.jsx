import CallToActionSection from '@/app/_components/home/CallToActionSection';
import LoadingComponent from '@/app/_components/work/LoadingComponent';
import WorkData from '@/app/_components/work/WorkData';
import WorkHeader from "@/app/_components/work/WorkHeader";
import React, { Suspense } from 'react'

const OurWork = async() => {
 
  return (
    <main className='min-h-screen relative'>
      <WorkHeader/>
      <Suspense fallback={<LoadingComponent/>}>
      <WorkData/>
      </Suspense>
      <CallToActionSection/>
    </main>
  )
}

export default OurWork