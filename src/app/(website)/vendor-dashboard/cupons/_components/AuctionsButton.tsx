
"use client"
import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import { Button } from "@/components/ui/button";
import { MoreHorizontal } from "lucide-react";




const AuctionsButton = ({ row }: any) => {
//   const [showModal, setShowModal] = useState(false); // Modal visibility state
 
  console.log(row);



  
  return (
    <div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="h-8 w-8 p-0 focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:hover:bg-[#482D721A]"
          >
            <MoreHorizontal className="h-4 w-4 dark:!text-[#6841A5]" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-white h-auto w-[110px] rounded-lg shadow-[4px_4px_8px_0px_#0000000D,-4px_-4px_8px_0px_#0000000D]"
        >
          <DropdownMenuItem
            //   onClick={handleEdit}
           
           
            className="p-[8px] hover:bg-[#E6EEF6] cursor-pointer dark:!text-[#6841A5] rounded-t-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 dark:hover:bg-[#482D721A] "
          > 
            Edit
          </DropdownMenuItem>
          
          <DropdownMenuItem
            //   onClick={handleDelete}s
            className="p-[8px] text-red-600 cursor-pointer dark:hover:bg-[#482D721A] hover:bg-[#E6EEF6] rounded-b-[8px] focus:outline-none focus:ring-0 focus-visible:ring-0 focus-visible:ring-offset-0 c"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

  

    </div>
  );
};

export default AuctionsButton;
