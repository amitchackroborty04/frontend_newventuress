import { Button } from "@/components/ui/button";
import { Box } from "lucide-react";
import Link from "next/link";

const MembershipHeader = () => {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-between">
      <div className="px-[10px] text-[12px] leading-[14.4px]">
    
      </div>
      <div>
        <Button asChild>
          <Link href="/">
            Add New <Box />
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default MembershipHeader;
