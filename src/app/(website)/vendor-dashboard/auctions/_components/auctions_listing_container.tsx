"use client";

// Packages
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useState } from "react";

// Local imports
import { DataTable } from "@/components/ui/data-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { AuctionListingColumns } from "./auctions_listing_column";
import { auctionsListingData, AuctionsListingDataType } from "./data";

const AuctionListingContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <section className="w-full">
      <div className="w-full shadow-[0px_0px_22px_8px_#C1C9E4] h-auto  rounded-[24px] bg-white">
        <TableContainer
          data={auctionsListingData}
          columns={AuctionListingColumns}
        />
      </div>
      <div className="my-[40px] w-full  flex justify-between">
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
    </section>
  );
};

export default AuctionListingContainer;

interface TableContainerProps {
  data: any[];
  columns: ColumnDef<AuctionsListingDataType>[];
}
const TableContainer = ({ data, columns }: TableContainerProps) => {
  const [rowSelection, setRowSelection] = useState({});
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
    onRowSelectionChange: setRowSelection,
    state: {
      rowSelection,
    },
  });
  return (
    <>
      <DataTable
        table={table}
        columns={columns}
        title="Auctions/Listing"
        titleClass="h-[78px] flex items-center text-[28px] leading-[33.6px] font-semibold"
      />
    </>
  );
};
