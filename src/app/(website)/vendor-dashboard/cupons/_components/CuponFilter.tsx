"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function CuponFilter() {
  return (
    <div className="flex items-center bg-white mb-[30px] gap-4 p-4 w-full rounded-[12px]">
      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Show</span>
        <Select defaultValue="all">
          <SelectTrigger className="w-[100px] bg-primary text-white border-0 [&>svg]:text-white">
            <SelectValue placeholder="Select" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-sm font-medium">Entries</span>
        <Select>
          <SelectTrigger className="w-[140px] bg-primary text-white border-0  [&>svg]:text-white">
            <SelectValue placeholder="Chose stores" />
           
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="store1">Store 1</SelectItem>
            <SelectItem value="store2">Store 2</SelectItem>
            <SelectItem value="store3">Store 3</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Select>
        <SelectTrigger className="w-[180px] bg-primary text-white border-0  [&>svg]:text-white">
          <SelectValue placeholder="Chose Date Range" />
     
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="today">Today</SelectItem>
          <SelectItem value="yesterday">Yesterday</SelectItem>
          <SelectItem value="last7days">Last 7 Days</SelectItem>
          <SelectItem value="last30days">Last 30 Days</SelectItem>
          <SelectItem value="custom">Custom Range</SelectItem>
        </SelectContent>
      </Select>

      <div className="ml-auto">
        <Button variant="default" className="bg-primary text-white ">
          Bulk Delete
        </Button>
      </div>
    </div>
  )
}

