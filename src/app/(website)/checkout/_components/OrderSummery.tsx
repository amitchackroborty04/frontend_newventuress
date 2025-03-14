import Image from "next/image";
import * as React from "react";
interface OrderItem {
  image: string;
  title: string;
  sellingPrice: number;
}

const OrderSummary: React.FC<OrderItem> = ({
  image,
  title,
  sellingPrice,
}) => {
  return (
    <div>
      <div className="flex flex-wrap gap-4 items-center w-full md:max-w-full ">
        <Image
          loading="lazy"
          src={image}
          alt={title}
          width={80}
          height={52}
          className="bg-no-repeat object-cover h-[60px]"
        />
        <div className="flex flex-1 shrink gap-10 justify-between items-start self-stretch my-auto basis-0 min-w-[240px] max-md:max-w-full">
          <div className="w-60 text-base font-medium leading-[19px] text-gradient dark:text-gradient-pink">{title}</div>
          <div className="text-[#181818]">${sellingPrice}</div>
        </div>
      </div>
      
    </div>
  );
};
export default OrderSummary
