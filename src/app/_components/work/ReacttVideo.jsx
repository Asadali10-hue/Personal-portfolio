'use client'
// import React from "react";
import ReactPlayer from "react-player";


const ReacttVideo = ({video}) => {
  return (
    
      <ReactPlayer url={video} className="h-full w-full pointer-events-auto"  width="100%"
      height="100%" controls={false} allowFullScreen
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"/>
    
  );
};

export default ReacttVideo;



