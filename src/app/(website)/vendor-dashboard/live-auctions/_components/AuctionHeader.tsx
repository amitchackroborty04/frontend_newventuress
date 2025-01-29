"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import { Box, Settings } from "lucide-react";
import Link from "next/link";

interface AuctionHeaderProps {
  showAddAuction: boolean;
  setShowAddAuction: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuctionHeader: React.FC<AuctionHeaderProps> = ({ showAddAuction, setShowAddAuction }) => {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] leading-[14.4px]">
        <span className="font-medium">All</span> (20) |
        <span className="text-gradient"> Published (30) | </span>
        <span className="text-gradient"> Draft (30) | </span>
        <span className="text-gradient"> Pending (30) | </span>
        <span className="text-gradient"> Archived (30) </span>
      </div>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="#">
            Bids Settings <Settings />
          </Link>
        </Button>
        <Button onClick={() => setShowAddAuction((prev) => !prev)}>
          {showAddAuction ? "Auction List" : "Add New"} <Box />
        </Button>
      </div>
    </div>
  );
};

export default AuctionHeader;
