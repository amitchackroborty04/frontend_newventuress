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


const chooseByViewList = [
    { id: 1, name: "Chose by view", value: "Chose by view" },
    { id: 2, name: "Live", value: "live" },
    { id: 3, name: "Expired", value: "expired" },
]


function MessageFilter() {
    const [show, setShow] = useState<string>("all");
    const [chooseByView, setChooseByView] = useState<string>("Chose by view");
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
        <div className="h-[60px] p-[8px] bg-white w-full flex items-center justify-between rounded-[12px] px-4 mb-[30px]">
            {/* Dropdown for "Show" */}
            <div className="flex gap-x-[28px]">

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

                <div>
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
                            <button className="h-[34px] px-[10px] rounded-[8px] text-nowrap text-base bg-primary dark:bg-pinkGradient border-none flex items-center justify-center gap-2   text-white hover:bg-[#1e2875]/90">
                                {formatDateRange(date)}
                                <ChevronDown size={18} />
                            </button>
                        }
                    />
                </div>
                <div>
                    <PacificDropdownSelector
                        list={chooseByViewList}
                        selectedValue={chooseByView}
                        onValueChange={setChooseByView}
                    />
                </div>

            </div>
            <div>
                <button className="px-[20px] py-[9px] bg-primary dark:bg-pinkGradient border-none text-[#F5F5F5] rounded-lg">Bulk Delete</button>
            </div>
        </div>
    )
}

export default MessageFilter