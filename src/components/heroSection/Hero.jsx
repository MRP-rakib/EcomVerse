import React from 'react'
import HeroAside from './HeroAside'
import HeroImg from './HeroImg'

function Hero() {
  return (
    <div className='grid grid-cols-1 lg:grid-cols-[217px_auto] lg:divide-x-1 divide-[rgba(0,0,0,0.3)] lg:gap-11'>
        <HeroAside/>
        <HeroImg/>
    </div>
  )
}

export default Hero