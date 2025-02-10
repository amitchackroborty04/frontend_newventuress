"use client";
import { GoArrowRight } from "react-icons/go";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { AddressCard } from "@/app/(website)/account/order-history/[id]/_components/AddressCard";
import { OrderSummary } from "@/app/(website)/account/order-history/[id]/_components/OrderSummary";
import type { AddressInfo, OrderDetails as OrderDetailsType } from "./types";
import { DemoTableItemsType } from "./data"; // Import this if not already imported
import OrderProgress from "@/app/(website)/account/order-history/[id]/_components/OrderProgress";
import OrderDetailsTable from "@/app/(website)/account/order-history/[id]/_components/OrderDetailsTable";
import { ScrollArea } from "@/components/ui/scroll-area"


interface OrderDetailsProps {
  isOpen: boolean;
  onClose: () => void;
  rowData: DemoTableItemsType | null;
}

export default function OrderDetails({ isOpen, onClose, rowData }: OrderDetailsProps) {
  // 1: received, 2: processing, 3: on the way, 4: delivered

  const addressInfo: AddressInfo = {
    name: "Cameron Williamson",
    address: "4517 Washington Ave. Manchester, Kentucky 39495",
    email: "georgia.young@example.com",
    phone: "(+33)7 75 55 65 33",
  };

  const orderDetails: OrderDetailsType = {
    orderId: String(rowData?.OrderID) || "#4152",  // Ensure it's always a string
    paymentMethod: "Paypal",
    summaryItems: [
      { label: "Subtotal", value: "₿7,000.00" },
      { label: "Shipping Estimate", value: "₿7,800.00" },
      { label: "Tax Estimate", value: "₿50.00" },
      { label: "Total Item", value: "3" },
    ],
    total: "₿48,000.00",
  };

  return (

    <section>
      <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()} >
      
        <DialogContent
          className="max-w-[1250px] p-0 dark:bg-white border border-[#B0B0B0]"
          style={{ boxShadow: "0px 0px 22px 8px #C1C9E4" }}
        >
          <DialogHeader className=" bg-[#1a237e] dark:bg-pinkGradient text-white p-4 rounded-t-lg">
            <div className="flex items-center justify-between">
              <div>
                <DialogTitle className="text-xl font-semibold">Order Details</DialogTitle>
              </div>
              <div className="bg-white rounded-lg">
                <Button variant="ghost" className="text-gradient dark:text-gradient-pink w-[146px] h-[40px" onClick={onClose}>
                  Back to List <GoArrowRight className="text-[#121D42] dark:!text-[#6841A5]" />
                </Button>
              </div>
            </div>
          </DialogHeader>
            
          <ScrollArea className="p-6  max-h-[750px]">
            <div className="flex flex-wrap  gap-8 ">
              <div className="relative flex flex-wrap  shrink items-start bg-white rounded-xl border border-solid border-stone-300">
                <AddressCard title="Billing Address" info={addressInfo} className="flex flex-col min-w-[417px]" />
                <div className="shrink-0 border-l border-stone-300 h-[295px] hidden md:block" />
                <div className="">
                  <AddressCard title="Shipping Address" info={addressInfo} className="flex flex-col min-w-[417px] " />
                </div>
              </div>

              <OrderSummary orderDetails={orderDetails} />
            </div>
            <div className="pt-10 pb-10 ">
              <OrderProgress className="max-w-[1024px]" />
            </div>
            <div className="max-w-[1250px]">
              <OrderDetailsTable className="max-w-full" />
            </div>
          </ScrollArea>

        </DialogContent>
      </Dialog>
    </section>
  );
}
