"use client";

import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
    { id: 1, name: "All", value: "all" },
    { id: 2, name: "Live", value: "live" },
    { id: 3, name: "Expired", value: "expired" },
];

const chooseDateRangeList = [
    { id: 1, name: "Chose Date Range", value: "Chose Date Range" },
    { id: 2, name: "Live", value: "live" },
    { id: 3, name: "Expired", value: "expired" },
]
const chooseByViewList = [
    { id: 1, name: "Chose by view", value: "Chose by view" },
    { id: 2, name: "Live", value: "live" },
    { id: 3, name: "Expired", value: "expired" },
]


function MessageFilter() {
    const [show, setShow] = useState<string>("all");
    const [showDateRange, setShowDateRange] = useState<string>("Chose Date Range");
    const [chooseByView, setChooseByView] = useState<string>("Chose by view");
    return (
        <div className="h-[60px] p-[8px] bg-white w-full flex items-center justify-between rounded-[12px] mb-[30px]">
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
                    <PacificDropdownSelector
                        list={chooseDateRangeList}
                        selectedValue={showDateRange}
                        onValueChange={setShowDateRange}
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
                <button className="px-[20px] py-[9px] bg-primary text-[#F5F5F5] rounded-lg">Bulk Delete</button>
            </div>
        </div>
    )
}

export default MessageFilter