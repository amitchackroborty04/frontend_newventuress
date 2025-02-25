"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Check, ImagePlus, MoreHorizontal } from "lucide-react";
import Image from "next/image";

import { AuctionsListingDataType } from "./data";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";

export const AuctionListingColumns: ColumnDef<AuctionsListingDataType>[] = [
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
    id: "name",
    header: () => <div className="ml-[-250px] flex items-center justify-center gap-2 ">
         <ImagePlus className="w-[16px] h-[16px]" />
     <span> Name</span>
      </div>,
    cell: ({ row }) => (
      <div>
        <div className="flex  items-center gap-x-[8px] ">
          <div className="h-[80px] w-[90px] 2xl:h-[110px] 2xl:w-[110px] relative rounded-[12px]">
            <Image
              src={row.original.image}
              fill
              alt="product"
              className="rounded-[12px]"
            />
          </div>
          <div className="flex flex-col gap-y-[8px]">
            <h3 className="text-[15px] 2xl:text-[18px] leading-[21.6px] font-semibold text-gradient dark:text-gradient-pink">
              {row.original.name}
            </h3>
            <div className="flex items-center  py-1 rounded">
              <span className="text-sm text-[#444444] font-normal  border border-[#444444] rounded-3xl flex items-center gap-1 2xl:gap-2 px-1 2xl:px-2 2xl:py-1 ">
                <Check className="w-3 h-3" />
                In stock (08)
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    header: "SKU",
    cell: ({ row }) => (
      <div className="text-[#444444] font-normal text-[16px] leading-[19.2px] ">
        {row.original.sku}
      </div>
    ),
  },
  {
    header: "Store",
    cell: ({ row }) => (
      <h4 className="max-w-[137px] text-gradient font-semibold text-[18px] leading-[21.6px]  flex justify-center ml-10 dark:text-gradient-pink ">
        {row.original.store}
      </h4>
    ),
  },
  {
    header: "Status",
    cell: ({ row }) => (
      <h5 className="max-w-[137px] font-normal text-[16px] leading-[19.2px] text-[#E10E0E]">
        {row.original.status}
      </h5>
    ),
  },
  {
    header: "Price",
    cell: ({ row }) => (
      <h4 className="text-base text-[#444444] font-normal leading-[19.2px] ">
        ${row.original.price}
      </h4>
    ),
  },

  {
    header: "Date",
    accessorKey: "date",
    cell: ({ row }) => (
      <h4 className="text-base text-[#444444] font-normal leading-[19.2px]">
        {row.original.date}
      </h4>
    ),
  },
  {
    id: "actions", // Unique ID for the actions column
    header: "Actions", // Column header
    cell: () => {
      return (
        <div className="py-[41px] flex items-center justify-center ">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:!text-[#6841A5] dark:hover:bg-[#482D721A]">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-white  h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D] ">
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer dark:!text-[#6841A5] rounded-t-[8px]">Edit</DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer dark:!text-[#6841A5]">Details</DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] dark:hover:bg-[#482D721A] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 cursor-pointer " >Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
