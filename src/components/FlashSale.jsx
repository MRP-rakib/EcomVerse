import React, { useEffect, useState } from 'react'
import ProductSection from './ProductSection'
import Button from './button/Button'
import Card from './Card'
import { useDispatch, useSelector } from 'react-redux'
import { products } from '../redux/apiSlice'
import SkeletonCard from './SkeletonCard'
import ArrowBtn from './button/ArrowBtn';
import { useNavigate } from 'react-router'

function FlashSale() {
  const dispath = useDispatch()
  const { data, status } = useSelector(state => state.product)
  const [activeCard, setActiveCard] = useState(0)
  const navigation = useNavigate()

  useEffect(() => {
    dispath(products)
  }, [dispath])
  const flashSale = data.filter(product => product.category === "beauty")
  if (status === "failed") return <p className='pt-10 lg:pt-[140px]'>error...</p>
  const cardsPerPage = 4
  const handelnext = () => {
    setActiveCard(prev => (prev + cardsPerPage) % flashSale.length)
  }
  const handelprev = () => {
    setActiveCard(prev => (prev - cardsPerPage) % flashSale.length)
  }
  const handelSeeAll =()=>{
    navigation('product',{state:{allProduct:flashSale}})
  }

  return (
    <div className='pt-10 lg:pt-[140px] '>
      <div className='flex items-end justify-between'>
        <div className='flex items-end gap-4 lg:gap-[87px]'>
          <ProductSection sectionType='Today’s' sectionName='Flash Sales' />
          <Counter />
        </div>
        <ArrowBtn
          disabledNext={activeCard + cardsPerPage >= flashSale.length}
          onClickNext={handelnext}
          disabledPrev={activeCard === 0}
          onClickPrev={handelprev}
        />

      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5 pt-5 lg:pt-10">
        {status === "loading"
          ? Array.from({ length: 4 }).map((_, index) => (
            <SkeletonCard key={index} />
          ))
          : flashSale.slice(activeCard, activeCard + cardsPerPage).map((product) => (
            <Card key={product._id} product={product} />
          ))}
      </div>
      <div className='flex justify-center py-7.5 lg:py-[60px]'>
        
          <Button onClick={handelSeeAll} btnName="View All Products" />
        
      </div>
    </div>
  )
}
function Counter() {
  const [time, setTime] = useState({
    days: 30,
    hours: 23,
    minutes: 19,
    seconds: 56,
  });

  useEffect(() => {
    const countdown = setInterval(() => {
      setTime(prev => {
        let { days, hours, minutes, seconds } = prev;
        if (days === 0 && hours === 0 && minutes === 0 && seconds === 0) {
          clearInterval(countdown);
          return prev;
        }
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) {
                days--;
              }
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);
    return () => clearInterval(countdown);
  }, []);

  return (
    <div className="flex items-center space-x-1 lg:space-x-4 text-center font-semibold text-black">
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[8px] font-medium">Days</span>
        <span className="text-[12px] lg:text-[32px] font-bold">{String(time.days).padStart(2, '0')}</span>
      </div>
      <span className="text-2xl text-red-300">:</span>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[8px] font-medium">Hours</span>
        <span className="text-[12px] lg:text-[32px] font-bold">{String(time.hours).padStart(2, '0')}</span>
      </div>
      <span className="text-2xl text-red-300">:</span>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[8px] font-medium">Minutes</span>
        <span className="text-[12px] lg:text-[32px] font-bold">{String(time.minutes).padStart(2, '0')}</span>
      </div>
      <span className="text-2xl text-red-300">:</span>
      <div className="flex flex-col gap-1 items-center">
        <span className="text-[8px] font-medium">Seconds</span>
        <span className="text-[12px] lg:text-[32px] font-bold">{String(time.seconds).padStart(2, '0')}</span>
      </div>
    </div>
  );
}

export default FlashSale