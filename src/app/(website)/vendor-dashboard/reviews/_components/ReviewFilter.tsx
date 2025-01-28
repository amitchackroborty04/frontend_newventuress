"use client"

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { ChevronDown } from "lucide-react"

export default function ReviewFilter() {
  return (
    <div className="h-[90px] w-full bg-white p-[8px] px-[10px] rounded-[12px] flex items-center justify-between mb-[30px]">
      <div className="flex items-center gap-4 w-[484px]">
        <span className="text-[16px] font-medium">Show</span>
        <Select defaultValue="all">
          <SelectTrigger className="h-9 w-24 bg-primary text-white hover:bg-[#1e2875]/90">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      <Select>
        <SelectTrigger className="h-9 w-[140px] bg-primary text-white hover:bg-[#1e2875]/90">
          <SelectValue placeholder="Filter by status" />
          <ChevronDown className="h-4 w-4" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="pending">Pending</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
          <SelectItem value="cancelled">Cancelled</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="h-9 w-[160px] bg-primary text-white hover:bg-[#1e2875]/90">
          <SelectValue placeholder="Choose Date Range" />
          <ChevronDown className="h-4 w-4" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="week">This Week</SelectItem>
          <SelectItem value="month">This Month</SelectItem>
          <SelectItem value="year">This Year</SelectItem>
        </SelectContent>
      </Select>
      </div>


  <div className=" flex ">
  
  </div>

      <div className="ml-auto">
        <Button variant="destructive" className="h-9 bg-primary text-white hover:bg-[#1e2875]/90">
          Bulk Delete
        </Button>
      </div>
    </div>
  )
}

