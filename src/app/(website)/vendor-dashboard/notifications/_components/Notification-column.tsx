"use client";


import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";
import { MoreHorizontal } from "lucide-react"; // Make sure to import the MoreHorizontal icon from lucide-react
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@/components/ui/dropdown-menu"; // Import your dropdown components

import { NotificationDataType } from "@/data/notifications";
// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const MediaColumns: ColumnDef<NotificationDataType>[] = [


  {
    header: "Message",
    cell: ({ row }) => {
      return (
        <div className="text-center ">
          <div className="flex items-center gap-1 justify-center">
            <p className="text-base text-[#444444] font-normal leading-[19.2px]">Store :</p>
            <div className="flex items-center">
              <Image
                src={row.original.Image}
                alt="Pacific Rim Fusion"
                width={17}
                height={18}
                className="rounded-full"
                priority
              />
              <p className="text-base text-gradient dark:text-gradient-pink font-bold leading-[19.2px]"	>{row.original.Name}</p>
            </div>
          </div>
          <p className="text-base text-[#444444] font-normal leading-[19.2px] mt-3">has changed membership plan to <span className="text-gradient dark:text-gradient-pink">{row.original.Plan}</span>.</p>
        </div>
      );
    },
  },
  {
    accessorKey: "Type",
    header: "Type",
    cell: ({ row }) => {
      return (
        <div className=" flex justify-center">
          <div className=" bg-primary dark:bg-pinkGradient rounded-[12px]">
            <p className="text-[12px] text-[#F9FAFD] font-medium leading-[14.4px] py-[10px] px-[23px] ">{row.original.Type}</p>
          </div>
        </div>
      );
    }
  },
  {
    accessorKey: "Form",
    header: "From",
    cell: ({ row }) => {
      return (
        <div className=" flex justify-center">
          <p className="text-base text-[#444444] font-normal leading-[19.2px]">{row.original.Form}</p>
        </div>
      )
    }
  },
  {
    accessorKey: "Date",
    header: "Date",
    cell: ({ row }) => {
      return (
        <div className=" flex justify-center ">
          <p className="text-base text-[#444444] font-normal leading-[19.2px]">{row.original.Date}</p>
        </div>
      )
    }
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
        <div className="text-right py-[49px] flex justify-center ">
          <DropdownMenu>
            <DropdownMenuTrigger className=" w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0">
              <span className="sr-only">Open menu</span>
              <div className="">
                <MoreHorizontal className="h-4 w-4  dark:text-black " />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="bg-white border-none" align="end">
              <DropdownMenuItem onClick={handleEdit} className="text-blue-500 dark:text-[#6841A5]  hover:bg-[#E6EEF6] cursor-pointer dark:hover:bg-[#482D721A]">Mark as seen</DropdownMenuItem>
              <DropdownMenuItem onClick={handleDelete} className="text-red-500 dark:text-red-500 cursor-pointer dark:hover:bg-[#482D721A] ">Delete</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      );
    },
    enableSorting: false, // Disable sorting for the actions column
    size: 100, // Optional: Set a fixed width for this column
  },
];
