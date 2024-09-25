
import React from 'react'
import { FirstColumnShowCase } from './FirstColumnShowCase'
import { SecondColmnShowcase } from './SecondColmnShowcase'
import { contentfullShortReviews } from '@/lib/contentfulData'

const ShowcaseVideos = async() => {
  const getShortVideo = await contentfullShortReviews()
  const data = getShortVideo.items

  return (
    <section className='py-32 w-full' id='results'>
        <h2 className="mainTitleText text-center mb-10">
        Snippets of Satisfaction
        </h2>
        <div className=''>
            <FirstColumnShowCase/>
            {/* <SecondColmnShowcase data={data}/> */}
        </div>
    </section>
  )
}

export default ShowcaseVideos