'use client'
import { cn } from "@/lib/utils";
import Script from "next/script";
import React, { useRef } from "react";
import gsap from 'gsap'
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)




const LontTypesVideosSection = ({ products }) => {

  const containerVideo = useRef(null)

  useGSAP(()=>{
gsap.set('.element', {y:30})

const tl = gsap.timeline({
  scrollTrigger:{
    trigger: containerVideo.current,
    start: "10% 90%",
    end: '100% 100%',
    scrub: true,
   stagger: 1

  }
})

tl.to('.element', {
  y:-30,
  ease: 'power4.inOut',
  stagger: 1


}, 'a')
  }, {scope: containerVideo})


  const getGridClasses = (index) => {
    switch (index) {
      case 0:
        return "md:row-span-2 md:col-span-5";
      case 1:
        return "md:row-start-3 md:row-end-6 md:col-start-4 md:col-end-9";
      case 2:
        return "md:row-start-5 md:row-end-7 md:col-start-7 md:col-end-12";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-[100vh] flex items-center py-10" ref={containerVideo}>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8  md:grid-cols-11 md:grid-rows-6 container mx-auto px-2">
        {products.map((product, index) => {
          return (
            <div
            key={product.id}
              className={cn("group/product h-fit element relative flex-shrink-0 w-full ", 
               getGridClasses(index)
              )}
            >

              <div className="relative aspect-w-16 aspect-h-9">
                <div>
                  {/* Wistia embed */}
                  <div
                    className={`wistia_embed wistia_async_${product.url} seo=false videoFoam=false `}
                    style={{
                      height: "100%",
                      position: "relative",
                      width: "100%",
                    }}
                  ></div>

                  <Script
                    src={`https://fast.wistia.com/embed/medias/${product.url}.jsonp`}
                    strategy="lazyOnload" 
                  />
                  <Script
                    src="https://fast.wistia.com/assets/external/E-v1.js"
                    strategy="lazyOnload" 
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LontTypesVideosSection;
