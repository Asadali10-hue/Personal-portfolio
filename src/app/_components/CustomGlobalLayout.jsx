'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from './navigation/Nav'

const CustomGlobalLayout = ({children}) => {
  useEffect(()=>{
    const lenis = new Lenis()



function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  }, [])
  return (
    <>
    <Nav/>
        {children}
        {/* <Footer/> */}
    </>
  )
}

export default CustomGlobalLayout