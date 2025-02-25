"use client";
import { Button } from "@/components/ui/button";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useState } from "react";

// Demo lists for the dropdowns
const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const StoreLists = [
  { id: 1, name: "Chose stores", value: "all" },
  { id: 2, name: "CBD", value: "cbd" },
  { id: 3, name: "Recreational", value: "recreational" },
];
const FilterByCtegoryList = [
  { id: 1, name: "Filter By Ctegory", value: "all" },
  { id: 2, name: "CBD", value: "cbd" },
  { id: 3, name: "Recreational", value: "recreational" },
];
const AllProductTypesList = [
  { id: 1, name: "All Product Types", value: "all" },
  { id: 2, name: "CBD", value: "cbd" },
  { id: 3, name: "Recreational", value: "recreational" },
];

const AuctionsFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [productsType, setProductType] = useState("all");

  return (
    <div className=" p-[17px] bg-white w-full flex items-center justify-between rounded-[12px] py-[23px]">
      <div className="flex items-center h-full  gap-x-[12px] pl-4">
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
        {/* Dropdown for "product type" */}
        <div className="h-full flex items-center">
          <PacificDropdownSelector
            list={StoreLists}
            selectedValue={productsType}
            onValueChange={setProductType}
            placeholderText="All Product Types"
          />
        </div>
        <div className="h-full flex items-center">
          <PacificDropdownSelector
            list={FilterByCtegoryList}
            selectedValue={productsType}
            onValueChange={setProductType}
            placeholderText="All Product Types"
          />
        </div>
        <div className="h-full flex items-center">
          <PacificDropdownSelector
            list={AllProductTypesList}
            selectedValue={productsType}
            onValueChange={setProductType}
            placeholderText="All Product Types"
          />
        </div>
      </div>
      <Button className="">
        Bulk Delete
      </Button>
    </div>
  );
};

export default AuctionsFilter;

// Generic Dropdown Component
