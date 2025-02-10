"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { useEffect, useState } from "react"
import DateRangePicker from "./DateRangePicker"
export default function ReviewFilter() {
  const [date, setDate] = useState<DateRange | undefined>()
  useEffect(() => {
    if (date) {
      console.log("Date Range Changed:", {
        from: date.from ? format(date.from, "yyyy-MM-dd") : undefined,
        to: date.to ? format(date.to, "yyyy-MM-dd") : undefined,
      })
    }
  }, [date])

  const formatDateRange = (range: DateRange | undefined) => {
    if (range?.from) {
      if (range.to) {
        return `${format(range.from, "LLL dd, y")} - ${format(range.to, "LLL dd, y")}`
      }
      return format(range.from, "LLL dd, y")
    }
    return "Pick a date range"
  }
  return (
    <div className="h-[68px] w-full bg-white p-[8px] px-4 rounded-[12px]  flex items-center justify-between mb-[30px]">
      <div className="flex items-center gap-4 w-[484px]">
        <span className="text-[16px] font-medium text-[#444444]">Show</span>
        <Select defaultValue="all">
          <SelectTrigger className="h-9 w-24 bg-primary dark:bg-pinkGradient border-none text-white hover:bg-[#1e2875]/90">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent className="bg-white border-none">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      <Select>
        <SelectTrigger className="h-9 w-[140px] bg-primary dark:bg-pinkGradient border-none text-white hover:bg-[#1e2875]/90">
          <SelectValue placeholder="Filter by status" />
         
        </SelectTrigger>
        <SelectContent className="bg-white border-none">
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

        <div className="h-full flex items-center gap-2">
                <DateRangePicker
                  date={date}
                  onDateChange={(newDate) => {
                    setDate(newDate)
                    console.log("Date Range Selected:", {
                      from: newDate?.from ? format(newDate.from, "yyyy-MM-dd") : undefined,
                      to: newDate?.to ? format(newDate.to, "yyyy-MM-dd") : undefined,
                    })
                  }}
                  trigger={
                    <button className="h-[34px] px-[10px] rounded-[8px] text-nowrap text-base bg-primary dark:bg-pinkGradient border-none flex items-center justify-center gap-2   text-white hover:bg-[#1e2875]/90 ">
                      {formatDateRange(date)}
                      <ChevronDown size={18} />
                    </button>
                  }
                />
              </div>
      </div>


  <div className=" flex ">
  
  </div>

      <div className="ml-auto">
        <Button variant="destructive" className="py-3 px-6 bg-primary dark:bg-pinkGradient border-none text-white hover:bg-[#1e2875]/90">
          Bulk Delete
        </Button>
      </div>
    </div>
  )
}

