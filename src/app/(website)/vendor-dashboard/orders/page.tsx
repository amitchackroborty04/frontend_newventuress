import OrderFilter from "./_components/OrderFilter";
import OrderHeader from "./_components/OrderHeader";
import VendorOrderContainer from "./_components/VendorOrderContainer";

const Page = () => {
  return <div>
    <OrderHeader/>
    <OrderFilter/>
    <VendorOrderContainer/>
  </div>;
};

export default Page;
