import React from "react";
import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";

interface AuctionsHeaderProps {
  showAddAuction: boolean;
  setShowAddAuction: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuctionsHeader: React.FC<AuctionsHeaderProps> = ({ showAddAuction, setShowAddAuction }) => {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] leading-[14.4px]">
        <span className="font-medium text-[#444444]  ">All (20)|</span>  
        <span className="text-gradient dark:text-gradient-pink"> Published (30) | </span>
        <span className="text-gradient dark:text-gradient-pink"> Draft (30) | </span>
        <span className="text-gradient dark:text-gradient-pink"> Pending (30) | </span>
        <span className="text-gradient dark:text-gradient-pink"> Archived (30) </span>
      </div>
      <div>
        <Button onClick={() => setShowAddAuction((prev) => !prev)}>
          {showAddAuction ? "Auction List" : "Add New"} <Box />
        </Button>
      </div>
    </div>
  );
};

export default AuctionsHeader;
