import React from 'react'
import BlogCard from './BlogCard'

const Home = () => {
  return (
    <div className='h-full flex flex-col px-20'>
       <h1 className='pt-12 max-w-lg'>Welcome to my blog I&apos;m Sumona and here I document my latest explorations.</h1>
       <div className='pt-16'>
        <div className='flex items-center justify-between'>
            <h2>Recent tutorials</h2>
            <p className='text-red-600 font-medium'>See all</p>
        </div>
        <div className='max-w-screen overflow-hidden'>
            <div className='flex gap-4 -ml-6 overflow-x-auto'>
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
                <BlogCard />
            </div>
        </div>
       </div>
    </div>
  )
}

export default Home