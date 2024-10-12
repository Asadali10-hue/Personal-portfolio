import React from 'react'
import { Tiles } from './Tiles';

const AnimatedGridBackgroundSection = ({ children }) => {
    return (
      
      <div className={"w-screen min-h-screen overflow-hidden relative mx-auto"}>
        <div className={"container mx-auto relative z-[2] px-2 my-32"}>
          {children}
        </div>
        <div className={"absolute inset-0"}>
          <Tiles rows={40} cols={30} />
        </div>
      </div>
    );
  };
export default AnimatedGridBackgroundSection