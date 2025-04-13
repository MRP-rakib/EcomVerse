import React from 'react'
import { FaStar } from "react-icons/fa";
import { RiDeleteBinLine } from "react-icons/ri";
import Button from '../components/button/Button';


function Wishlist() {
  return (
    <div className='container pt-10 lg:pt-[80px]'>
      <div className='flex justify-between items-center pb-[30px] lg:pb-[60px]'>
        <p>Wishlist (4)</p>
        <Button btnName='Move All To Bag' className='text-black border border-[rgba(0,0,0,0.5)]'/>
      </div>
      <WishlistCard />
    </div>
  )
}
function WishlistCard() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5'>
      <div key="{product._id}" className='text-[16px] cursor-pointer font-medium'>
        <div className='relative group flex rounder-[4px] overflow-hidden justify-center items-center h-[250px] bg-[#F5F5F5]'>
          <img className='w-full object-bottom' src="{product.image}" alt="image" />
          <span onClick="{()=>handelAddToCart(product)}" className='lg:group-hover:bottom-0 lg:group-hover:opacity-100 lg:group-hover:visible absolute bottom-0 lg:bottom-[10px] transition-all duration-300 lg:opacity-0 lg:invisible w-full py-2 text-center bg-[#000000] text-white'>
            <p>Add To Cart</p>
          </span>
          <span className='absolute top-3 left-3 py-1 px-3 bg-[#DB4444] uppercase text-[#FAFAFA] text-[12px]'>10</span>
          <div className='absolute top-3 right-2.5 flex flex-col gap-2'>
            <span className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center text-[18px]'><RiDeleteBinLine /></span>

          </div>
        </div>
        <div className='pt-4'>
          <h4 className='text-[12px] lg:text-[16px] font-medium line-clamp-2'>title</h4>
          <span className='flex items-center gap-3 py-2'>
            <p className='text-[12px] lg:text-[16px] font-medium text-[#DB4444]'>120</p>
            <p className='text-[12px] lg:text-[16px] font-medium text-[rgba(0,0,0,0.5)] line-through'>130</p>
          </span>
         </div>
      </div>
    </div>
  )
}
export default Wishlist