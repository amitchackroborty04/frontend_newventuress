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
import { DemoTableItemsType } from "./data";

export const OrderColumn = ({
  setIsOpen,
  setSelectedRow,
}: {
  setIsOpen: (value: boolean) => void;
  setSelectedRow: (row: DemoTableItemsType | null) => void;
}): ColumnDef<DemoTableItemsType>[] => [
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
        className="ml-[10px]"
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
    header: "Order ID",
    cell: ({ row }) => (
      <div>
        <span className="text-[16px] text-[#444444] font-normal">
          ${row.original.OrderID}
        </span>
      </div>
    ),
  },
  {
    header: "Date",
    cell: ({ row }) => (
      <div className="">
        <div>
          <span className="text-[16px] text-[#444444] font-normal">
            ${row.original.Data}
          </span>
        </div>
        <div>
          <span className="text-[16px] text-[#444444] font-normal">
            ${row.original.Time}
          </span>
        </div>
      </div>
    ),
  },
  {
    header: "Name",
    cell: ({ row }) => (
      <div>
        <span className="text-[16px] text-[#444444] font-normal">
          {row.original.name}
        </span>
      </div>
    ),
  },
  {
    header: "Total",
    cell: ({ row }) => (
      <div>
        <span className="text-[16px] text-[#444444] font-normal">
          {row.original.TotalProducts}
        </span>
      </div>
    ),
  },
  {
    header: "Status",
    cell: ({ row }) => {
      type StatusType = "processing" | "pending" | "completed";

      const styles: Record<StatusType, string> = {
        processing:
          "bg-[#FF4D00] text-white w-[110px] h-[35px] text-[14px] rounded-sm",
        pending:
          "bg-[#00417E] text-white  w-[110px] h-[35px] text-[14px] rounded-sm",
        completed:
          "bg-[#2A6C2D] text-white  w-[110px] h-[35px] text-[14px] rounded-sm",
      };

      const status = (row.original.Status || "").toLowerCase() as StatusType;

      return (
        <button className={`text-[16px] font-normal ${styles[status] || ""}`}>
          {row.original.Status}
        </button>
      );
    },
  },
  {
    header: "Action",
    cell: ({ row }) => {
      type StatusType = "processing" | "pending" | "completed";

      const status = (row.original.Status || "").toLowerCase() as StatusType;

      return (
        <div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="ghost"
                className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0"
              >
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
              align="end"
              className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
            >
              {status === "pending" && (
                <DropdownMenuItem className="p-[8px] hover:bg-[#E6EEF6] rounded-t-[8px] focus:outline-none">
                  Accept
                </DropdownMenuItem>
              )}
              <DropdownMenuItem
                className="p-[8px] hover:bg-[#E6EEF6] rounded-t-[8px] focus:outline-none"
                onClick={() => {
                  setSelectedRow(row.original); // Set the selected row
                  setIsOpen(true); // Open the modal
                }}
              >
                Details
              </DropdownMenuItem>
              <DropdownMenuItem className="p-[8px] text-red-600 hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none">
                Delete
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
  },
];



