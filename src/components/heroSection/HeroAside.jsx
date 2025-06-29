import React, { useEffect, useState } from 'react'
import { FaAngleRight, FaBars } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux';
import { products } from '../../redux/apiSlice';

function HeroAside() {
  const dispath = useDispatch()
  const { data, status } = useSelector(state => state.product)
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    dispath(products())
  }, [dispath])
  const categories = [...new Set(data.map(cat => cat.category))]
  if (status === "failed") return <div>error...</div>

  return (
    <>
      {/* Large device sidebar */}
      <div className="hidden lg:block w-full">
        <ul className='gap-2 lg:gap-4 flex flex-col capitalize'>
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
      {/* Small device menu button */}
      <div className="block lg:hidden w-full">
        <button
          className="flex items-center gap-2 px-4 py-2 bg-gray-100 rounded-md text-sm font-medium mb-2"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <FaBars />
          Categories
        </button>
        {menuOpen && (
          <ul className='gap-2 flex flex-col capitalize bg-white rounded shadow p-4 '>
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
                  className="flex items-center justify-between text-[12px] cursor-pointer py-1"
                >
                  <p className="whitespace-nowrap">{cate}</p>
                  <span><FaAngleRight /></span>
                </li>
              ))}
          </ul>
        )}
      </div>
    </>
  )
}

export default HeroAside