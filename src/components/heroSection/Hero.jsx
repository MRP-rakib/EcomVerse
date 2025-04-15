import React from 'react'
import HeroAside from './HeroAside'
import HeroImg from './HeroImg'

function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[217px_auto] lg:divide-x-1 divide-[rgba(0,0,0,0.3)] lg:gap-11'>
      <div className='lg:pr-4 pt-5 lg:pt-10'>
      <HeroAside/>
      </div>
       <HeroImg/>
    </div>
  )
}

export default Hero