import React, { useEffect } from 'react'
import ProductSection from './ProductSection'
import Button from './button/Button'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../redux/apiSlice'

function BestSelling() {
  const dispath = useDispatch()
  const { data, status } = useSelector(state => state.product)

  useEffect(() => {
    dispath(products)
  }, [dispath])

  const bestselling = data.filter(product => product.section === "Best Selling Products")
  if(status==="loading") return <p className='pt-6 lg:pt-[70px]'>Loading...</p>
  if(status==="failed") return <p className='pt-6 lg:pt-[70px]'>error...</p>
  
  return (
    <div className='pt-6 lg:pt-[70px]'>
      <div className='flex items-end justify-between'>
        <ProductSection sectionType='This Month' sectionName="Best Selling Products" />
        <Button btnName="view all" />
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5 pt-7.5 lg:pt-15'>
   {bestselling.slice(0,4).map(product=>(
    <Card key={product._id} product={product}/>      
  ))}
  </div>
    </div>
  )
}

export default BestSelling