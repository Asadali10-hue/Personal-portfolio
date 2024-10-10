"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../../public/logo.png";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data/navLinks";
import Link from "next/link";
import HeaderButton from "../home/HeaderButton";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <nav className="bg-black/30 backdrop-blur-md animate-fade-in [--animation-delay:600ms] z-50 md:hidden fixed top-0 w-full">
      <div className="px-2 flex items-center justify-between py-4 border-b">
        <Link href='/' className="block">
          <Image src={logo} alt="logo" className="w-32" />
        </Link>
        <div className="cursor-pointer" onClick={handleOpen}>
        <button
      aria-expanded={isOpen}
      onClick={handleOpen}
      className={
        'flex aspect-square h-fit select-none flex-col items-center justify-center rounded-full relative z-50'
      }>
      <motion.div
        style={{
          width: '40px',
          borderTop: '2px solid white',
          transformOrigin: 'center'
        }}
        initial={{ translateY: '-3px' }}
        animate={
          isOpen ? { rotate: '45deg', translateY: '1px' } : { translateY: '-3px', rotate: '0deg' }
        }
        transition={{ bounce: 0, duration: 0.1 }}
      />
      <motion.div
        transition={{ bounce: 0, duration: 0.1 }}
        style={{
          width: '40px',
          borderTop: '2px solid white',
          transformOrigin: 'center'
        }}
        initial={{ translateY: '3px' }}
        animate={
          isOpen
            ? { rotate: '-45deg', translateY: '-1px' }
            : { translateY: '3px', rotate: '0deg', scaleX: 1 }
        }
      />
    </button>
        </div>
      </div>
        <AnimatePresence>

        {isOpen && 
      <motion.div className="absolute   min-h-screen w-screen flex flex-col gap-8 top-0 bg-black md:hidden" initial={{x: '-100%'}} animate={{x: 0}} exit={{x: '-100%'}} transition={{duration: .5}}>
        <ul className="text-white flex flex-col mt-20 p-4 gap-4">
            {navLinks.map((item)=>{
                return(
                    <Link key={item.id} href={`/${item.url}`} className="text-white text-2xl" onClick={handleOpen}>
                    {item.name}
                    </Link>
                )
            })}
        </ul>
            <div className="w-fit" onClick={handleOpen}>

        <HeaderButton/>
            </div>
      </motion.div>
        }
        </AnimatePresence>
    </nav>
  );
};

export default MobileNav;
