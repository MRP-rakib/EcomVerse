import React from 'react'
import Jbl from '../assets/images/JBL.png'
import Button from './button/Button'
function MusicSection() {
    return (
        <div className='pt-10 lg:pt-[140px] '>
            <div className='bg-black'>
                <div className='py-4 px-3 lg:py-[70px] lg:px-[56px] w-full items-center  grid grid-cols-2'>
                    <div className='text-white capitalize flex flex-col gap-4 lg:gap-10 '>
                        <div className='flex flex-col gap-2 lg:gap-8'>
                            <p className='text-[12px] lg:text-[16px] font-semibold text-[#00FF66]'>category</p>
                            <h2 className='text-[16px] md:text-[18px] lg:text-[48px] lg:leading-[60px] font-semibold md:flex flex-col'>Enhance Your <span>Music Experience</span></h2>
                            <Counter2 />
                        </div>
                        <div>
                            <span>
                                <Button className='bg-[#00FF66]' btnName='Buy Now!' />
                            </span>
                        </div>
                    </div>
                    <div>
                        <img className='z-10 relative' src={Jbl} alt="jbl" />
                    </div>
                </div>
            </div>


        </div>
    )
}
function Counter2() {
    return (
        <div className="flex items-center space-x-1 lg:space-x-6 text-center font-semibold text-black capitalize">
            <div className="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 lg:w-[62px] lg:h-[62px]">
                <span className="text-[8px] lg:text-[16px] font-semibold leading-2 lg:leading-[18px]">03</span>
                <span className="text-[8px] lg:text-[11px]">hours</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 lg:w-[62px] lg:h-[62px]">
                <span className="text-[8px] lg:text-[16px] font-semibold leading-2 lg:leading-[18px]">23</span>
                <span className="text-[8px] lg:text-[11px]">days</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 lg:w-[62px] lg:h-[62px]">
                <span className="text-[8px] lg:text-[16px] font-semibold leading-2 lg:leading-[18px]">23</span>
                <span className="text-[8px] lg:text-[11px]">Minutes</span>
            </div>
            <div className="flex flex-col justify-center items-center bg-white rounded-full w-8 h-8 lg:w-[62px] lg:h-[62px]">
                <span className="text-[8px] lg:text-[16px] font-semibold leading-2 lg:leading-[18px]">23</span>
                <span className="text-[8px] lg:text-[11px]">Seconds</span>
            </div>

        </div>
    )
}

export default MusicSection