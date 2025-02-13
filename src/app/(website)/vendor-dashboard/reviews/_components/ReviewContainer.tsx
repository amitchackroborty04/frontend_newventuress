"use client";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import { ReviewdemoTableItems, ReviewdemoTableItemsType } from "@/data/Reviews";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
// import { ImagePlus } from 'lucide-react';

// prduct card data
const productData = {
  image: "/assets/img/producimage.png",
  title: "CBD Oil 500mg",
  reviewer: "Island guy Smokers",
  rating: 4,
};
import Image from "next/image";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.

export const MediaColumns: ColumnDef<ReviewdemoTableItemsType>[] = [
  {
    id: "profile",
    header: () => <div className=" flex items-center justify-center gap-2 ">
      <ImagePlus className="w-[16px] h-[16px]" />
      <span>Profile</span>
    </div>,
    cell: ({ row }) => {
      return (
        <div className="w-[250px] h-[150px] flex  items-center justify-around">
          <Image
            src={row.original.image}
            height={100}
            width={100}
            alt="img"
            className="rounded-full object-cover"
          />
          <div>
            <h1 className="mt-2 text-[18px] font-semibold text-gradient dark:text-gradient-pink ">
              {row.original.name}
            </h1>
            <h1 className="mt-2 text-base text-[#444444] font-normal">{row.original.mail}</h1>
          </div>
        </div>
      );
    },
  },

  {
    accessorKey: "products",
    header: "products",
    cell: () => {
      return (
        <div className="text-left">
          <ProductReview
            image={productData.image}
            title={productData.title}
            reviewer={productData.reviewer}
            rating={productData.rating}
          />
        </div>
      );
    },
  },
  {
    accessorKey: "date",
    header: "date",
    cell: ({ row }) => {
      return (
        <div
          className="w-[110px]   text-[16px] font-normal text-[#444444] "
        
        >
          {row.original.date}
        </div>
      );
    },
  },
  {
    accessorKey: "Comments",
    header: "Comments",
    cell: ({ row }) => {
     
      return (
        <div className="relative group 2xl:w-[518px] text-start">
          <div 
            className="overflow-hidden text-ellipsis cursor-pointer"
            style={{
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 3,
              overflow: "hidden",
              color: "#444444",
              fontSize: "16px",
            }}
          >
            {row.original.Comments} 
          </div>
          
          
          <div className="absolute right-0 top-full mt-1 w-max max-w-xs bg-primary dark:bg-pinkGradient z-50  p-4 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 dark:text-[#FFFFFF] ">
            
            {row.original.Comments}
          </div>
        </div>
      );
    },
    size: 600,
  }
];

const ReviewContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <div >
      <TableContainer data={ReviewdemoTableItems} columns={MediaColumns} />
      <div className="mt-[40px]  flex justify-between">
        <div className="text-[#444444] font-normal text-[16px]">
          Showing 1 to 25 in first entries
        </div>
        <div className=" w-[400px] mb-[84px]">
          <PacificPagination
            currentPage={currentPage}
            onPageChange={(page) => setCurrentPage(page)}
            totalPages={10}
          />
        </div>
      </div>
    </div>
  );
};

export default ReviewContainer;

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import ProductReview from "./ProductReview";
import { ImagePlus } from "lucide-react";

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<ReviewdemoTableItemsType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <>
      <DataTable table={table} columns={columns} title="Review List" />
    </>
  );
};
