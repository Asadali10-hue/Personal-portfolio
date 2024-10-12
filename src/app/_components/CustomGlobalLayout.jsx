'use client'
import { Footer } from './footer/Footer'
import NavTest from './NavTest'
import { ReactLenis, useLenis } from '@studio-freight/react-lenis'

const CustomGlobalLayout = ({children}) => {

  return (
    <>
    <NavTest/>
    <ReactLenis root options={{lerp: 0.04, duration: 2.5, }}>
        {children}
        <Footer/>
    </ReactLenis>
      </>
  )
}

export default CustomGlobalLayout