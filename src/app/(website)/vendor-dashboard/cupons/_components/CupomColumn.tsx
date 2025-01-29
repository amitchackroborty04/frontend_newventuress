"use client";

// import { Button } from "@/components/ui/button";
// import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
// import {  MoreHorizontal } from "lucide-react";
import Toggle from "./Toggle";
import AuctionsButton from "./AuctionsButton";
import { CuponTableItemsType } from "@/data/cuponData";
import { ColumnDef } from "@tanstack/react-table";





export const CupomColumn: ColumnDef<CuponTableItemsType>[] = [

 
  {
    header: "Code",
    cell: ({ row }) => {
      return (
        <div className=" " >
          <span className="text-[16px]   text-gradient font-mediuml ">{row.original.code}</span>
        </div>
      );
    },
  },
  {
    header: "Type",
    cell: ({ row }) => {
      return (
        <div className=" w-[149px]">
          <span className="text-[12px]  text-white bg-primary p-[10px] rounded-[12px] font-normal">{row.original.type}</span>
        </div>
      );
    },
  },
  {
    header: "Amount",
    cell: ({ row }) => {
      return (
        <div className=" w-[50px]">
          <span className="text-[16px] text-[#444444] font-mediuml">{row.original.amount}</span>
        </div>
      );
    },
  },
  {
    header: "Store",
    cell: ({ row }) => {
      return (
        <div className="">
          <span className="text-[16px] text-[#444444] font-mediuml">{row.original.store}</span>
        </div>
      );
    },
  },
  {
    header: "Usage Limits", 
    cell: ({ row }) => {
      return (
        <div className=" w-[90px]">
          <span className="text-[16px] text-[#444444] font-mediuml">Limit-{row.original.limit}</span>
          
        </div>
      );
    },
  },
  {
    header: "Permission", 
    cell: () => {
      return (
        <div className=" w-[90px]">

          <Toggle/>
          
        </div>
      );
    },
  },
  {
    header: "Expired Date", 
    cell: ({ row }) => {
      return (
        <div className="w-[149px]">
          <span className="text-[16px] w-[149px] text-[#444444] font-mediuml">{row.original.expiredDate}</span>  <br />
          <span className="text-[16px]  text-center  text-[#444444] font-mediuml">{row.original.time}</span>
        </div>
      );
    },
  },
  {
    header: "Actions", // Column header
    cell: ({ row }) => {
      
      // const handleEdit = () => {
      //   console.log("Edit clicked for row:", row.original);
      //   // Add logic to open a form or modal for editing
      // };

      // const handleDelete = () => {
      //   console.log("Delete clicked for row:", row.original);
      //   // Add logic to confirm and delete the row
      // };

 
      return (
        <div className=" w-[90px]">
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]">
              <DropdownMenuItem onClick={handleEdit} className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">Edit</DropdownMenuItem>
             
              <DropdownMenuItem onClick={handleDelete} className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0" >Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <AuctionsButton row={ row }/>
        </div>
      );
    },
  },

];