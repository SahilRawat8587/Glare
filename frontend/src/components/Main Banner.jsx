import React from 'react'
import { assets } from '../assets/assets'

const MainBanner = () => {
  return (
    <div className='relative'>
      <img src={assets.main_banner} className='w-full hidden md:block' alt='Desktop Banner' />
      <img src={assets.main_banner_mobile} className='w-full md:hidden' alt='Mobile Banner' />
    </div>
  )
}

export default MainBanner
