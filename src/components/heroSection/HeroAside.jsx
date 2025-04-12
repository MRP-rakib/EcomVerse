import React, { useEffect } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../redux/apiSlice';

function HeroAside() {
  const dispath = useDispatch()
  const {data,status}= useSelector(state=>state.product)

  useEffect(()=>{
    dispath(products())
  },[dispath])
  const categories = [...new Set(data.map(cat=>cat.category))]
  if(status==="loading") return <div>Loading...</div>
  if(status==="failed") return <div>error...</div>
  return (
    <div className='w-[50%] lg:w-full'>
      <ul className='lg:pr-4 pt-5 lg:pt-10 gap-4 flex flex-col capitalize'>
        {categories.map((cate,index)=>(
          <li key={index} className='flex items-center justify-between text-[12px] lg:text-[16px] cursor-pointer'>
          <p className='text-nowrap'>{cate}</p>
          {data.category?<span><FaAngleRight /></span>:''}
        </li>))}
        </ul>
    </div>
  )
}

export default HeroAside