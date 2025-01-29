"use client";
import { Button } from "@/components/ui/button";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

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

const storeList = [
  { id: 1, name: "Chose Date Range", value: "all" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];

const NotificationFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [category, setCategory] = useState<string>("all"); // Default to "auctions"
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
            list={storeList}
            selectedValue={stores}
            onValueChange={setStores}
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
