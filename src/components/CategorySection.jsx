import React from 'react'
import ProductSection from './ProductSection'
import ArrowBtn from './button/ArrowBtn'
import { IoPhonePortraitOutline } from "react-icons/io5";
import { RiComputerLine } from "react-icons/ri";
import { BsSmartwatch } from "react-icons/bs";
import { CiCamera } from "react-icons/ci";
import { CiHeadphones } from "react-icons/ci";
import { IoGameControllerOutline } from "react-icons/io5";

function CategorySection() {
    const categories =[
        {logo:<IoPhonePortraitOutline />,name:"phone"},
        {logo:<RiComputerLine />,name:"computer"},
        {logo:<BsSmartwatch />,name:"smartwatch"},
        {logo:<CiCamera />,name:"camera"},
        {logo:<CiHeadphones />,name:"headphones"},
        {logo:<IoGameControllerOutline />,name:"gaming"},

    ]
    return (

        <div className='border-y-1 border-[rgba(0,0,0,0.3)] py-10 lg:py-[80px]'>
            <div className='flex items-end justify-between'>
                <ProductSection sectionType="Categories" sectionName="Browse By Category" />
                <ArrowBtn />
            </div>
            <div className='pt-[30px] lg:pt-[60px] grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 lg:gap-7.5'>
                {categories?.map((cat,index)=>(<span key={index}> <Categories logo={cat.logo} name={cat.name}/></span>))}
            
            </div>
        </div>
    )
}
function Categories({logo,name}){
    return(
        <div className='border group hover:bg-[#DB4444] border-[rgba(0,0,0,0.3)] rounded-[4px] flex flex-col gap-4 py-6 justify-center items-center cursor-pointer'>
            <span className='text-[25px] lg:text-[50px] group-hover:text-[#FAFAFA]'>
            {logo}
            </span>
            <p className='text-[14px] lg:text-[16px] capitalize group-hover:text-[#FAFAFA]'>{name}</p>
        </div>
    )
}

export default CategorySection