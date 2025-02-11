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
      <TabsList className="border-[1px] border-[#152764] dark:border-[#6841A5] w-[200px] h-[44px]  lg:w-[254px] py-1">
        <TabsTrigger
          value="CBD/HEMP"
          className="text-[#152764] data-[state=active]:text-white  text-sm lg:text-base w-[100px] lg:w-[120px]"
        >
          CBD/HEMP
        </TabsTrigger>

        <TabsTrigger
          value="RECREATIONAL"
          className="data-[state=active]:bg-[#4A2E74] text-[#6841A5] data-[state=active]:text-white text-sm lg:text-base w-[93px] lg:w-[120px] sm:px-2"
        >
          Recreational
        </TabsTrigger>
      </TabsList>
    </Tabs>
  );
};

export default ThemeSwitcher;
