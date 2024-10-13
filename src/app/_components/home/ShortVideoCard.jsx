'use client'

import React, {useRef} from 'react'
import { Card, CardContent } from "@/components/ui/card"
import dynamic from "next/dynamic";
import ShortvideoUserDescription from "./ShortvideoUserDescription";

const WistiaDynamic = dynamic(() => import("./WistiaVideo"), {
    ssr: false,
    loading: () => <p>Loading...</p>,
  });

const ShortVideoCard = ({currentRef, videoId, userName, userFollowers, userImage, className}) => {
  return (
    <Card
        className={className}
        ref={currentRef.ref}
      >
        <CardContent className="p-2">
          <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <WistiaDynamic id={videoId} />
          </div>
        </CardContent>

        <ShortvideoUserDescription
          name={userName}
          followers={userFollowers}
          image={userImage}
        />
      </Card>
  )
}

export default ShortVideoCard