import React, { useEffect } from 'react'
import ProductSection from './ProductSection'
// import Counter from './Counter'
import Button from './button/Button'
import ArrowBtn from './button/ArrowBtn'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../redux/apiSlice'

function FlashSale() {
  const dispath=useDispatch()
  const{data,status}=useSelector(state=>state.product)

  useEffect(()=>{
    dispath(products)
  },[dispath])
  const flashSale=data.filter(product=>product.section==="Flash Sales")
  if(status==="loading") return <p className='pt-10 lg:pt-[140px] '>Loading...</p>
  if(status==="failed") return <p className='pt-10 lg:pt-[140px]'>error...</p>
  
  return (
    <div className='pt-10 lg:pt-[140px] '>
        <div className='flex items-end justify-between'>
       <div className='flex items-end gap-6 lg:gap-[87px]'>
       <ProductSection sectionType='Today’s' sectionName='Flash Sales'/>
       <Counter/>
       </div>
       <ArrowBtn/>
    </div>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5 pt-5 lg:pt-10'>
   {flashSale.slice(0,4).map(product=>(
    <Card key={product._id} product={product}/>      
  ))}
  </div>
    <div className='flex justify-center py-7.5 lg:py-[60px]'>
    <span>
        <Button btnName="View All Products"/>
    </span>
    </div>
    </div>
  )
}
function Counter(){
  return(
    <div className="flex items-center space-x-1 lg:space-x-4 text-center font-semibold text-black">
        
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-medium">Days</span>
      <span className="text-[12px] lg:text-[32px] font-bold">03</span>
    </div>

    
    <span className="text-2xl text-red-300">:</span>

    
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-medium">Hours</span>
      <span className="text-[12px] lg:text-[32px] font-bold">23</span>
    </div>

    
    <span className="text-2xl text-red-300">:</span>

    
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-medium">Minutes</span>
      <span className="text-[12px] lg:text-[32px] font-bold">19</span>
    </div>

    
    <span className="text-2xl text-red-300">:</span>

   
    <div className="flex flex-col items-center">
      <span className="text-[8px] font-medium">Seconds</span>
      <span className="text-[12px] lg:text-[32px] font-bold">56</span>
    </div>
  </div>
  )
}

export default FlashSale