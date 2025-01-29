"use client"

import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"


export default function ReportsFilter() {
  return (
    <div className="flex items-center bg-white mb-[30px] gap-4 p-4">
      <div className="flex items-center gap-2">
        <span className="text-[16px] font-medium">Show</span>
        <Select defaultValue="all">
          <SelectTrigger className="w-[100px] bg-primary text-white ">
            <SelectValue placeholder="All" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All</SelectItem>
            <SelectItem value="active">Active</SelectItem>
            <SelectItem value="inactive">Inactive</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="flex items-center gap-2">
        <span className="text-[16px] font-medium">Entries</span>
        <Select defaultValue="stores">
          <SelectTrigger className="w-[140px] bg-primary text-white 0">
            <SelectValue placeholder="Chose stores" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="stores">Chose stores</SelectItem>
            <SelectItem value="store1">Store 1</SelectItem>
            <SelectItem value="store2">Store 2</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <Select>
        <SelectTrigger className="w-[165px] bg-primary text-white ">
          <SelectValue placeholder="Filter By category" />
         
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="category1">Category 1</SelectItem>
          <SelectItem value="category2">Category 2</SelectItem>
          <SelectItem value="category3">Category 3</SelectItem>
        </SelectContent>
      </Select>

      <Select>
        <SelectTrigger className="w-[160px] bg-primary text-white ">
          <SelectValue placeholder="All Product Types" />
   
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="type1">Type 1</SelectItem>
          <SelectItem value="type2">Type 2</SelectItem>
          <SelectItem value="type3">Type 3</SelectItem>
        </SelectContent>
      </Select>

      <div className="ml-auto">
        <Button variant="destructive" className="bg-primary text-white ">
          Bulk Delete
        </Button>
      </div>
    </div>
  )
}

