"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { auth } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";

export function TypewriterEffectSmoothDemo() {
  const words = [
    {
      text: "Create",
    },
    {
      text: "Your",
    },
    {
      text: "work",
    },
    {
      text: "automation with",
    },
    {
      text: "fuzion.",
      className: "text-puple-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Welcom to Fuzion
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4">
        <button className="w-40 h-10 rounded-xl bg-black border dark:border-white border-transparent text-white text-sm">
         Steps
        </button>
        <button className="flex justify-center items-center gap-2 w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            <PlusCircle className="text-gray-600 h-4 w-4"/>
          create Flow
        </button>
      </div>
    </div>
  );
}
