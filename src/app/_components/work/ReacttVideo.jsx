'use client'
import React from "react";
import ReactPlayer from "react-player";

const ReacttVideo = ({video}) => {
  return (
    
      <ReactPlayer url={video} className="h-full w-full"  width="100%"
      height="100%" controls={false} />
    
  );
};

export default ReacttVideo;
