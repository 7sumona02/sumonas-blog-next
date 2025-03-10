import React from 'react'
import { SideMenuBtn } from './MenuBtn'

const Nav = () => {
  return (
    <div className='sticky inset-x-0 top-0 z-30 w-full border-b border-neutral-600 backdrop-blur-lg transition-all flex justify-between items-center px-10 py-4'>
        <div className='size-10 bg-red-600 rounded-full'></div>
        <div><SideMenuBtn /></div>
    </div>
  )
}

export default Nav