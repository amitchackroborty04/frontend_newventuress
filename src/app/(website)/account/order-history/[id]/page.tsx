"use client";
import { ButtonArrow } from "@/components/shared/button/ButtonArrow";
import { BillingDetails } from "./_components/BillingDetails";
import OrderDetailsTable from "./_components/OrderDetailsTable";
import OrderProgress from "./_components/OrderProgress";
import OrderProgressVertical from "./_components/OrderProgressVertical";

const page = () => {
  return (
    <div className="w-full md:pr-2">
      <div className="flex justify-between mb-10">
        <div className="text-gradient font-bold text-[32px] dark:text-gradient-pink">
          Order Details
        </div>
        <div className="hidden md:block">
          <ButtonArrow text="Back to List" href="/" />
        </div>
      </div>
      <BillingDetails />
      <div className="pt-10 pb-10 hidden md:block">
        <OrderProgress className="" />
      </div>
      <div className="md:hidden grid place-items-center">
        <div>
          <OrderProgressVertical />
        </div>
      </div>
      <OrderDetailsTable className=""/>
    </div>
  );
};

export default page;
