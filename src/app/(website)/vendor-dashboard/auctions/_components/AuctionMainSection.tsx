"use client";
import React, { useState } from "react";
import AuctionsHeader from "./auctions_header";
import AuctionsFilter from "./auctions_filter";
import AuctionListingContainer from "./auctions_listing_container";
import { AddListingForm } from "./AddListingForm";

const AuctionMainSection: React.FC = () => {
  const [showAddAuction, setShowAddAuction] = useState(false);

  return (
    <div className="space-y-[30px]">
      <AuctionsHeader showAddAuction={showAddAuction} setShowAddAuction={setShowAddAuction} />
      <AuctionsFilter />
      {showAddAuction ? <AddListingForm /> : <AuctionListingContainer />}
    </div>
  );
};

export default AuctionMainSection;
