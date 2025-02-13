"use client";

import { DemoTableItemsType } from "@/data/demo";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { ImagePlus, MoreHorizontal } from "lucide-react"; // Make sure to import the MoreHorizontal icon from lucide-react
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Import your dropdown components

import { Checkbox } from "@/components/ui/checkbox";
// This type is used to define the shape of our data.


export const MediaColumns: ColumnDef<DemoTableItemsType>[] = [
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
    id: "image",
    header: () => <div className="ml-[-205px] flex items-center justify-center gap-2 ">
      <ImagePlus className="w-[16px] h-[16px]" />
      <span>Image</span>
    </div>,
    cell: ({ row }) => {
      return (
        <div className="">
          <Image
            src={row.original.image}
            height={100}
            width={160}
            alt="img"
            className="rounded-[8px]"
          />
        </div>
      );
    },
  },

  {
   
    header: "Associate",
    cell: ({ row }) => (
      <p className="text-base text-[#444444] font-normal leading-[19.2px]">{row.original.Associate}</p>
    )
  },
  {
    accessorKey: "Store",
    header: "Store",
    cell: ({ row }) => (
      <p className="text-[18px] text-gradient dark:text-gradient-pink font-normal leading-[19.2px]">{row.original.Store}</p>
    )
  },
  {
    accessorKey: "Size",
    header: "Size",
    cell: ({ row }) => (
      <p className="text-base text-[#444444] font-normal leading-[19.2px]">{row.original.Size}</p>
    )
  },
  {
    id: "actions", // Unique ID for the actions column
    header: "Actions", // Column header
    cell: ({ row }) => {
      const handleEdit = () => {
        console.log("Edit clicked for row:", row.original);
        // Add logic to open a form or modal for editing
      };

      const handleDelete = () => {
        console.log("Delete clicked for row:", row.original);
        // Add logic to confirm and delete the row
      };

      return (
        <div className="text-right  flex justify-center">
          <DropdownMenu>
            <DropdownMenuTrigger className=" w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4 dark:text-black " />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-none" align="start">
              <DropdownMenuItem onClick={handleEdit} className="text-blue-500 hover:!bg-[#E6EEF6] dark:hover:!bg-[#482D721A] cursor-pointer w-full dark:text-blue-500 ">Edit</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-red-500 cursor-pointer hover:!bg-[#E6EEF6] dark:hover:!bg-[#482D721A] dark:text-red-500">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    enableSorting: false, // Disable sorting for the actions column
    size: 100, // Optional: Set a fixed width for this column
  },
];
