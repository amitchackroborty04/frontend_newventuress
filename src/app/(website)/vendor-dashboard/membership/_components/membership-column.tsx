"use client";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { MemberTableDataType } from "@/data/member";

export const Column: ColumnDef<MemberTableDataType>[] = [
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
    header: "Plan",
    cell: ({ row }) => {
      return (
        <div>
          <div className="text-center">
            <span className="text-[12px] font-medium leading-[14.4px] text-[#F9FAFD] py-[10px] px-[33px] bg-primary rounded-[12px] text-center">
              {row.original.Plan}
            </span>
          </div>
        </div>
      );
    },
  },
  {
    header: "Pay Method",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-base text-[#444444] font-normal leading-[19.2px]">
            {row.original["Pay Method"]}
          </p>
        </div>
      );
    },
  },
  {
    header: "Store",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-[18px] font-bold text-gradient">
            {row.original.Store}
          </p>
        </div>
      );
    },
  },
  {
    header: "Time",
    cell: ({ row }) => {
      return (
        <div className="text-center">
          <p className="text-base font-normal text-[#444444]">
            {row.original["Time"]}
          </p>
        </div>
      );
    },
  },

  {
    header: "Actions",
    cell: () => {
      return (
        <div className="h-[154px] flex items-center justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 "
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
            >
              <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];
