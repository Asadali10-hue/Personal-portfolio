import CallToActionSection from '@/app/_components/home/CallToActionSection';
import WorkData from '@/app/_components/work/WorkData';
import WorkHeader from '@/app/_components/work/WorkHeader';
import { contentfullvideos } from '@/lib/contentfulData'
import React from 'react'

const OurWork = async() => {
 
  return (
    <main className='min-h-screen '>
      <WorkHeader/>
      <WorkData/>
      <CallToActionSection/>
    </main>
  )
}

export default OurWork