import React from 'react'

function OrderHeader() {
  return (
    <div className="h-[90px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] font-normal leading-[14.4px]">
        <span className="text-gradient dark:bg-pinkGradient"> Pending Payment |</span>
        <span className="text-gradient dark:bg-pinkGradient"> Pending Payment |</span>
        <span className="text-gradient dark:bg-pinkGradient"> Completed |</span>
        <span className="text-gradient dark:bg-pinkGradient"> Canceled |</span>
        <span className="text-gradient dark:bg-pinkGradient"> Refound |</span>
        <span className="text-gradient dark:bg-pinkGradient"> Failed |</span>
        <span className="text-gradient dark:bg-pinkGradient"> Draft</span>
      </div> 
    </div>
  )
}

export default OrderHeader