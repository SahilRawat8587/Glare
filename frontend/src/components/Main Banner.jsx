import React from 'react'
import { assets } from '../assets/assets'
import { ArrowUpRight } from 'lucide-react'
import { Link } from 'react-router'

const MainBanner = () => {
  return (
    <div className='relative '>
      <img src={assets.main_banner} className='w-full hidden md:block rounded-2xl' alt='Desktop Banner' />
      <img src={assets.main_banner_mobile} className='w-full md:hidden' alt='Mobile Banner' />
      <div className='absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 px-4 md:pl-18 lg:pl-24'>
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 leading-tight lg:leading-15 text-black'>Step Into Style</h1>
        <h2 className='text-sm md:text-lg lg:text-xl text-center md:text-left max-w-72 md:max-w-80 lg:max-w-105 lg:leading-8 text-black'>Discover the latest in women's fashion-forward footwear</h2>
      
      <div className='flex items-center mt-6 font-medium'>
        <Link to={"/products"} className='group flex items-center gap-2 px-7 md:px-9 py-3 bg-primary hover:bg-primary-dull transition rounded text-white cursor-pointer'>
            Shop Now <ArrowUpRight className='md:hidden transition group-hover:translate-x-1' />
        </Link>
        <Link to={"/products"} className='group hidden md:flex items-center gap-2 px-9 py-3 cursor-pointer text-black'>
            Explore Collection <ArrowUpRight className='transition group-hover:translate-x-1 text-black' />
        </Link>
      </div>
      </div>
    </div>
  )
}

export default MainBanner
