import React from 'react'

function Button({btnName,className="bg-[#DB4444]",onClick}) {
  return (
    <div>
        <button onClick={onClick} className={`text-[12px] lg:text-[16px] text-[#FAFAFA] ${className} font-medium  py-2 px-4 lg:py-4 lg:px-12 rounded-[4px] cursor-pointer capitalize`}>{btnName}</button>
    </div>
  )
}

export default Button