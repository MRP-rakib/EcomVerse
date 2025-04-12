import React from 'react'
import Banner from '../../assets/images/banner.jpg'
function HeroImg() {
  return (
    <div className='w-full pt-5 lg:pt-10'>
      <span className='cursor-pointer'>
      <img className='w-full object-cover' src={Banner} alt="image" />
      </span>
    </div>
  )
}

export default HeroImg