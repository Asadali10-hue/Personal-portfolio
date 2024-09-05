'use client'
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import HeaderButton from './home/HeaderButton';
import Image from 'next/image';
import logo from '../../../public/logo.png'
import { navLinks } from '@/data/navLinks';
import MobileNav from './navigation/MobileNav';




const NavTest = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
    <nav className="fixed left-0 top-2 z-50 w-full hidden md:block">
    <div className="container mx-auto flex justify-between items-center py-4 px-6 ">
      {/* Logo Section */}
      {!isScrolled &&
      
      <div className="text-2xl font-bold text-white">
        <Link href="/">
          <Image src={logo} alt='logo' className='w-32 lg:w-36'/>
        </Link>
      </div>
    }
  
      {/* Navigation Links */}
      <ul className={`flex gap-6 lg:gap-8 text-white items-center mx-auto font-medium border ${isScrolled ? 'px-10 py-2' : 'py-4 lg:py-8 px-8 lg:px-20'}  rounded-full bg-black/30 backdrop-blur-md animate-fade-in [--animation-delay:600ms]`}>
       {navLinks.map((item)=>{
           return(
            <Link href={item.url} key={item.id}>
                  {item.name}
                </Link>
        )
    })}
        {isScrolled &&
       <div>
        <HeaderButton/>
       </div>
        
    }
      </ul>
  
      {/* Call-to-Action Button */}
      {!isScrolled &&
      <div>
        <HeaderButton/>
      </div>
    }
    </div>
  </nav>
  <MobileNav/>
    </>
  );
};

export default NavTest;
