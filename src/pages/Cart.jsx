import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { IoIosClose } from "react-icons/io";
import { Link, } from 'react-router';
import { FaAngleUp } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa";
import { decreaseItem, deleteItem, increaseItem } from '../redux/cartSlice';


function Cart() {
    const dispatch = useDispatch()
    const product = useSelector(state => state.cart)
    const handelIncreaseItem = (productId) => {
        dispatch(increaseItem(productId))
    }
    const handelDecreaseItem = (productId) => {
        dispatch(decreaseItem(productId))
    }
    const handelDeleteItem = (productId) => {
        dispatch(deleteItem(productId))
    }
    
    
    const subtotal = product.reduce((acc, item) => acc + item.newPrice * item.quantity, 0)
    const shipping = 10
    const discount = 0
    const total = (subtotal + shipping) - ((subtotal) * (discount / 100));

    return (
        <div className='container pt-[80px] pb-[140px]'>
            <p className='text-[14px] '>
                <span className='text-[rgba(0,0,0,0.3)]'>Home /</span> Cart</p>
            <div className='overflow-x-auto'>
                {product.length === 0 ?
                    (<div className='flex justify-center items-center py-10 lg:py-[80px]'>
                        <p className='text-[50px] md:text-[100px] lg:text-[150px] text-[rgba(0,0,0,0.2)]'>Empty</p>
                    </div>) : (
                        <table className='w-full border-separate border-spacing-y-4 lg:border-spacing-y-10 mt-10 lg:mt-[80px]'>
                            <thead className=''>
                                <tr className='shadow-[0_1px_13px_0] shadow-[rgba(0,0,0,0.05)]'>
                                    <th className='text-[14] lg:text-[16px] font-normal px-5 py-3 lg:px-10 lg:py-6 text-start'>Product</th>
                                    <th className='text-[14] lg:text-[16px] font-normal px-5 py-3 lg:px-10 lg:py-6 text-start'>Price</th>
                                    <th className='text-[14] lg:text-[16px] font-normal px-5 py-3 lg:px-10 lg:py-6 text-start'>Quantity</th>
                                    <th className='text-[14] lg:text-[16px] font-normal px-5 py-3 lg:px-10 lg:py-6 text-start'>Subtotal</th>
                                </tr>
                            </thead>
                            <tbody className=''>
                                {product.map(product => (
                                    <tr key={product._id} className='shadow-[0_1px_13px_0] shadow-[rgba(0,0,0,0.05)]'>
                                        <td className='px-5 py-3 lg:px-10 lg:py-6 flex items-center gap-5'>
                                            <figure className='relative w-[30px] h-[20px] lg:w-[50px] lg:h-[40px] gap-5 overflow-hidden object-cover'>
                                                <img src={product.image} alt="image" />
                                                <span onClick={()=>handelDeleteItem(product._id)} className='flex items-center justify-center cursor-pointer absolute z-[1] w-3 h-3 rounded-full bg-[#DB4444] top-0 text-white'><IoIosClose /></span>
                                            </figure>
                                            <p className='text-[14] lg:text-[16px] text-nowrap line-clamp-1'>{product.title.slice(0, 35)}...</p>
                                        </td>
                                        <td className='text-[14] lg:text-[16px] px-5 py-3 lg:px-10 lg:py-6'>${product.newPrice}</td>
                                        <td className='text-[14] lg:text-[16px] px-5 py-3 lg:px-10 lg:py-6'>
                                            <span className='py-[3px] px-2 lg:py-[6px] lg:px-3 border border-[rgba(0,0,0,0.4)] inline-flex items-center gap-4'>
                                                {product.quantity}
                                                <span>
                                                    <span
                                                        onClick={() => handelIncreaseItem(product._id)}
                                                        className=' cursor-pointer' >
                                                        <FaAngleUp />
                                                    </span>
                                                    <span
                                                        onClick={() => handelDecreaseItem(product._id)}
                                                        className=' cursor-pointer' >
                                                        <FaAngleDown />
                                                    </span>
                                                </span>
                                            </span>
                                        </td>
                                        <td className='text-[14] lg:text-[16px] px-5 py-3 lg:px-10 lg:py-6'>${(product.newPrice) * (product.quantity)}</td>
                                    </tr>))}



                            </tbody>
                        </table>
                    )}

            </div>

            <div className="flex justify-between items-center">
                <button className="cursor-pointer py-2 px-5 lg:py-3 lg:px-12 border border-gray-500 text-[14] lg:text-[16px] font-medium rounded-[4px]">
                    Return To Shop
                </button>
                <button className="cursor-pointer py-2 px-5 lg:py-3 lg:px-12 border border-gray-500 text-[14] lg:text-[16px] font-medium rounded-[4px]">
                    Update Cart
                </button>
            </div>

            <div className='pt-[80px] gap-8 flex-col lg:flex-row lg:gap-0 flex justify-between items-start'>
                <div className=' flex flex-wrap gap-4'>
                    <input className='outline-none border py-2 px-3 lg:py-4 lg:pl-6 lg:pr-[164px] rounded-[4px]' type="text" placeholder='Coupon Code' />
                    <button className="cursor-pointer py-2 px-5 lg:py-3 lg:px-12 bg-[#DB4444] text-[14px] lg:text-[16px] font-medium rounded-[4px] text-[#FAFAFA]">
                        Apply Coupon
                    </button>
                </div>
                <div className='w-full lg:w-[470px] py-8 px-6 border-2 rounded-[4px]'>
                    <p>Cart Total</p>
                    <ul className='pt-6 divide-y-[1px]'>
                        <li className='flex justify-between py-4 text-[14] lg:text-[16px] font-normal'>
                            <p>Subtotal:</p>
                            <p>${subtotal}</p>
                        </li>
                        <li className='flex justify-between py-4 text-[14] lg:text-[16px] font-normal'>
                            <p>Shipping:</p>
                            <p>${subtotal && shipping}</p>
                        </li>
                        <li className='flex justify-between py-4 text-[14] lg:text-[16px] font-normal'>
                            <p>Discount:</p>
                            <p>{subtotal && discount}%</p>
                        </li>
                        <li className='flex justify-between py-4 text-[14] lg:text-[16px] font-normal'>
                            <p>Total:</p>
                            <p>${subtotal && total}</p>
                        </li>
                    </ul>
                    <span className='flex justify-center pt-4'>
                        <Link to="/checkout" className="cursor-pointer py-2 px-5 lg:py-3 lg:px-12 bg-[#DB4444] text-[14px] lg:text-[16px] font-medium rounded-[4px] text-[#FAFAFA]">
                            Procees to checkout
                        </Link>
                    </span>
                </div>

            </div>


        </div>
    )
}

export default Cart