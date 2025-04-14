import React, { useEffect, useState } from 'react'
import NavHeading from './NavHeading'
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import NavMenu from './NavMenu';
import { Link, useLocation } from 'react-router';
import { IoMdClose } from "react-icons/io";

function Navbar() {
    const [istrue, setIsTrue] = useState(true)
    const handelClick = () => {
        setIsTrue(!istrue)
    }
    const location = useLocation()
    
    return (
        <div className='border-b-[0.5px] border-[rgba(0,0,0,0.3)] pb-4'>
            <NavHeading headline='Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!' />
            <nav className='container items-center flex justify-between pt-4 lg:pt-10'>
                <Link to='/' className='font-bold text-[20px] lg:text-2xl '>EcomVerse</Link>
                <NavMenu />

                <div className='flex gap-6 items-center'>
                    <span onClick={handelClick} className='sm:hidden text-2xl cursor-pointer'>{istrue ? <IoIosSearch /> : <IoMdClose />}</span>
                    <div className='hidden sm:flex'>
                        <Input/>
                    </div>
                    <div className='flex items-center gap-4'>
                        {location?.pathname!=='/wishlist'&&
                        <Link to='/wishlist' className='text-[30px]'><CiHeart /></Link>}
                        
                        <Link to='/cart' className='text-[30px]'><CiShoppingCart /></Link>
                        <Link to='/user' className='text-[30px]'><CiUser /></Link>
                    </div>
                </div>
            </nav>
            <div className={`${istrue ? "hidden" : "flex sm:hidden"} px-4 justify-center pt-4`}>
                <Input className='w-full' iconClass='p'/>
            </div>

        </div>
    )
}

function Input({className}) {
    return (
        <div className={`flex bg-[#F5F5F5] rounded-[4px] justify-between items-center w-[243px] h-[38px] pl-5 pr-[11px] ${className}`}>
            <input className={` w-full h-[24px] text-[12px] outline-none`} type="search" placeholder='What are you looking for?' />
            <span className="pl-2 text-2xl cursor-pointer"><IoIosSearch /></span>
        </div>
    )
}

export default Navbar