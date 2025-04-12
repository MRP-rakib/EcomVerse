import React from 'react'
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";


function ArrowBtn() {
  return (
    <div className='flex items-center gap-2'>
        <span className='flex items-center justify-center w-6.5 h-6.5 lg:w-11.5 lg:h-11.5 rounded-full bg-[#F5F5F5] text-[10px] lg:text-[20px] cursor-pointer'><FaArrowLeft /></span>
        <span className='flex items-center justify-center w-6.5 h-6.5 lg:w-11.5 lg:h-11.5 rounded-full bg-[#F5F5F5] text-[10px] lg:text-[20px] cursor-pointer'><FaArrowRight /></span>
    </div>
  )
}

export default ArrowBtn