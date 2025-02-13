import * as React from "react"
import { addMonths, format } from "date-fns"
import type { DateRange } from "react-day-picker"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"

interface DateRangePickerProps extends React.HTMLAttributes<HTMLDivElement> {
  date?: DateRange | undefined
  onDateChange?: (date: DateRange | undefined) => void
  trigger: React.ReactNode
}

export default function DateRangePicker({
  className,
  date,
  onDateChange,
  trigger,
}: DateRangePickerProps) {
  const [leftMonth, setLeftMonth] = React.useState<Date>(new Date())
  const [rightMonth, setRightMonth] = React.useState<Date>(addMonths(new Date(), 1))
  const [open, setOpen] = React.useState(false) // Track modal state

  const handleDateSelect = (newDate: DateRange | undefined) => {
    console.log("Selected Date Range:", {
      from: newDate?.from ? format(newDate.from, "yyyy-MM-dd") : undefined,
      to: newDate?.to ? format(newDate.to, "yyyy-MM-dd") : undefined,
    })
    onDateChange?.(newDate)
  }

  return (
    <div className={cn("grid gap-2", className)}>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild onClick={() => setOpen(true)}>{trigger}</PopoverTrigger>
        <PopoverContent className="w-[666px] bg-[#E6EEF6] p-[12px] dark:border-none" align="start">
          <div className="flex items-center justify-between text-[#444444] mb-3">
            <h4 className="text-sm font-normal">Please Select A Date Range</h4>
            <Button
              variant="ghost"
              size="sm"
              className="h-auto px-4 py-1 text-gradient hover:bg-white/20 border border-[#20357aa1] dark:border-[#6841A5] dark:text-gradient-pink dark:hover:text-gradient-pink"
              onClick={() => setOpen(false)} // Close modal when clicking Close
            >
              Close
            </Button>
          </div>
          <div className="flex justify-between">
            {/* Left Calendar */}
            <div className="relative w-[314px] border rounded-lg shadow-sm border-[#B0B0B0] dark:bg-white dark:!text-[#6841A5]">
              <div className=" ">
                <div className="bg-primary text-center opacity-80 dark:bg-pinkGradient rounded-t-lg p-2 text-white">CALENDER</div>
                <div className="font-medium bg-primary dark:bg-pinkGradient p-2">
                  <p className="text-[12px] text-white/70">{date?.to ? format(date.to, "yyyy") : "2025"}</p>
                  <p className="text-[14px] text-white">{date?.to ? format(date.to, "EEE, MMM d") : "Select End Date"}</p>
                  </div>
              </div>
              <Calendar
                mode="range"
                selected={date}
                onSelect={handleDateSelect}
                month={leftMonth}
                onMonthChange={setLeftMonth}
                className="p-3"
                showOutsideDays={false}
              />
            </div>

            {/* Right Calendar */}
            <div className="relative w-[314px] border rounded-lg shadow-sm border-[#B0B0B0] dark:bg-white dark:!text-[#6841A5]">
              <div className=" ">
                <div className="bg-primary text-center opacity-80 dark:bg-pinkGradient rounded-t-lg p-2 text-white">CALENDER</div>
                <div className="font-medium bg-primary dark:bg-pinkGradient p-2">
                  <p className="text-[12px] text-white/70">{date?.to ? format(date.to, "yyyy") : "2025"}</p>
                  <p className="text-[14px] text-white">{date?.to ? format(date.to, "EEE, MMM d") : "Select End Date"}</p>
                  </div>
              </div>
              <Calendar
                mode="range"
                selected={date}
                onSelect={handleDateSelect}
                month={rightMonth}
                onMonthChange={setRightMonth}
                className="p-3"
                showOutsideDays={false}
              />
            </div>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
