import React, { useEffect } from 'react'
import Card from './Card'
import { useLocation } from 'react-router'
import HeroAside from './heroSection/HeroAside'
function Product() {
    const location= useLocation()
    const {allProduct} = location.state||{allProduct:[]}
    useEffect(()=>{
        window.scroll({top:0,left:0,behavior:'smooth'})
    },[])
  return (
    <div className='container pt-10 lg:pt-20'>
        <span className='text-[14px] text-[rgba(0,0,0,0.3)]'>home {location.pathname}</span>
        <div className='grid grid-cols-1 lg:grid-cols-[217px_auto] gap-7.5 lg:gap-[97px]'>
          <div className='flex flex-col gap-4 pt-6 lg:pt[50px]'>
            <h4 className='text-[16px] lg:text-20px font-bold'>Shop by Category</h4>
          <HeroAside/>
          </div>
      <div>
      <div className=' flex items-center gap-3 justify-end'>
            <span>Show:</span>
            <span className='px-10 py-1 border'>{allProduct.length}</span>
        </div>
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7.5 pt-4 lg:pt-7.5">
        {allProduct.map(product=>(
            <Card key={product._id} product={product}/>
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}

export default Product