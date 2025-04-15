import React, { useEffect } from 'react'
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../redux/apiSlice';

function HeroAside() {
  const dispath = useDispatch()
  const { data, status } = useSelector(state => state.product)

  useEffect(() => {
    dispath(products())
  }, [dispath])
  const categories = [...new Set(data.map(cat => cat.category))]
  if (status === "failed") return <div>error...</div>
  return (
    <div className='w-[50%] lg:w-full'>
      <ul className=' gap-2 lg:gap-4 flex flex-col capitalize'>
        {status === "loading"
          ? Array.from({ length: 9 }).map((_, index) => (
            <li
              key={index}
              className="flex items-center justify-between py-1 animate-pulse"
            >
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-4"></div>
            </li>
          ))
          : categories.map((cate, index) => (
            <li
              key={index}
              className="flex items-center justify-between text-[12px] lg:text-[16px] cursor-pointer py-1"
            >
              <p className="whitespace-nowrap">{cate}</p>
              <span><FaAngleRight /></span>
            </li>
          ))}
      </ul>
    </div>
  )
}

export default HeroAside