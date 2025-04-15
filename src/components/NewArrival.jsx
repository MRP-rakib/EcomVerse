import React from 'react'
import Ps5 from "../assets/images/console.png"
import Cap from "../assets/images/cap.png"
import frame from "../assets/images/Frame707.png"
import perfume from "../assets/images/perfume.png"
import ProductSection from './ProductSection'
function NewArrival() {
    return (
        <div className='pt-12 lg:pt-[168px] '>
            <ProductSection sectionName="New Arrival" sectionType='Featured' />
            <div className='pt-7.5 lg:pt-15 grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-7.5 '>
                <NewArrivalProduct1 productName="PlayStation 5" caption="Black and White version of the PS5 coming out on sale." img={Ps5} className={"pt-[90px] justify-center "} />
                <div className='grid grid-cols-1 gap-4 lg:gap-7.5'>
                    <div>
                        <NewArrivalProduct1 productName="Women’s Collections" caption="Featured woman collections that give you another vibe." img={Cap} className={"justify-end"} />
                    </div>
                    <div className='grid grid-cols-2 gap-4 lg:gap-7.5 '>
                        <NewArrivalProduct1 productName="Speakers" caption="Amazon wireless speakers" img={frame} className={"justify-center py-8"} />
                        <NewArrivalProduct1 productName="Perfume" caption="GUCCI INTENSE OUD EDP" img={perfume} className={"justify-center py-8"} />
                    </div>
                </div>
            </div>
        </div>

    )
}
function NewArrivalProduct1({ img, className, productName, caption }) {
    return (
        <div className='bg-black relative cursor-pointer'>
            <div className={`flex items-end ${className}`}>
                <img src={img} alt="cap" />
            </div>
            <div className='text-white absolute left-4 lg:left-8 bottom-4 lg:bottom-8 max-w-[242px]'>
                <h3 className='text-[14px] lg:text-[24px] font-semibold'>{productName}</h3>
                <p className='text-[12px] lg:text-[14px] py-2 lg:py-4'>{caption}</p>
                <span className='underline underline-offset-4 text-[14px] lg:text-[16px] font-medium'>Shop Now</span>
            </div>
        </div>
    )
}

export default NewArrival