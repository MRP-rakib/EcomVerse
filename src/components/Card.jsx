import React, { useState } from 'react'
import { RiDeleteBinLine } from "react-icons/ri";
import { FaStar } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { LuEye } from "react-icons/lu";
import { IoIosHeart } from "react-icons/io";
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import { addWishList, deleteWishlist } from '../redux/wishlist';
import { useLocation } from 'react-router';




function Card({ product }) {
    const dispatch = useDispatch()
    const handelAddToCart = (product) => {
        dispatch(addToCart(product))
    }

    const handeladdWishlist = (product) => {
        dispatch(addWishList(product))

    }
    const handelDelete = (product) => {
        dispatch(deleteWishlist(product))

    }
    const wishlist = useSelector(state => state.wishlist)
    const location = useLocation()
    const isWishlist = wishlist.some(item => item._id === product._id)

    return (
        <div className='text-[16px] cursor-pointer font-medium'>
            <div className='relative group flex  rounded-[4px] overflow-hidden justify-center items-center h-[250px] bg-[#F5F5F5]'>
                <img className='w-full h-full object-fill' src={product.image} alt="image" />
                <span onClick={() => handelAddToCart(product)} className='lg:group-hover:bottom-0 lg:group-hover:opacity-100 lg:group-hover:visible absolute bottom-0 lg:bottom-[10px] transition-all duration-300 lg:opacity-0 lg:invisible w-full py-2 text-center bg-[#000000] text-white'>
                    <p>Add To Cart</p>
                </span>
                <span className='absolute top-3 left-3 py-1 px-3 bg-[#DB4444] uppercase text-[#FAFAFA] text-[12px]'>{product.discount}&#37;</span>
                <div className='absolute top-3 right-2.5 flex flex-col gap-2'>
                    {location?.pathname === "/wishlist" ?
                        (<span
                            onClick={() => handelDelete(product)}
                            className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center text-[18px]'>
                            <RiDeleteBinLine />
                        </span>) : (<span
                            onClick={() => handeladdWishlist(product)}
                            className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center text-[18px]'>
                            {isWishlist ? <IoIosHeart /> : <CiHeart />}

                        </span>)
                    }

                    {location?.pathname !== "/wishlist" && <span className='bg-[#FFFFFF] w-6 h-6 rounded-full flex items-center justify-center text-[18px]'><LuEye /></span>}
                </div>
            </div>
            <div className='pt-4'>
                <h4 className='text-[12px] lg:text-[16px] font-medium line-clamp-2'>{product.title}</h4>
                <span className='flex items-center gap-3 py-2'>
                    <p className='text-[12px] lg:text-[16px] font-medium text-[#DB4444]'>&#36;{product.newPrice}</p>
                    <p className='text-[12px] lg:text-[16px] font-medium text-[rgba(0,0,0,0.5)] line-through'>&#36;{product.previousPrice}</p>
                </span>
                {location.pathname!=='/wishlist'&&<div className='flex gap-2 items-center'>
                    <div className='flex text-[12px] lg:text-[18px] items-center text-[#FFAD33]'>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                        <span><FaStar /></span>
                    </div>
                    <p className='text-[14px] text-[rgba(0,0,0,0.5)] font-semibold'>(00)</p>
                </div>}
                
            </div>
        </div>
    )
}

export default Card