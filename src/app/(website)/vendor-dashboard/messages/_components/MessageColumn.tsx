"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { VendorMessageDataType } from "@/data/vendorMessageData";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import Image from "next/image";





export const MessageColumn: ColumnDef<VendorMessageDataType>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    header: "Customer",
    cell: ({ row }) => {
        console.log(row)
      return (
        <div className="flex items-center gap-4">
          <div>
            <Image
              src={row.original.image}
              height={120}
              width={120}
              alt="img"
              className="rounded-full"
            />
          </div>
          <div>
          <h4 className="text-lg font-semibold leading-[21px] text-gradient">{row.original.name}</h4>
            <h4 className="text-base font-normal leading-[19px] text-[#444444] py-[8px]">{row?.original?.email}</h4>
            <p className="w-52 text-base font-normal leading-[19px] text-[#444444]">{row.original.location}</p>
          </div>
        </div>
      );
    },
  },
  {
    header: "Query",
    cell: ({ row }) => {
      return (
        <div className="w-[250px] h-[44px] flex justify-center gap-[2px]">
          <span className="text-lg font-semibold leading-[21px] text-gradient text-center">{row.original.query}</span>
        </div>
      );
    },
  },
  {
    header: "Auction/Listing",
    cell: ({ row }) => {
      return (
        <div className="w-[200px] h-[44px] flex justify-center gap-[2px]">
          <span className="text-base font-normal leading-[19px] text-[#444444] text-center">{row.original.actionListing}</span>
        </div>
      );
    },
  },
  {
    header: "Replies",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center gap-[2px]">
          <span className="text-base font-normal leading-[19px] text-[#444444] text-center">{row.original.replies}</span>
        </div>
      );
    },
  },
  {
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className="flex justify-center gap-[2px]">
          <span className="text-base font-normal leading-[19px] text-[#444444] text-center">{row.original.date}</span>
        </div>
      );
    },
  },
  {
    header: "Actions",
    cell: () => {
      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]">
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-default">Reply</DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-default" >Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  }
];