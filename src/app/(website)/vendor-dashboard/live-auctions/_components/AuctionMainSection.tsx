"use client";
import React, { useState } from "react";
import AddAuctionForm from "./AddAuctionForm";
import VendorAuctionContainer from "./VendorAuctionContainer";
import AuctionFilter from "./AuctionFilter";
import AuctionHeader from "./AuctionHeader";
import { useAuctions } from "@/zustand/auctions/useAuctions";

const AuctionMainSection: React.FC = () => {
  const [showAddAuction, setShowAddAuction] = useState(false);

  const { productType, setProductType } = useAuctions();

  return (
    <div className="space-y-[30px]">
      <AuctionHeader showAddAuction={showAddAuction} setShowAddAuction={setShowAddAuction} />
      <AuctionFilter productType={productType} setProductType={setProductType}/>
      {showAddAuction ? <AddAuctionForm /> : <VendorAuctionContainer productType={productType}/>}
    </div>
  );
};

export default AuctionMainSection;
