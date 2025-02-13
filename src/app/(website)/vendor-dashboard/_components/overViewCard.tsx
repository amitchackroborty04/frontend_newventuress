
import { Card, CardContent } from "@/components/ui/card"
import React from 'react'
import Image from 'next/image'
interface MetricCardProps {
    title: string
    amount: number
    icon: string
    className?: string
  }
const OverViewCard = ({ title, amount, icon }: MetricCardProps) => {
  return (
  <div className='w-full'>
      <Card className="">
    <CardContent className="flex rounded-[12px] items-center gap-2 2xl:gap-5 p-2 2xl:p-4 ">
        
        <Image
                className="h-[80px] w-[70px] 2xl:h-[100px] 2xl:w-[100px]"
                src={icon}
                width={100}
                height={100}
                alt="Picture of the author"
              />
      
      <div className="space-y-1">
        <p className="text-[14px] 2xl:text-[16px] font-semibold text-[#444444]">{title}</p>
        <p className="text-[18px] 2xl:text-[22px] text-[#1A1A1A] font-semibold">$ {amount.toLocaleString("en-US", { minimumFractionDigits: 2 })}</p>
      </div>
    </CardContent>
  </Card>
  </div>
  )
}

export default OverViewCard;