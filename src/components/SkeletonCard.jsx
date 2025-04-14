import React from 'react'

function SkeletonCard() {
  return (
    <div className=" animate-pulse p-2 rounded-lg shadow-sm bg-gray-100">
    <p className="h-75 bg-gray-200 rounded flex items-center justify-center text-[20px] font-bold">Loading...</p>
   </div>
  )
}

export default SkeletonCard