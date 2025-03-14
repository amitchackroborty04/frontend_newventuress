"use client";

import { demoTableItems, DemoTableItemsType } from "@/data/demo";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MediaColumns } from "./media-column";

const VendorMediaContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <TableContainer data={demoTableItems} columns={MediaColumns} />
      <div className="mt-[40px] flex justify-between pb-[30px]">
        <div className="text-[#444444]   font-normal text-[16px]">Showing 1 to 25 in first entries</div>
       <div className=" w-[400px]">
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

export default VendorMediaContainer;

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import PacificPagination from "@/components/ui/PacificPagination";

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
    <>
      <DataTable table={table} columns={columns} title="Media List" /> 
    </>
  );
};
