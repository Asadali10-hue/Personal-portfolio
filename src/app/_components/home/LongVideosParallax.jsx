"use client";
import React from "react";
import LontTypesVideosSection from "./LontTypesVideosSection";
import { BlurIn } from "@/hooks/blurAnimation";
import { videosParallax } from "@/data/videos";

export function LongVideosParallax() {
  return (
    <BlurIn>
      <section id="results">
        <LontTypesVideosSection products={videosParallax} />
      </section>
    </BlurIn>
  );
}
