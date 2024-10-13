'use client'
import { useParallax } from "react-scroll-parallax";
import quinlanwalther from "../../../../assets/creators/creator10.jpg";
import devinjatho from "../../../../assets/creators/creator8.jpg";
import jmossmentality from "../../../../assets/creators/creator11.jpg";
import joseoliveira from "../../../../assets/creators/creator12.jpg";
import ShortVideoCard from "./ShortVideoCard";



const ShortVideos = () => {
  const parallax = useParallax({
    speed: 2,
    rotate: [0, -5],
    easing:"easeOutBack"
  });
  const parallax2 = useParallax({
    speed: 2,
    rotate: [0, 5],
    easing:"easeOutBack",
  });
  const parallax3 = useParallax({
    speed: 2,
    rotate: [0, -5],
    easing:"easeOutBack",
  });
  const parallax4 = useParallax({
    speed: 2,
    rotate: [0, 5],
    easing:"easeOutBack",
  });


  return (
    <div className="mt-32 md:mt-10 relative max-w-[96rem] mx-auto flex  flex-col items-center md:flex-row text-sm md:justify-between gap-8 md:min-h-[70vh] !mb-32">
      <ShortVideoCard currentRef={parallax} videoId='080u4g5d32' userName='quinlanwalther' userFollowers='670K+' userImage={quinlanwalther} className='p-0 w-[200px] md:absolute md:w-[150px] xl:w-[260px]  xl:-top-44 xl:left-8 md:left-8 md:-top-40   md:-rotate-45 bg-black'/>
      <ShortVideoCard currentRef={parallax4} videoId='jptuxx5z9r' userName='devinjatho' userFollowers='319K+' userImage={devinjatho} className='p-0 w-[200px] md:absolute xl:right-96 md:right-60 md:top-20 md:w-[150px] xl:w-[260px] bg-black'/>
      <ShortVideoCard currentRef={parallax3} videoId='olvpte5ia0' userName='joseoliveira' userFollowers='29K+' userImage={joseoliveira} className='p-0 w-[200px] md:w-[150px] xl:w-[260px] bg-black md:absolute md:left-60 xl:left-96 md:top-20'/>
      <ShortVideoCard currentRef={parallax2} videoId='9nx6irtj51' userName='jmossmentality' userFollowers='110K+' userImage={jmossmentality} className='p-0 w-[200px] md:absolute md:w-[150px] xl:w-[260px]  md:-top-40 xl:-top-44 md:right-10 xl:right-8 md:-rotate-45 bg-black'/>
    </div>
  );
};

export default ShortVideos;
