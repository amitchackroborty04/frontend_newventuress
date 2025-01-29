import { Button } from "@/components/ui/button";
import Link from "next/link";
import { GiCharacter } from "react-icons/gi";

function StoreListHeader() {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-end">
      <Button asChild>
        <Link href="#">
          Add New <GiCharacter />
        </Link>
      </Button>
    </div>
  );
}

export default StoreListHeader;
