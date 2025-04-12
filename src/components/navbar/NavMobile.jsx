import React from 'react'
import { NavLink } from 'react-router'
import { IoMdHome } from "react-icons/io";
import { GrContactInfo } from "react-icons/gr";
import { CiLogin } from "react-icons/ci";

function NavMobile() {
  return (
    <div>
        <ul className='fixed z-10 lg:hidden bottom-0 px-4 flex w-full justify-between items-center text-2xl capitalize bg-black py-3 text-white font-bold'>
            <NavLink to='/' className={({isActive})=>isActive?"text-[#DB4444]":null}><IoMdHome /></NavLink>
            <NavLink to='/contact' className={({isActive})=>isActive?"text-[#DB4444]":null}><GrContactInfo /></NavLink>
            <NavLink to='/about' className={({isActive})=>isActive?"text-[#DB4444] text-[16px]":'text-[16px]'}>about</NavLink>
            <NavLink to='/signup' className={({isActive})=>isActive?"text-[#DB4444]":null}><CiLogin /></NavLink>
        </ul>
    </div>
  )
}

export default NavMobile