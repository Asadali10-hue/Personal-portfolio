import React from 'react'
import { FirstColumnShowCase } from './FirstColumnShowCase'
import { SecondColmnShowcase } from './SecondColmnShowcase'

const ShowcaseVideos = () => {
  return (
    <section className='py-32 w-full' id='results'>
        <h2 className="mainTitleText text-center mb-10">
        Snippets of Satisfaction
        </h2>
        <div className=''>
            <FirstColumnShowCase/>
            <SecondColmnShowcase/>
        </div>
    </section>
  )
}

export default ShowcaseVideos