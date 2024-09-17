'use client'
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Parallax, ParallaxProvider, useParallax } from "react-scroll-parallax";
import dynamic from "next/dynamic";

const WistiaDynamic = dynamic(() => import("./WistiaVideo"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
});

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
    <div className="mt-10 relative max-w-[96rem] mx-auto flex  flex-col items-center md:flex-row text-sm md:justify-between gap-8 md:min-h-[70vh] !mb-32">
      <Card
        className="p-0 w-[200px] md:absolute md:w-[150px] xl:w-[260px]  xl:-top-44 xl:left-8 md:left-8 md:-top-40   md:-rotate-45 bg-black"
        ref={parallax.ref}
      >
        <CardContent className="p-2">
          <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <WistiaDynamic id="080u4g5d32" />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>

      <Card
        className="p-0 w-[200px] md:absolute xl:right-96 md:right-60 md:top-20 md:w-[150px] xl:w-[260px] bg-black"
        ref={parallax4.ref}
      >
        <CardContent className="p-2">
          <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <WistiaDynamic id="jptuxx5z9r" />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card
        className="p-0 w-[200px] md:w-[150px] xl:w-[260px] bg-black md:absolute md:left-60 xl:left-96 md:top-20"
        ref={parallax3.ref}
      >
        <CardContent className="p-2">
          <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <WistiaDynamic id="olvpte5ia0" />
          </div>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
      <Card
        className="p-0 w-[200px] md:absolute md:w-[150px] xl:w-[260px]  md:-top-40 xl:-top-44 md:right-10 xl:right-8 md:-rotate-45 bg-black"
        ref={parallax2.ref}
      >
        <CardContent className="p-2">
          <div className="aspect-w-9 aspect-h-16 w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto">
            <WistiaDynamic id="9nx6irtj51" />
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
