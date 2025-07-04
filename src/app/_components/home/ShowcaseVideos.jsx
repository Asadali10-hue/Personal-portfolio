
import React from 'react'
import { FirstColumnShowCase } from './FirstColumnShowCase'
import { SecondColmnShowcase } from './SecondColmnShowcase'
import { contentfullShortReviews } from '@/lib/contentfulData'
import { BlurIn } from '@/hooks/blurAnimation'

const ShowcaseVideos = async() => {
  const getShortVideo = await contentfullShortReviews()
  const data = getShortVideo.items

  return (
    <BlurIn>

    <section className='py-5 md:py-32 w-full' id='reviews'>
        <h2 className="mainTitleText text-center mb-10">
        Snippets of Satisfaction
        </h2>
        <div className=''>
            <FirstColumnShowCase/>
            {/* <SecondColmnShowcase data={data}/> */}
        </div>
    </section>
    </BlurIn>

  )
}

export default ShowcaseVideos