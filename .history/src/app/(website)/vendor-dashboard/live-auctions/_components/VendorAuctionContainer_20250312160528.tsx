"use client";

import { getCoreRowModel, useReactTable } from "@tanstack/react-table";
import {ActionColumn} from "./AuctionColumn"

const VendorAuctionContainer = ({productType}: any) => {
  const [currentPage, setCurrentPage] = useState(1);

  const session = useSession();
  const token = session.data?.user.token;
  console.log({token})

  const {data, isLoading, isError, error} = useQuery<AuctionDataTypeResponse>({
    queryKey : ["all-auctions", currentPage, productType],
    queryFn : () => fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/vendor/auctions?page=${currentPage}&limit=8&productType=${productType}`, {
      method : "GET",
      headers : {
        Authorization : `Bearer ${token}`
      }
    })
    .then((res)=> res.json())
  })

  console.log({data})

  let content;
  if (isLoading) {
    content = (
      <div className="w-full p-4">
        <TableSkeletonWrapper count={6} width="100%" height="120px" className="bg-[#b4b3b3]"/>
      </div>
    );
  } else if (isError) {
    content = (
      <div className="w-full h-[300px]">
        <ErrorContainer message={error?.message || "Something went Wrong"} />
      </div>
    );
  } else if (data && data.data && data.data.length === 0) {
    content = (
      <NotFound message="Oops! No data available. Modify your filters or check your internet connection." />
    );
  } else if (data && data.data && data.data.length > 0) {
    content = <TableContainer columns={ActionColumn} data={data.data} />;
  }


  return (
    <section className="w-full">
    <div className="w-full shadow-[0px_0px_22px_8px_#C1C9E4] h-auto  rounded-[24px] bg-white">
    {content}
    </div>
    <div className="my-[40px] w-full  flex justify-between">
      <p className="font-normal text-[16px] leading-[19.2px] text-[#444444]">
        Showing {currentPage} to {data?.pagination?.totalPages} in first entries
      </p>
      <div>
        {
          data && data?.pagination && data?.pagination?.totalPages > 1 && (
            <PacificPagination
              currentPage={currentPage}
              totalPages={data?.pagination?.totalPages}
              onPageChange={(page) => setCurrentPage(page)}
            />
          )
        }
      </div>
    </div>
  </section>
  );
};

export default VendorAuctionContainer;
import { DataTable } from "@/components/ui/data-table";
import { ColumnDef } from "@tanstack/react-table";
import PacificPagination from "@/components/ui/PacificPagination";
import { useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import { AuctionDataType, AuctionDataTypeResponse } from "@/types/vendorAuction";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import NotFound from "@/components/shared/NotFound/NotFound";
import TableSkeletonWrapper from "@/components/shared/TableSkel/TableSkeletaion";

const TableContainer = ({
  data,
  columns,
}: {
  data: any[];
  columns: ColumnDef<AuctionDataType>[];
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
