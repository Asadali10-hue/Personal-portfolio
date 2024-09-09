'use client'
import {
  Card,
  CardContent,
  CardFooter,

} from "@/components/ui/card";
import { useRef } from "react";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";

const ShortVideos = () => {
  const parallax = useParallax({
    speed: 10,
    rotate: [0, -10]
  });
  const parallax2 = useParallax({
    speed: 10,
    rotate: [0, 10]
  });
  const parallax3 = useParallax({
    speed: 10,
    rotate: [0, -10]
  });
  const parallax4 = useParallax({
    speed: 10,
    rotate: [0, 10]
  });


  return (
    
    <div className="mt-10 relative max-w-6xl mx-auto flex  flex-col items-center md:flex-row text-sm md:justify-between gap-8 md:min-h-[70vh] !mb-32">
      <Card className="p-0 w-[200px] md:absolute md:w-[150px] xl:w-[250px]  xl:-top-28 xl:-left-24 md:left-8 md:-top-40  md:-rotate-45 bg-black" ref={parallax.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/080u4g5d32"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>

      <Card className="p-0 w-[200px] md:absolute xl:right-64 md:right-40 md:top-20 md:w-[150px] xl:w-[250px] bg-black" ref={parallax4.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/jptuxx5z9r"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
      <Card className="p-0 w-[200px] md:w-[150px] xl:w-[250px] bg-black md:absolute md:left-40 xl:left-64 md:top-20" ref={parallax3.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/olvpte5ia0"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
<Card className="p-0 w-[200px] md:absolute md:w-[150px] xl:w-[250px]  md:-top-40 xl:-top-28 md:right-10 xl:-right-24 md:-rotate-45 bg-black" ref={parallax2.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/9nx6irtj51"
        frameBorder="0"
        className="w-full h-full"
        allowFullScreen
      ></iframe>
    </div>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card>
     
    </div>

  );
};

export default ShortVideos;
