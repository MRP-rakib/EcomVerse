import React, { useEffect, useState } from 'react'
import ProductSection from './ProductSection'
import Card from './Card'
import Button from './button/Button'
import { useDispatch, useSelector } from 'react-redux'
import { products } from "../redux/apiSlice"
import SkeletonCard from './SkeletonCard'
import ArrowBtn from './button/ArrowBtn';
import { useNavigate } from 'react-router'

function OurProduct() {
  const dispatch = useDispatch()
  const { data, status } = useSelector((state) => state.product)

  useEffect(() => {
    dispatch(products())

  }, [dispatch])
  if (status === 'failed') return <p className='pt-10 lg:pt-[70px]'>error...</p>
  const cardsPerPage = 8
  const [activeCard, setActiveCard] = useState(0)
  const handelnext = () => {
    setActiveCard(prev => (prev + cardsPerPage) % data.length)
  }
  const handelprev = () => {
    setActiveCard(prev => (prev - cardsPerPage) % data.length)
  }
  const navigation = useNavigate()
  const handelSeeAll =()=>{
    navigation('product',{state:{allProduct:data}})
  }

  return (
    <div className='pt-10 lg:pt-[70px]'>
      <div className='flex items-end justify-between'>
        <ProductSection sectionType="our products" sectionName="Explore Our Products" />
        <ArrowBtn
          disabledNext={activeCard + cardsPerPage >= data.length}
          onClickNext={handelnext}
          disabledPrev={activeCard === 0}
          onClickPrev={handelprev}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5 pt-7.5 lg:pt-15">
        {status === "loading"
          ? Array.from({ length: 8 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
          : data.slice(activeCard, activeCard + cardsPerPage).map((product) => (
            <Card key={product._id} product={product} />
          ))}
      </div>
      <div className='flex justify-center pt-7.5 lg:pt-[60px]'>
        <Button onClick={handelSeeAll} btnName='View All Products' />
      </div>

    </div>
  )
}

export default OurProduct