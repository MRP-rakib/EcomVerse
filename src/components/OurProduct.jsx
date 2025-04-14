import React, { useEffect } from 'react'
import ProductSection from './ProductSection'
import ArrowBtn from './button/ArrowBtn'
import Card from './Card'
import Button from './button/Button'
import { useDispatch, useSelector } from 'react-redux'
import {products} from "../redux/apiSlice"

function OurProduct() {
  const dispatch = useDispatch()
  const {data,status}= useSelector((state)=>state.product)

  useEffect(()=>{
    dispatch(products())
    
    },[dispatch])
  
    

  if(status=== 'loading') return <p className='pt-10 lg:pt-[70px]'>loading...</p>
  if(status=== 'failed') return <p className='pt-10 lg:pt-[70px]'>error...</p>
  return (
    <div className='pt-10 lg:pt-[70px]'>
        <div className='flex items-end justify-between'>
            <ProductSection sectionType="our products" sectionName="Explore Our Products"/>
            <ArrowBtn/>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5 pt-7.5 lg:pt-15'>
   {data.slice(0,8).map(product=>(
    <Card key={product._id} product={product}/>      
  ))}
  </div>
        <div className='flex justify-center pt-7.5 lg:pt-[60px]'>
        <span><Button btnName='View All Products'/></span>
        </div>
        
    </div>
  )
}

export default OurProduct