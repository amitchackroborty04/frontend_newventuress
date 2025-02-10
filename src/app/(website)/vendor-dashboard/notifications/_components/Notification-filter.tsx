"use client";
import { Button } from "@/components/ui/button";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import DateRangePicker from "./DateRangePicker";
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const categoriesList = [
  { id: 1, name: "Chose by view", value: "all" },
  { id: 3, name: "Read", value: "read" },
  { id: 4, name: "Unread", value: "unread" },
];



const NotificationFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [category, setCategory] = useState<string>("all"); // Default to "auctions"
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
    <div className="h-[60px] p-[8px] bg-white w-full flex justify-between items-center rounded-[12px] px-4">
      <div className="flex gap-x-[12px]">
        {/* Dropdown for "Show" */}
        <div className="h-full flex items-center gap-x-[9px] w-fit">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Show
          </span>
          <PacificDropdownSelector
            list={showList}
            selectedValue={show}
            onValueChange={setShow}
          />
        </div>
        {/* Dropdown for "Entries" */}
        <div className="h-full flex items-center gap-x-[9px] w-fit">
        
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
                <ChevronDown size={18} />
              </button>
            }
          />
        </div>
        {/* Dropdown for "Categories" */}
        <div className="h-full flex items-center">
          <PacificDropdownSelector
            list={categoriesList}
            selectedValue={category}
            onValueChange={setCategory}
          />
        </div>
        {/* Dropdown for "Types" */}
      
      </div>
      <Button className="w-[135px] h-[43px] px-[24px] py-[12px] text-[16px] font-medium leading-[19.2px]">Bulk Delete</Button>
    </div>
  );
};

export default NotificationFilter;

// Generic Dropdown Component
