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
      transition={{ duration: 1}}
      variants={variants1}
      className=""
    >
      {children}
    </motion.div>
  );
}