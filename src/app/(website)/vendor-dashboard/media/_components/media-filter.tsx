"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";

const showList = [
  { id: 1, name: "All", value: "all" },
  { id: 2, name: "Live", value: "live" },
  { id: 3, name: "Expired", value: "expired" },
];

const categoriesList = [
  { id: 1, name: "Filter By Category", value: "all" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];
const typeList = [
  { id: 1, name: "All Product Types", value: "all" },
  { id: 2, name: "Sales", value: "sales" },
  { id: 3, name: "Rentals", value: "rentals" },
];


const MediaFilter = () => {
  const [show, setShow] = useState<string>("all"); // Default to "all"
  const [category, setCategory] = useState<string>("all"); // Default to "auctions"
  const [types, setTypes] = useState<string>("all"); // Default to "auctions"
  const [searchQuery, setSearchQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  // This is a mock list of suggestions. In a real application, you'd fetch these from your backend or generate them based on your data.
  const suggestions = ["Store 1", "Store 2", "Store 3", "Product A", "Product B", "Category X", "Category Y"]

  const filteredSuggestions = suggestions.filter((suggestion) =>
    suggestion.toLowerCase().includes(searchQuery.toLowerCase()),
  )



  return (
    <div className=" bg-white w-full flex justify-between items-center rounded-[12px] py-[23px] ">
      <div className="flex gap-x-[12px] pl-4 ">
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
        <div className="flex h-full items-center gap-2">
          <span className="text-[16px] font-medium leading-[19.2px] text-[#444444]">Entries</span>

          <div className="flex items-center gap-4">
            <div className="relative">
              <Popover open={showSuggestions && filteredSuggestions.length > 0} onOpenChange={setShowSuggestions}>
                <PopoverTrigger asChild>
                  <Input
                    type="search"
                    placeholder="Search..."
                    className="w-[151px] border-[1px] border-dashed border-[#919792] dark:border-[#6841A5] rounded-lg"
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value)
                      setShowSuggestions(true)
                    }}
                  />
                </PopoverTrigger>
                <PopoverContent className="w-[151px] p-0 dark:bg-white dark:border-none">
                  <ul className="max-h-[250px] overflow-auto">
                    {filteredSuggestions.map((suggestion, index) => (
                      <li
                        key={index}
                        className="px-4 py-2 hover:bg-white cursor-pointer text-[16px] font-medium leading-[19.2px] text-[#444444]"
                        onClick={() => {
                          setSearchQuery(suggestion)
                          setShowSuggestions(false)
                        }}
                      >
                        {suggestion}
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </div>
          </div>
        </div>
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
        <div className="h-full flex items-center">
          <PacificDropdownSelector
            list={typeList}
            selectedValue={types}
            onValueChange={setTypes}
          />
        </div>
      </div>
      <div className="pr-4">

      <Button className="w-[135px] h-[43px] px-[24px] py-[12px] text-[16px] font-medium leading-[19.2px] ">Bulk Delete</Button>
      </div>
    </div>
  );
};

export default MediaFilter;

// Generic Dropdown Component
