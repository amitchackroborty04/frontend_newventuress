"use client";


import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import { MediaColumns } from "./Notification-column";

const NorificationContainer = () => {
    const [currentPage, setCurrentPage] = useState(1);
  return (
    <div>
      <TableContainer data={notificationItems} columns={MediaColumns} />
      <div className="mt-[40px] flex justify-between pb-2">
        <div className="text-[#444444] font-normal text-[16px]">Showing 1 to 25 in first entries</div>
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

export default NorificationContainer;

import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import { useState } from "react";
import PacificPagination from "@/components/ui/PacificPagination";
import { NotificationDataType, notificationItems } from "@/data/notifications";

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<NotificationDataType>[];
}) => {
  const table = useReactTable({
    data,
    columns: columns,
    getCoreRowModel: getCoreRowModel(),
  });
  return (
    <>
      <DataTable table={table} columns={columns} title="Notifications" /> 
    </>
  );
};
