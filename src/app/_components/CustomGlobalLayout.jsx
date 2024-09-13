'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from './navigation/Nav'
import { Footer } from './footer/Footer'
import NavTest from './NavTest'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const CustomGlobalLayout = ({children}) => {
//   useEffect(()=>{
//     const lenis = new Lenis({
//       lerp: 0.03,
//       // easing: (t) => t,
//       // easing: function(t){return (t === 1 ? 1 : 1 - Math.pow(2, -10 * t))},
//     })



// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)

//   }, [])
  return (
    <>
    {/* <Nav/> */}
    <NavTest/>
    <ReactLenis root options={{lerp: 0.04, duration: 2.5, }}>
        {children}
        <Footer/>
    </ReactLenis>
      </>
  )
}

export default CustomGlobalLayout