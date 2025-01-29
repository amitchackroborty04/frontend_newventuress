import StoreContainer from "./_components/StoreContainer";
import StoreFilter from "./_components/StoreFilter";
import StoreListHeader from "./_components/StoreListHeader";

const Page = () => {
  return (
    <div className="space-y-[30px]">
      <StoreListHeader />
      <StoreFilter />
      <StoreContainer />
    </div>
  );
};

export default Page;
