import React, { useState } from 'react'
import { Link, NavLink } from 'react-router'

function NavMenu() {
    
  return (
    <div className='hidden lg:block'>
        <ul className='flex items-center gap-12 text-[16px] capitalize'>
            <NavLink to='/' className={({isActive})=>isActive?"underline underline-offset-4":null}>home</NavLink>
            <NavLink to='/contact' className={({isActive})=>isActive?"underline underline-offset-4":null}>contact</NavLink>
            <NavLink to='/about' className={({isActive})=>isActive?"underline underline-offset-4":null}>about</NavLink>
            <NavLink to='/signup' className={({isActive})=>isActive?"underline underline-offset-4":null}>sign up</NavLink>
        </ul>
    </div>
  )
}

export default NavMenu