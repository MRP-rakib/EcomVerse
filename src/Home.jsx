import React from 'react'
import Hero from './components/heroSection/Hero'
import FlashSale from './components/FlashSale'
import CategorySection from './components/CategorySection'
import BestSelling from './components/BestSelling'
import OurProduct from './components/OurProduct'
import MusicSection from './components/MusicSection'
import NewArrival from './components/NewArrival'
import SkeletonCard from './components/SkeletonCard'

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
     {/* <SkeletonCard/> */}
    </div>
  )
}

export default Home