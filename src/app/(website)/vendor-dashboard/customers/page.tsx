import CustomerContainer from "./_components/CustomerContainer";
import CustomerFilter from "./_components/CustomerFilter";
import CustomerHeader from "./_components/CustomerListHeader";

const Page = () => {
  return (
    <div>
      <CustomerHeader />
      <CustomerFilter />
      <CustomerContainer />
    </div>
  );
};

export default Page;
