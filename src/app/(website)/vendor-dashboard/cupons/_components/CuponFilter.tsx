"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ChevronDown } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import { useEffect, useState } from "react"
import DateRangePicker from "./DateRangePicker"

export default function CuponFilter() {
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
    <div className="flex items-center bg-white mb-[30px] gap-4 p-4 w-full rounded-[12px]">
      <div className="flex items-center gap-2">
        <span className="text-base font-medium dark:text-[#444444]">Show</span>
        <Select defaultValue="all">
          <SelectTrigger className="w-[66px] bg-primary dark:bg-pinkGradient text-white border-0 [&>svg]:text-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent className="dark:bg-white dark:border-none">
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-base font-medium dark:text-[#444444]">Entries</span>
        <Select>
          <SelectTrigger className="w-[140px] bg-primary dark:bg-pinkGradient text-white border-0  [&>svg]:text-white">
            <SelectValue placeholder="Chose stores" />
           
          </SelectTrigger>
          <SelectContent className="dark:bg-white dark:border-none">
            <SelectItem value="store1">Store 1</SelectItem>
            <SelectItem value="store2">Store 2</SelectItem>
            <SelectItem value="store3">Store 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

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
              <button className="h-[34px] px-[10px] rounded-[8px] text-nowrap text-base bg-primary dark:bg-pinkGradient flex items-center justify-center gap-2   text-white hover:bg-[#1e2875]/90">
                {formatDateRange(date)}
                <ChevronDown  size={18}/>
              </button>
            }
          />
        </div>

      <div className="ml-auto">
        <Button variant="default" className="bg-primary text-white ">
          Bulk Delete
        </Button>
      </div>
    </div>
  )
}

