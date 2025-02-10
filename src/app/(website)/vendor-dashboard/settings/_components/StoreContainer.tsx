"use client";

import { StoreListData, DemoTableItemsType } from "@/data/StoreListData";
import { ColumnDef, getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { StoreListColumn } from "./StoreListColumn";
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import StoreEditInfo from "./AddVendorStore/StoreEditInfo";

const StoreContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isOpen, setIsOpen] = useState(false); // State for modal open/close
  const [selectedRow, setSelectedRow] = useState<DemoTableItemsType | null>(null); // State for selected row

  // Call StoreListColumn with the required arguments
  const columns = StoreListColumn({ setIsOpen, setSelectedRow });

  return (
    <section className="w-full">
      <div className="w-full shadow-[0px_0px_22px_8px_#C1C9E4] h-auto rounded-[24px] bg-white">
        <TableContainer data={StoreListData} columns={columns} />
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
              <StoreEditInfo
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                rowData={selectedRow}
              />
            )}
    </section>
  );
};

export default StoreContainer;

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<DemoTableItemsType>[];
}) => {
  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <DataTable table={table} columns={columns} title="Store Lists" />
    </>
  );
};