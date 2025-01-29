"use client";
import { Button } from "@/components/ui/button";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];



const membershipdataList = [
  { id: 1, name: "Chose Date Range", value: "all" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];

const MembershipFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  // Default to "auctions"
  const [stores, setStores] = useState<string>("all"); // Default to "auctions"



  return (
    <div className="h-[60px] p-[8px] bg-white w-full flex justify-between items-center">
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
         
          <PacificDropdownSelector
            list={membershipdataList}
            selectedValue={stores}
            onValueChange={setStores}
          />
        </div>
      
       
      </div>
      <Button className="w-[135px] h-[43px] px-[24px] py-[12px] text-[16px] font-medium leading-[19.2px]">Bulk Delete</Button>
    </div>
  );
};

export default MembershipFilter;

// Generic Dropdown Component
