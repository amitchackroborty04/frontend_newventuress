import AuctionsFilter from "./_components/auctions_filter";
import AuctionsHeader from "./_components/auctions_header";
import AuctionListingContainer from "./_components/auctions_listing_container";

const Page = () => {
  return (
    <div className="space-y-[30px]">
      <AuctionsHeader />
      <AuctionsFilter />
      <AuctionListingContainer />
    </div>
  );
};

export default Page;
