import Link from "next/link";

function CustomerListHeader() {
  return (
    <div className="flex h-[80px] w-full items-center rounded-[12px] bg-white p-[8px]">
      <div className="so px-[10px] text-[12px] leading-[14.4px]">
        <Link href="#" className="font-medium text-[#444444]">
          All (20)|  
        </Link>
        
        <Link href="#" className="text-gradient dark:text-gradient-pink">
           Published (30) |
        </Link>
        <Link href="#" className="text-gradient dark:text-gradient-pink">
          Draft (30) |
        </Link>
        <Link href="#" className="text-gradient dark:text-gradient-pink">
          Pending (30) |
        </Link>
        <Link href="#" className="text-gradient dark:text-gradient-pink">
          Archived (30)
        </Link>
      </div>
    </div>
  );
}

export default CustomerListHeader;
