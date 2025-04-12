import React from 'react'
import { NavLink } from 'react-router'
import Vector from '../assets/images/send.png'
import Image1 from '../assets/images/Code.png'
import GooglePlay from '../assets/images/GooglePlay.png'
import AppStore from '../assets/images/AppStore.png'
import Facebook from '../assets/images/Facebook.png'
import Twitter from '../assets/images/Twitter.png'
import Instagram from '../assets/images/instagram.png'
import Linkedin from '../assets/images/Linkedin.png'
import copyright from '../assets/images/copyright.png'

function Footer() {
  return (
    <div className='pt-10 lg:pt-[140px]'>
      <footer className='bg-black pt-10 lg:pt-[80px] '>
        <div className='container grid grid-cols-1 text-center lg:gap-0 lg:text-start md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-8 text-[#FAFAFA]'>
          <div>
            <h3 className='lg:text-[24px] text-[18px] font-[700] pb-6'>Exclusive</h3>
            <h4 className='lg:text-[20px] text-[18px] font-[500] pb-6 cursor-pointer'>Subscribe</h4>

            <p className='pb-4'>Get 10% off your first order</p>
            <span className='relative'>
              <input className='cursor-pointer border py-3 px-4 rounded-[4px] outline-none' type="email" placeholder='Enter your email' />
              <img className="cursor-pointer absolute top-0 right-4" src={Vector} alt="icon" />
            </span>

          </div>
          <div>
            <h3 className='text-[20px] font-[500] pb-6'>Support</h3>
            <ul className='flex flex-col gap-4 text-[14px] lg:text-[16px]'>
              <li>111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.</li>
              <li>exclusive@gmail.com</li>
              <li>+88015-88888-9999</li>
            </ul>
          </div>
          <div>
            <h3 className='text-[20px] font-[500] pb-6'>Account</h3>
            <ul className='flex flex-col gap-4 text-[14px] lg:text-[16px]'>
              <NavLink>My Account</NavLink>
              <NavLink to='/signup'>Login / Register</NavLink>
              <NavLink to="/cart">Cart</NavLink>
              <NavLink>Wishlist</NavLink>
              <NavLink to='/shop'>Shop</NavLink>
            </ul>
          </div>
          <div>
            <h3 className='text-[20px] font-[500] pb-6'>Quick Link</h3>
            <ul className='flex flex-col gap-4 text-[14px] lg:text-[16px]'>
              <NavLink>Privacy Policy</NavLink>
              <NavLink>Terms Of Use</NavLink>
              <NavLink>FAQ</NavLink>
              <NavLink>Contact</NavLink>
            </ul>
          </div>
          <div >
            <h3 className='text-[20px] font-[500] pb-6'>Download App</h3>
            <ul className='flex flex-col gap-4 text-[14px] lg:text-[16px]'>
              <li className='text-[rgba(250,250,250,0.5)]'>Save $3 with App New User Only</li>
              <li>
                <span className='flex justify-center lg:justify-start gap-2'>
                  <img src={Image1} alt="image" />
                  <span className='flex flex-col gap-1'>
                    <NavLink>
                      <img src={GooglePlay} alt="image" />
                    </NavLink>
                    <NavLink>
                      <img src={AppStore} alt="image" />
                    </NavLink>
                  </span>
                </span>
              </li>
              <li className='flex items-center gap-6 justify-center lg:justify-start'>
                <NavLink >
                  <img src={Facebook} alt="facebook" />
                </NavLink>
                <NavLink >
                  <img src={Twitter} alt="twitter" />
                </NavLink>
                <NavLink >
                  <img src={Instagram} alt="instagram" />
                </NavLink>
                <NavLink >
                  <img src={Linkedin} alt="linkedin" />
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <p className='text-[#ffffff82] flex items-center gap-[6px] text-[14px] lg:text-[16px] justify-center pt-[60px] pb-6'>
            <img src={copyright} alt="icon" /> Copyright Rimel 2022. All right reserved</p>
        </div>
      </footer>
    </div>

  )
}

export default Footer