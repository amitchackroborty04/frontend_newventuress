import AuctionFilter from "./_components/AuctionFilter";
import AuctionHeader from "./_components/AuctionHeader";
import VendorAuctionContainer from "./_components/VendorAuctionContainer";

const Page = () => {
  return <div className="space-y-[30px]">
  <AuctionHeader/>
  <AuctionFilter/>
  <VendorAuctionContainer/>
</div>;
};

export default Page;
