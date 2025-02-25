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
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

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
    cell: ({ row }) => <CommentCell comment={row.original.Comments} />,
    size: 600,
  },
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




// row.original.Comments area =====================================

const CommentCell = ({ comment }: { comment: string }) => {
  const [isOpen, setIsOpen] = useState(false);

  const truncatedComment =
    comment.split(" ").length > 5 ? comment.split(" ").slice(0, 5).join(" ") + "..." : comment;

  return (
    <div className="text-start">
      <div className="flex items-start">
        <div className="flex-grow overflow-hidden text-ellipsis relative text-[#444444]">
          {truncatedComment}
          {comment.split(" ").length > 5 && (
            <div className="absolute bottom-0 2xl:right-[45px] right-[5px]">
              <button onClick={() => setIsOpen(true)} className="text-[12px] font-bold hover:underline">
                More
              </button>
            </div>
          )}
        </div>
      </div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[425px] text-left">
          <DialogHeader>
            <DialogTitle>Full Comment</DialogTitle>
          </DialogHeader>
          <div className="mt-2 text-[#444444]">{comment}</div>
        </DialogContent>
      </Dialog>
    </div>
  );
};