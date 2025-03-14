
import AdminReviewsContainer from "./_components/AdminReviewsContainer";
import RefundFilter from "./_components/RefundFilter";
import RefundHeader from "./_components/RefundHeader";

const Page = () => {
  return <div>
    <RefundHeader/>
    <RefundFilter/>
    <AdminReviewsContainer/>
  </div>;
};

export default Page;
