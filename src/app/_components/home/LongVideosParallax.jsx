"use client";
import React from "react";
import LontTypesVideosSection from "./LontTypesVideosSection";
import { ParallaxProvider } from "react-scroll-parallax";

export function LongVideosParallax() {
  return( 
    <ParallaxProvider>

  <LontTypesVideosSection products={products} />
    </ParallaxProvider>

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
    id: 4,
  
      url: 'ovlp5grc92'
  },

  {
    id: 5,
    
      url: 'zs8bxc17zv'
  },
  {
    id: 6,
    
      url: '77h5hc2btt'
  },
  {
    id: 7,
    
      url: 'ndzvpegtax'
  },

];
