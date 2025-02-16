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
        <div className=" ">
          <span className="text-[14px] 2xl:text-[16px] text-gradient font-mediuml dark:text-gradient-pink ">
            {row.original.code}
          </span>
        </div>
      );
    },
  },
  {
    header: "Type",
    cell: ({ row }) => {
      return (
        <div className="w-[140px]">
          <span className="text-[12px] text-white bg-primary px-[8px] py-[5px] 2xl:px-[10px] 2xl:py-[8px] rounded-[12px] font-normal dark:bg-pinkGradient" >
            {row.original.type}
          </span>
        </div>
      );
    },
  },
  {
    header: "Amount",
    cell: ({ row }) => {
      return (
        <div className="">
          <span className="text-[16px] text-[#444444] font-mediuml">
            {row.original.amount}
          </span>
        </div>
      );
    },
  },
  {
    header: "Store",
    cell: ({ row }) => {
      return (
        <div className="">
          <span className="text-[12px] 2xl:text-[16px] text-[#444444] font-mediuml">
            {row.original.store}
          </span>
        </div>
      );
    },
  },
  {
    header: "Usage Limits",
    cell: ({ row }) => {
      return (
        <div className=" ">
          <span className="text-[16px] text-[#444444] font-mediuml">
            Limit-{row.original.limit}
          </span>
        </div>
      );
    },
  },
  {
    header: "Permission",
    cell: () => {
      return (
        <div className="">
          <Toggle />
        </div>
      );
    },
  },
  {
    header: "Expired Date",
    cell: ({ row }) => {
      return (
        <div className="">
          <span className="text-[12px] 2xl:text-[16px] text-[#444444] font-mediuml">
            {row.original.expiredDate}
          </span>{" "}
          <br />
          <span className="text-[12px] 2xl:text-[16px]  text-center  text-[#444444] font-mediuml">
            {row.original.time}
          </span>
        </div>
      );
    },
  },
  {
    header: "Actions", // Column header
    cell: ({ row }) => {
      return (
        <div className="py-[24px]">
          <AuctionsButton row={row} />
        </div>
      );
    },
  },
];
