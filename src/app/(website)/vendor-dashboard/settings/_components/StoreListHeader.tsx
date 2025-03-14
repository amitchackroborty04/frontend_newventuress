import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";

function StoreListHeader({ setShowForm, showForm }: { setShowForm: React.Dispatch<React.SetStateAction<boolean>>, showForm: boolean }) {
  return (
    <div className="h-[80px] w-full bg-white p-[8px] rounded-[12px] flex items-center justify-end">
      
      <Button onClick={() => setShowForm((prev) => !prev)}>
          {showForm ? "Store List" : "Add New"} <Plus />
        </Button>
    </div>
  );
}

export default StoreListHeader;
