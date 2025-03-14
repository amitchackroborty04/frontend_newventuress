"use client";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApplicationAs } from "@/hooks/useApplicationAs";
import { useTheme } from "next-themes";

interface Props {
  industry: string;
}

const ThemeSwitcher = ({ industry }: Props) => {
  const { as, modal, setModal } = useApplicationAs();
  const { setTheme } = useTheme();

  // Set theme based on selected tab value
  const handleTabChange = (theme: string) => {
   
    if (theme === "HEMP/CBD") {
    
      setTheme("light");
    } else if (theme === "RECREATIONAL") {

      if(!industry.includes("Recreational Cannabis")) {
        setModal(true);
        return;
      }

      
      
      setTheme("dark");
    }
  };

  return (
    <>
      <Tabs
        defaultValue={as}
        value={as}
        className="bg-transparent"
        onValueChange={handleTabChange}
      >
        <TabsList className="border-[1px] border-[#152764] dark:border-[#6841A5] h-[35px] md:h-[44px] !px-4 md:!px-2">
          <TabsTrigger
            value="HEMP/CBD"
            className="text-[#152764] data-[state=active]:text-white text-[8px] lg:text-base"
          >
            HEMP/CBD
          </TabsTrigger>

          <TabsTrigger
            value="RECREATIONAL"
            className="data-[state=active]:bg-[#4A2E74] text-[#6841A5] data-[state=active]:text-white text-[8px] lg:text-base"
          >
            Recreational
          </TabsTrigger>
        </TabsList>
      </Tabs>

      {/* Modal for restriction message */}
      <Dialog open={modal} onOpenChange={(open) => setModal(open)}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Access Restricted</DialogTitle>
            <DialogDescription>
              You selected <b>HEMP/CBD</b>. If you want to use Recreational Cannabis features, please fill out additional data on your account settings page or contact support for assistance.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="outline" onClick={() => setModal(false)}>Close</Button>
            <Button onClick={() => {/* Redirect to settings if needed */}}>Go to Settings</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default ThemeSwitcher;
