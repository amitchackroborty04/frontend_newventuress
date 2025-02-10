"use client";

import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useApplicationAs } from "@/hooks/useApplicationAs";
import { useTheme } from "next-themes";

const ThemeSwitcher = () => {
  const { as } = useApplicationAs();
  const { setTheme } = useTheme();

  // Set theme based on selected tab value
  const handleTabChange = (theme: string) => {
    if (theme === "CBD/HEMP") {
      setTheme("light");
    } else if (theme === "RECREATIONAL") {
      setTheme("dark");
    }
  };
  return (
    <Tabs
      defaultValue={as}
      value={as}
      className="bg-transparent "
      onValueChange={handleTabChange}
    >
      <TabsList className="border-[1px] border-[#152764] dark:border-[#6841A5] py-1 h-[44px] w-[204px]   ">
        <TabsTrigger
          value="CBD/HEMP"
          className="text-[#152764] data-[state=active]:text-white  "
        >
          CBD/HEMP
        </TabsTrigger>

        <TabsTrigger
          value="RECREATIONAL"
          className="data-[state=active]:bg-[#4A2E74] text-[#6841A5] data-[state=active]:text-white "
        >
          Recreational
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
