"use client";

import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";
import { DemoTableItemsType } from "./data";
import Image from "next/image";

export const RefundColumn: ColumnDef<DemoTableItemsType>[] = [
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
        header: "Image",
        cell: ({ row }) => (
          <div>
            <Image
                src={row.original.image}
                height={160}
                width={100}
                alt="img"
                className="rounded-[8px] w-[160px] h-[100px]"
            />
          </div>
        ),
      },
      {
        header: "Associate",
        cell: ({ row }) => (
          <div className="">
            <div>
              <span className="text-[16px] text-[#444444] font-normal">
                {row.original.Associate}
              </span>
            </div>
          </div>
        ),
      },
      {
        header: "Store",
        cell: ({ row }) => (
          <div className="">
            <div>
              <span className="text-[16px] text-[#444444] font-normal">
                {row.original.Store}
              </span>
            </div>
          </div>
        ),
      },
      {
        header: "Size",
        cell: ({ row }) => (
          <div>
            <span className="text-[16px] text-[#444444] font-normal">
              {row.original.Size}
            </span>
          </div>
        ),
      },
      {
        header: "Action",
        cell: () => {
          return (
            <div>
                <MoreHorizontal className="h-4 w-4 dark:!text-[#6841A5]

" />
            </div>
          );
        },
      },
];



