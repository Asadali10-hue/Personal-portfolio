'use client'
import React, { useEffect } from 'react'
import Lenis from 'lenis'
import { Nav } from './navigation/Nav'
import { Footer } from './footer/Footer'
import NavTest from './NavTest'

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
    {/* <Nav/> */}
    <NavTest/>
        {children}
        <Footer/>
    </>
  )
}

export default CustomGlobalLayout