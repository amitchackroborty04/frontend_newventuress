
"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useState } from "react";

function SearchBer() {
  const [isSearchVisible, setIsSearchVisible] = useState(false)

  const toggleSearch = () => {
    setIsSearchVisible(!isSearchVisible)
  }
  return (
    <>
      <div className="hidden md:block">
        <form className="flex flex-1 gap-2 w-full  border-1 border-primary-green outline-0 mb-1 lg:mb-0">
          <div className="flex-1 relative h-[34px] lg:h-full">
            <div className="flex items-center h-[44px]">
              <Search className="absolute left-2.5 top-2.4 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search"
                className="pl-8 rounded-[6px]  lg:h-full border-[1px] border-[#0057A8] dark:border-[#6841A5] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 text-[15px] leading-[21px] placeholder:text-[#9C9C9C]"
              />
            </div>
            <Button className="   absolute right-0 top-0 mt-[4px] lg:mt-[0] h-[36px]  lg:h-full rounded-l-none dark:hover:opacity-90 ">
              Search
            </Button>
          </div>
        </form>
      </div>

      <div className="md:hidden">
        <div className="relative flex items-center w-[130px]">
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-0 z-10 hover:bg-primary dark:bg-pinkGradient hover:text-white"
            onClick={toggleSearch}
            aria-label="Toggle search"
          >
            <Search className="h-5 w-5 hover:text-white" />
          </Button>
          <div
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isSearchVisible ? "w-64 opacity-100" : "w-0 opacity-0"
            }`}
          >
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pr-10 border border-[#0057A8] dark:border-[#6841A5]"
              onBlur={() => {
                if (!isSearchVisible) setIsSearchVisible(false)
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchBer;
