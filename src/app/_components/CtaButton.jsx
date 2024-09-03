"use client";

import Link from "next/link";
import React from "react";
import { ReactLenis, useLenis } from "lenis/react";

const CtaButton = ({ text, url }) => {
  const lenis = useLenis();
  return (
    <Link
      href={`/${url}`}
    >
      <button className="group relative overflow-hidden rounded-full bg-purple-950 px-14 py-4 text-lg transition-all">
        <span className="absolute bottom-0 left-0 h-48 w-full origin-bottom translate-y-full transform overflow-hidden rounded-full bg-white/15 transition-all duration-300 ease-out group-hover:translate-y-14"></span>
        <span className="font-semibold text-purple-200">{text}</span>
      </button>
    </Link>
  );
};

export default CtaButton;
