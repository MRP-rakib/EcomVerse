import React from 'react'
import Hero from './components/heroSection/Hero'
import FlashSale from './components/FlashSale'
import CategorySection from './components/CategorySection'
import BestSelling from './components/BestSelling'
import OurProduct from './components/OurProduct'
import MusicSection from './components/MusicSection'
import NewArrival from './components/NewArrival'

function Home() {
  return (
    <div className='container'>
     <Hero/>
     <FlashSale/>
     <CategorySection/>
     <BestSelling/>
     <MusicSection/>
     <OurProduct/>
     <NewArrival/>
    </div>
  )
}

export default Home