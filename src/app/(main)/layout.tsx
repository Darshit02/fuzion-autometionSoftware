import React from 'react'

type LayoutProps = {
    children: React.ReactNode
}

 const Layout = (props : LayoutProps) => {
  return (
    <div className='flex overflow-hidden h-screen'>
        <div className='w-full'>
            {props.children}
        </div>
    </div>
  )
}

export default Layout