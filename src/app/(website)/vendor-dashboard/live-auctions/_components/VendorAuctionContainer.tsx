"use client";

import { VendorAllAuctionData, DemoTableItemsType } from "@/data/VendorAllAuctionData";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {ActionColumn} from "./AuctionColumn"

const VendorAuctionContainer = () => {
  return (
    <div>
      <TableContainer data={VendorAllAuctionData} columns={ActionColumn} />
    </div>
  );
};

export default VendorAuctionContainer;
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";

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
      <DataTable table={table} columns={columns} title="All Auctions" />
    </>
  );
};
