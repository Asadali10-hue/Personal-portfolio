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
    
    <div className="mt-10 relative container mx-auto flex  flex-col items-center md:flex-row text-sm md:justify-between gap-8 md:min-h-[70vh] !mb-32">
      <Card className="p-0 w-[200px] md:absolute md:w-[250px]  md:-top-28 md:-left-24 md:-rotate-45 bg-black" ref={parallax.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
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

      <Card className="p-0 w-[200px] md:absolute md:right-64 md:top-20 md:w-[250px] bg-black" ref={parallax4.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
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
      <Card className="p-0 w-[200px] md:w-[250px] bg-black md:absolute md:left-64 md:top-20" ref={parallax3.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
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
<Card className="p-0 w-[200px] md:absolute md:w-[250px]  md:-top-28 md:-right-24 md:-rotate-45 bg-black" ref={parallax2.ref}>
  <CardContent className="p-2">
    <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
      <iframe
        src="https://fast.wistia.net/embed/iframe/hgk0eqtkwk"
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
