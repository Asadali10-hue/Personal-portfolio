"use client";
import React from "react";
import LontTypesVideosSection from "./LontTypesVideosSection";
import { ParallaxProvider } from "react-scroll-parallax";
import { BlurIn } from "@/hooks/blurAnimation";

export function LongVideosParallax() {
  return( 
    <BlurIn>

    <section id="results">

  <LontTypesVideosSection products={products} />
    </section>
    </BlurIn>

)
}
export const products = [
  {
    id: 1,
      url: 'bcvlk32j6b'
  },
  {
    id: 2,
 
    url: '63n9nytlfx'
  },
  {
    id: 7,
    
      url: 'ndzvpegtax'
  },

];
