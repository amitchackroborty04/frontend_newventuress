import * as React from "react";
import { AddressInfo } from "./types";
import { cn } from "@/lib/utils";

interface AddressCardProps {
  title: string;
  info: AddressInfo;
  className: string
}

export function AddressCard({ title, info, className }: AddressCardProps) {
  return (
    <div className={cn("flex flex-col min-w-[240px] w-[284px]", className)}>
      <div className="flex-1 shrink gap-2.5 self-stretch p-3 w-[140%] md:w-full text-2xl font-medium leading-tight text-gradient dark:text-gradient-pink border-b border-solid border-b-stone-300">
        {title}
      </div>
      <div className="flex flex-col p-3 w-full text-base">
        <div className="text-xl font-medium leading-tight text-black">
          {info.name}
        </div>
        <div className="flex flex-col mt-3 w-full">
          <div className="font-medium leading-tight text-[#444444]">
            Address
          </div>
          <div className="mt-1 leading-5 text-[#9C9C9C]">
            {info.address}
          </div>
        </div>
        <div className="flex flex-col mt-3 w-full leading-tight whitespace-nowrap">
          <div className="font-medium text-[#444444]">Email</div>
          <div className="mt-1 text-[#9C9C9C]">{info.email}</div>
        </div>
        <div className="flex flex-col mt-3 w-full leading-tight">
          <div className="font-medium text-[#444444]">Phone</div>
          <div className="mt-1 text-[#9C9C9C]">{info.phone}</div>
        </div>
      </div>
    </div>
  );
}