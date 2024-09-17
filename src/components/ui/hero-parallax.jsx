"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import dynamic from "next/dynamic";

const LongVidoCardDynamic = dynamic(()=> import("../../app/_components/LongVideoCard"), {
  ssr: false,
  loading: () => <p>Loading...</p>,
})

export const HeroParallax = ({
  products
}) => {
  const firstRow = products.slice(0, 6);
  const secondRow = products.slice(1, 6);
  const thirdRow = products.slice(0, 6);
  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    (<div
      ref={ref}
      className="h-[280vh] py-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]">
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="">
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.id} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row  mb-20 space-x-20 ">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.id} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20">
          {thirdRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.id} />
          ))}
        </motion.div>
      </motion.div>
    </div>)
  );
};

export const Header = () => {
  return (
    (<div
      className="max-w-7xl relative mx-auto py-20 md:py-40 px-4 w-full  left-0 top-0">
      <h1 className="text-2xl md:text-7xl font-bold text-white">
        Long<br /> Types Videos
      </h1>
    </div>)
  );
};

export const ProductCard = ({
  product,
  translate
}) => {
  return (
    (<motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.id}
      className="group/product h-96 w-[30rem] relative flex-shrink-0">
         <div className="relative aspect-w-16 aspect-h-9">
     
    <LongVidoCardDynamic product={product} translate={translate}/>
                      </div>
    </motion.div>)
  );
};
