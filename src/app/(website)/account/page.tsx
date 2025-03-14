import OrderHistory from "@/components/orderHistory/OrderHistory";
import UserDetailsInfo from "../_components/UserDetailsInfo";
import UserInfo from "../_components/UserInfo";

const Page = () => {
  return (
    <div className="flex  items-center flex-col  md:flex-row">
      <div className="mb-[80px]">
        {/* user infro dtails       */}
        <div className="max-w-[870px] lg:flex lg:items-start justify-between   mb-[10px] flex-col   md:flex-row  gap-4 ">
          <UserInfo />
          <UserDetailsInfo />
        </div>
        <div className="max-w-[870px]  ">
          {/* order histor table  */}
          <OrderHistory />
        </div>
      </div>
    </div>
  );
};

export default Page;
