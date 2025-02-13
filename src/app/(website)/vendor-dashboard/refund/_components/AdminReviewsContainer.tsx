"use client";


import PacificPagination from '@/components/ui/PacificPagination'
import React, { useState } from 'react'
import { ReviewsData, DemoTableItemsType } from "./data";
import { RefundColumn } from './RefundColumn';


function AdminRefundContainer() {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="w-full shadow-[0px_0px_22px_8px_#C1C9E4] h-auto rounded-[24px] bg-white">
      <TableContainer data={ReviewsData} columns={RefundColumn} />
      </div>

      <div className="my-[40px] flex justify-between">
        <div className="text-[#444444] font-normal text-[16px]">Showing 1 to 25 in first entries</div>
       <div className="">
       <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={10}
        />
       </div>
      </div>
    </section>
  )
}

export default AdminRefundContainer;



import { DataTable } from "@/components/ui/data-table";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";


const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<DemoTableItemsType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <div className="mt-[30px]">
      <DataTable table={table} columns={columns} title="Media List" />
    </div>
  );
};