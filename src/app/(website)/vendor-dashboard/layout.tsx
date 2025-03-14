import { ReactNode } from "react";
import DashNav from "./_components/dashboard-navbar";
import DashSidebar from "./_components/dashboard-sidebar";

export default async function VendorDashboardLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="bg-[#E6EEF6] dark:bg-[#482D721A]">
      <DashNav />
      <div className="flex items-start h-full">
        <DashSidebar />
        <div className="px-[20px] pt-[20px] 2xl:px-[30px] 2xl:pt-[30px] w-full">{children}</div>
      </div>
    </div>
  );
}
