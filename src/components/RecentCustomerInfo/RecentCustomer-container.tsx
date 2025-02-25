"use client";
import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MediaColumns } from "./RecentCustomer-column";

const RecentCustomerContainer = () => {
  
  return (
    <div>
      <TableContainer data={Recentcustomer} columns={MediaColumns} />
    
    </div>
  );
};

export default RecentCustomerContainer;
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { Recentcustomer, RecentCustomerType } from "@/data/RecentCustomer";

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<RecentCustomerType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <DataTable table={table} columns={columns} title="Recent Customer Info" /> 
    </>
  );
};
