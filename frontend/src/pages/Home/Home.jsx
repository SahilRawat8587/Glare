import React from 'react'
import MainBanner from '../../components/Main Banner'
import Categories from '../../components/Categories'
import BestSeler from '../../components/BestSeler'
import NewsLetter from '../../components/NewsLetter'

const Home = () => {
  return (
    <div className='mt-10'>
        <MainBanner />
        <Categories />
        <BestSeler />
        <NewsLetter />
      
    </div>
  )
}

export default Home
