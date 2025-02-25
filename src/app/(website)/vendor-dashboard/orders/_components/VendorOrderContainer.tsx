"use client";

import { OrderData, DemoTableItemsType } from "./data";
import { OrderColumn } from "./OrderColumn";
function VendorOrderContainer() {
    const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedRow, setSelectedRow] = useState<DemoTableItemsType | null>(null);
  return (
    <section className="w-full">
      <div className="w-full shadow-[0px_0px_22px_8px_#C1C9E4] h-auto rounded-[24px] bg-white">
        {/* Call the OrderColumn function here */}
        <TableContainer
          data={OrderData}
          columns={OrderColumn({ setIsOpen, setSelectedRow })}
        />
      </div>
      <div className="my-[40px] w-full flex justify-between">
        <p className="font-normal text-[16px] leading-[19.2px] text-[#444444]">
          Showing 1 to 25 in first entries
        </p>
        <div>
          <PacificPagination
            currentPage={currentPage}
            totalPages={10}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>

      {/* Render the modal */}
      {isOpen && (
        <OrderDetials
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          rowData={selectedRow}
        />
      )}
    </section>
  )
}

export default VendorOrderContainer;


import { DataTable } from "@/components/ui/data-table";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import OrderDetials from "./OrderDetials";

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
      <DataTable table={table} columns={columns} title="Orders" />
    </div>
  );
};
