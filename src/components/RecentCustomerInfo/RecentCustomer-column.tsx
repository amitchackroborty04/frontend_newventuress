"use client";
import { ColumnDef } from "@tanstack/react-table";
import { RecentCustomerType } from "@/data/RecentCustomer";


export const MediaColumns: ColumnDef<RecentCustomerType>[] = [
  
  {
    accessorKey: "order",
    header: "Order",
    cell: ({ row }) => {
        return (
          <div className="">
           <p className="text-base text-[#444444] font-medium  ">{row.original.order}</p>
          </div>
        );
      },
  },
  {
    accessorKey: "amount",
    header: "Amount",
    cell: ({ row }) => {
        return (
          <div className="">
           <p className="text-base text-[#444444] font-medium">{row.original.amount}</p>
          
          </div>
        );
      },
  },

  
];
