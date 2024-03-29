import React from 'react'
import Sidebar from '@/components/sidebar'

type LayoutProps = {
    children: React.ReactNode
}

 const Layout = (props : LayoutProps) => {
  return (
    <div className='flex overflow-hidden h-full'>
      <Sidebar/>
        <div className='w-full'>
            {props.children}
        </div>
    </div>
  )
}

export default Layout