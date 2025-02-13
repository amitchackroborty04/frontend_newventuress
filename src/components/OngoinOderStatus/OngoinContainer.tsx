"use client";
// Packages
import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
// Local imports
import { DataTable } from "@/components/ui/data-table";
import { CustomerDataType, oderData } from "@/data/OngoingOder";
import { OngoinColumns } from "./OngoinColum";

const OngoinContainer = () => {
 
  return (
    <div className="pb-10">
      <TableContainer columns={OngoinColumns} data={oderData} />
      
    </div>
  );
};

export default OngoinContainer;

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<CustomerDataType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <DataTable table={table} columns={columns} title="Ongoin Order Status" />
    </>
  );
};
