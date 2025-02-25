import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { SearchBarProps } from "@/types/vendor";
import { Search } from "lucide-react";

export function SearchBar({ onSearch, totalResults }: SearchBarProps) {
  return (
    <div className="md:flex items-center justify-between w-full mx-auto py-2 my-8 vendor-search">
      <div className="my-2 dark:text-black">
        We now have <span className="text-gradient dark:text-gradient-pink"> {totalResults} </span>
        vendors.
      </div>

      <div className="relative w-80">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500" />
        <Input
          type="search"
          placeholder="Search"
          className="w-full pl-10 pr-24 py-2 bg-white/10 border border-[#0057A8] dark:border dark:border-[#6841A5] rounded-lg text-sm focus:ring-2 focus:ring-[#004E97] focus:border-transparent"
          onChange={(e) => onSearch(e.target.value)}
        />
        <Button className="absolute right-0 top-0 h-full px-4 bg-primary rounded-l-none  hover:bg-primary-hover text-white text-sm font-medium ">
          Search
        </Button>
      </div>
    </div>
  );
}
