"use client";
import React, { useState } from "react";
import AuctionsHeader from "./auctions_header";
import AuctionsFilter from "./auctions_filter";
import AddAuctionForm from "./AddAuctionForm";
import AuctionListingContainer from "./auctions_listing_container";

const AuctionMainSection: React.FC = () => {
  const [showAddAuction, setShowAddAuction] = useState(false);

  return (
    <div className="space-y-[30px]">
      <AuctionsHeader showAddAuction={showAddAuction} setShowAddAuction={setShowAddAuction} />
      <AuctionsFilter />
      {showAddAuction ? <AddAuctionForm /> : <AuctionListingContainer />}
    </div>
  );
};

export default AuctionMainSection;
