import React from 'react'
import { FaAngleDown } from "react-icons/fa";


function NavHeading({headline}) {
  return (
    <div className=' bg-[#000000] text-[#FAFAFA] text-[12px] lg:text-[14px] py-2 lg:py-3'>
    <div className='container flex items-center gap-4 lg:gap-0'>
    <div className='flex mx-auto gap-1 lg:gap-2 items-center'>
      <p>{headline}</p>
      <span className='font-semibold underline underline-offset-2 cursor-pointer'>ShopNow</span>
    </div>
    <div>
      <span className='flex items-center gap-1 cursor-pointer'>English <FaAngleDown /></span>
    </div>
    </div>
    </div>
  )
}

export default NavHeading