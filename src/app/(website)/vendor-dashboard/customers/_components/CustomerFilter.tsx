"use client";

import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useEffect, useState } from "react";
import { ChevronDown } from "lucide-react"
import { format } from "date-fns"
import type { DateRange } from "react-day-picker"
import DateRangePicker from "./DateRangePicker";
// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const ChoseStoresList = [
  { id: 1, name: "Chose stores", value: "Chose stores" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];


function CustomerFilter() {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [stores, setStores] = useState<string>("Chose stores"); // Default to "auctions"

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
    <div className="my-[30px] flex h-[60px] w-full items-center justify-between rounded-[12px] bg-white p-[8px]">
      {/* Dropdown for "Show" */}
      <div className="flex gap-x-[28px]">
        <div className="flex h-full w-fit items-center gap-x-[9px]">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Show
          </span>
          <PacificDropdownSelector
            list={showList}
            selectedValue={show}
            onValueChange={setShow}
          />
        </div>
        {/* Dropdown for "Categories" */}
        <div className="flex h-full items-center gap-2">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">
            Entries
          </span>
          <PacificDropdownSelector
            list={ChoseStoresList}
            selectedValue={stores}
            onValueChange={setStores}
          />
        </div>
        <div className="flex h-full items-center gap-2">
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
      </div>
      <div>
        <button className="rounded-lg bg-primary dark:bg-pinkGradient dark:bg px-[20px] py-[9px] text-[#F5F5F5]">
          Bulk Delete
        </button>
      </div>
    </div>
  );
}

export default CustomerFilter;
