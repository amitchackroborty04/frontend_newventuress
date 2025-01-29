import React from 'react'

function OrderHeader() {
  return (
    <div className="h-[90px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] font-normal leading-[14.4px]">
        <span className="text-gradient"> Pending Payment |</span>
        <span className="text-gradient"> Pending Payment |</span>
        <span className="text-gradient"> Completed |</span>
        <span className="text-gradient"> Canceled |</span>
        <span className="text-gradient"> Refound |</span>
        <span className="text-gradient"> Failed |</span>
        <span className="text-gradient"> Draft</span>
      </div>
    </div>
  )
}

export default OrderHeader