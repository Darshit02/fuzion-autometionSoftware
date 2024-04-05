"use client";

import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
import { auth } from "@clerk/nextjs";
import { PlusCircle } from "lucide-react";
import { MultiStepLoaderDemo } from "./step-button";
import Link from "next/link";

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
      text: "Fuzion.",
      className: "text-purple-500 dark:text-purple-500",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem]  ">
      <p className="text-neutral-600 dark:text-neutral-200 text-xs sm:text-base  ">
        Welcom to Fuzion
      </p>
      <TypewriterEffectSmooth words={words} />
      <div className="flex items-center md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 justify-center mt-16">
        <div>
        <MultiStepLoaderDemo/>
        </div>
        <div>
          <Link href="/workflows">
        <button className="flex justify-center items-center gap-2 w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            <PlusCircle className="text-gray-600 h-4 w-4"/>
          create Flow
        </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
