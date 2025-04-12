import React from 'react'

function ProductSection({sectionType,sectionName}) {
  return (
    <div className='flex flex-col gap-3 lg:gap-6'>
        <div className='flex items-center gap-2 lg:gap-4'>
        <div className='bg-[#DB4444] w-3 h-6 lg:w-5 lg:h-10 rounded-[4px]'></div>
        <p className='text-[12px] lg:text-[16px] text-[#DB4444] font-semibold capitalize'>{sectionType}</p>
    </div>
    <h3 className='capitalize text-[18px] lg:text-[36px] tracking-[4%] text-[#000000] text-nowrap'>{sectionName}</h3>
    </div>
  )
}

export default ProductSection