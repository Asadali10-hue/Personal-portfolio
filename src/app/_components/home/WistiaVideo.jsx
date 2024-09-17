'use client'
import Script from 'next/script'
import React from 'react'

const WistiaVideo = ({id}) => {

  return (
    <div>
    {/* Wistia embed */}
    <div
      className={`wistia_embed wistia_async_${id} seo=true videoFoam=false`}
      style={{ height: '100%', width: '100%' }}
    >
      &nbsp;
    </div>
  
    {/* Wistia external scripts */}
    <Script
      src={`https://fast.wistia.com/embed/medias/${id}.jsonp`}
      strategy="lazyOnload"
    />
    <Script
      src="https://fast.wistia.com/assets/external/E-v1.js"
      strategy="lazyOnload"
    />
  </div>
  )
}

export default WistiaVideo