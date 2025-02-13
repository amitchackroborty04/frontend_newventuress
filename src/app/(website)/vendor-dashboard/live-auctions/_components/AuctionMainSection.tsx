"use client";
import React, { useState } from "react";
import AddAuctionForm from "./AddAuctionForm";
import VendorAuctionContainer from "./VendorAuctionContainer";
import AuctionFilter from "./AuctionFilter";
import AuctionHeader from "./AuctionHeader";

const AuctionMainSection: React.FC = () => {
  const [showAddAuction, setShowAddAuction] = useState(false);

  return (
    <div className="space-y-[30px]">
      <AuctionHeader showAddAuction={showAddAuction} setShowAddAuction={setShowAddAuction} />
      <AuctionFilter />
      {showAddAuction ? <AddAuctionForm /> : <VendorAuctionContainer />}
    </div>
  );
};

export default AuctionMainSection;
