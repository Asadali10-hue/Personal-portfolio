import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/utils";
import CalcButton from "@/lib/calcButton";

export default function HeaderButton() {
  const label = "Book a Call";
  return (
    <CalcButton>
    <div  className="group cursor-pointer block rounded-xl border-2 border-main border-opacity-0 bg-transparent p-1 transition-all duration-500 hover:border-opacity-100">
      <div className="relative flex items-center justify-center gap-4 overflow-hidden rounded-lg bg-main lg:px-6 px-4 py-3 font-bold text-white">
        {label}
        <ArrowRight className="transition-all group-hover:translate-x-2 group-hover:scale-125" />
        <div
          className={cn(
            "absolute -left-16 top-0 h-full w-12 rotate-[30deg] scale-y-150 bg-white/10 transition-all duration-700 group-hover:left-[calc(100%+1rem)]",
          )}
        />
      </div>
    </div>

    </CalcButton>
  );
}

