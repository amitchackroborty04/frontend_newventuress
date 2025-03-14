import React from 'react'

function RefundHeader() {
  return (
    <div className="h-[90px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] font-normal leading-[14.4px]">
        <span className="text-gradient dark:text-gradient-pink"> Pending Payment |</span>
        <span className="text-gradient dark:text-gradient-pink"> Pending Payment |</span>
        <span className="text-gradient dark:text-gradient-pink"> Completed |</span>
        <span className="text-gradient dark:text-gradient-pink"> Canceled |</span>
        <span className="text-gradient dark:text-gradient-pink"> Refound |</span>
        <span className="text-gradient dark:text-gradient-pink"> Failed |</span>
        <span className="text-gradient dark:text-gradient-pink"> Draft</span>
      </div>
    </div>
  )
}

export default RefundHeader