'use client'
import { motion } from "framer-motion";

export function BlurIn({children}) {
  const variants1 = {
    hidden: { filter: "blur(10px)", opacity: 0, y:20 },
    visible: { filter: "blur(0px)", opacity: 1, y:0 },
  };
  return (
    <motion.div
      initial="hidden"
      
      whileInView="visible"
      transition={{ duration: 1.5}}
      variants={variants1}
      className="text-center font-display text-4xl font-bold tracking-[-0.02em] drop-shadow-sm md:text-7xl md:leading-[5rem]"
    >
      {children}
    </motion.div>
  );
}