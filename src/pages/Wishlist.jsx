import React from 'react'
import Button from '../components/button/Button';
import { useSelector } from 'react-redux';
import Card from '../components/Card';


function Wishlist() {
  const product = useSelector(state => state.wishlist)

  return (
    <div className='container pt-10 lg:pt-[80px]'>
      <div className='flex justify-between items-center pb-[30px] lg:pb-[60px]'>
        <p>Wishlist ({product.length})</p>
        <Button btnName='Move All To Bag' className='text-black border border-[rgba(0,0,0,0.5)]' />
      </div>
      {product.length === 0 ? (
        <div className='flex justify-center items-center'>
          <p className='text-[50px] md:text-[100px] lg:text-[150px] text-[rgba(0,0,0,0.2)]'>Empty</p>
        </div>) : (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7.5'>
          {product.map(product => (
            <Card key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Wishlist