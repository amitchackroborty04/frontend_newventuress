"use client"

import { useEffect, useState } from "react"
import { Check, ChevronDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

type Status = "pending" | "approved" | "one"

export default function StatusDropdown({setState}: {setState: (status: Status) => void}) {
 
  const [status, setStatus] = useState<Status>("pending")

useEffect(() => {
  setState(status)
}, [status, setState])

  return (
    <div className="flex flex-col gap-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="w-[200px] justify-between">
            <span className="capitalize">{status}</span>
            <ChevronDown className="h-4 w-4 opacity-50" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-[200px]">
          <DropdownMenuItem onClick={() => setStatus("pending")}>
            <span className="capitalize">Pending</span>
            {status === "pending" && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setStatus("approved")}>
            <span className="capitalize">Approved</span>
            {status === "approved" && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => setStatus("one")}>
            <span className="capitalize">One</span>
            {status === "one" && <Check className="ml-auto h-4 w-4" />}
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      
    </div>
  )
}

