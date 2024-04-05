import { DownloadCloud, File, Table2Icon } from 'lucide-react'
import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
    <div className='flex flex-col gap-4 relative'>
    <h1 className='text-4xl sticky top-0 z-[10] p-6 bg-background/50 background-blur-lg flex items-center border-b'>
        Logs
    </h1>
    <div className='flex items-center flex-col justify-center mt-10 gap-10'>
        <File className='h-[8rem] w-[8rem] text-muted-foreground/70'/>
        <h1 className='text-2xl text-muted-foreground/70'>Logs page Develope soon. 😊</h1>
    </div>
    </div>
  )
}

export default page