import React from 'react'
import { GoogleGeminiEffect } from './_components/bottom-gemini-effect'
import { MotionValue } from 'framer-motion';
import { TypewriterEffectSmoothDemo } from './_components/typing-effect';

const transition = {
  duration: 0,
  ease: "linear",
};

const page = ({
  pathLengths,
  title,
  description,
  className,
}: {
  pathLengths: MotionValue[];
  title?: string;
  description?: string;
  className?: string;
}) => {
  return (
    <div className='flex flex-col gap-4 relative'>
    <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 background-blur-lg flex items-center border-b'>
        Dashboard
    </h1>
    <div>
      <TypewriterEffectSmoothDemo/>
    </div>
</div>
  )
}

export default page