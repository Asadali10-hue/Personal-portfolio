import { BadgeDollarSign, Facebook, Heart, Mic, Youtube } from "lucide-react";
import { AiOutlineTikTok } from "react-icons/ai";


export const tiles = [
    {
       icon: <Youtube className="size-full text-rose-600" />,
       bg: (
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]"></div>
       ),
    },
    {
       icon: <Facebook className="size-full text-blue-500" />,
       bg: (
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 opacity-70 blur-[20px]"></div>
       ),
    },
    {
       icon: <AiOutlineTikTok className="size-full text-emerald-600" />,
       bg: (
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-green-500 via-teal-500 to-emerald-600 opacity-70 blur-[20px]"></div>
       ),
    },
    {
       icon: <Mic className="size-full text-yellow-400" />,
       bg: (
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-600 opacity-70 blur-[20px]"></div>
       ),
    },
    {
       icon: <Heart className="size-full text-rose-600" />,
       bg: (
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-orange-600 via-rose-600 to-violet-600 opacity-70 blur-[20px]"></div>
       ),
    },
    {
       icon: <BadgeDollarSign className="size-full text-gray-500" />,
       bg: (
          <div className="pointer-events-none absolute left-1/2 top-1/2 size-1/2 -translate-x-1/2 -translate-y-1/2 overflow-visible rounded-full bg-gradient-to-r from-gray-600 via-gray-500 to-gray-400 opacity-70 blur-[20px]"></div>
       ),
    },
 ]