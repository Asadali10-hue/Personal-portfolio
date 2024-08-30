'use client'
import { cn } from "@/lib/utils";

import {
  Video,
  Rocket,
  Hourglass,
  Users,
  Magnet,
  Zap
} from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function FeaturesSection() {
  const features = [
    {
      title: "Videos that makes you millions",
      icon: <Video className="size-24" strokeWidth={0.75} />,
    },
    {
      title: "Become a well know personality in your market",
      icon: <Rocket className="size-24" strokeWidth={0.75} />,
    },
    {
      title: "Build a lifetime asset of personal brand",
      icon: <Hourglass className="size-24" strokeWidth={0.75} />,
    },
    {
      title: "Gets a professional team that you can trust",
      icon: <Users className="size-24" strokeWidth={0.75} />,
    },
    {
      title: "Grow even faster than flash with our editing",
      icon: <Zap className="size-24" strokeWidth={0.75} />,
    },
    {
      title: "Get organic leads and monetize on autopilot",
      icon: <Magnet className="size-24" strokeWidth={0.75} />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-800 to-transparent pointer-events-none" />
      )}
      <motion.span initial={{rotate: 20}} whileInView={{rotate:0}} transition={{duration: .5, delay: .5}} viewport={{amout:'all'}} className="mb-4 relative z-10 px-10 text-whitesize-32 !text-4xl">
        {icon}
      </motion.span>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-700 group-hover/feature:bg-main transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-white text-2xl">
          {title}
        </span>
      </div>
    </div>
  );
};
