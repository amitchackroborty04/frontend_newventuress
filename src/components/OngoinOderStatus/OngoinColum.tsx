"use client";
import { CustomerDataType } from "@/data/OngoingOder";
import { ColumnDef } from "@tanstack/react-table";
import Image from "next/image";

export const OngoinColumns: ColumnDef<CustomerDataType>[] = [
  {
    header: "Customer",
    cell: ({ row }) => (
     <div className="flex justify-center">
       <div className="flex  items-center gap-1 " >
        <div >
          <Image
            src={row.original.image}
            height={32}
            width={32}
            alt="img"
            className=" rounded-full object-cover"
          />
        </div>
        <div>
            <p className="text-[20px] text-[#444444] font-medium">{row.original.name}</p>
        </div>
      </div>
     </div>
    ),
  },
  {
    header: "Order ID",
    cell: ({ row }) => (
      <p className="text-base text-[#444444] leading-[19.2px] font-normal py-[13px] ">
        #{row.original.orderId}
      </p>
    ),
  },
  {
    header: "Date",
    cell: ({ row }) => (
      <p className="text-base text-[#444444] leading-[19.2px] font-normal ">
        {row.original.date}
      </p>
    ),
  },
  {
    header: "Status",
    cell: ({ row }) => {
        type StatusType = "processing" | "pending" | "completed";
  
        const styles: Record<StatusType, string> = {
          processing:
            "bg-[#FF4D00] text-white w-[110px] h-[35px] text-[14px] rounded-sm",
          pending:
            "bg-[#00417E] text-white  w-[110px] h-[35px] text-[14px] rounded-sm",
          completed:
            "bg-[#2A6C2D] text-white  w-[110px] h-[35px] text-[14px] rounded-sm",
        };
  
        const status = (row.original.status || "").toLowerCase() as StatusType;
  
        return (
          <button className={`text-[16px] font-normal ${styles[status] || ""}`}>
            {row.original.status}
          </button>
        );
      },
  },
];
