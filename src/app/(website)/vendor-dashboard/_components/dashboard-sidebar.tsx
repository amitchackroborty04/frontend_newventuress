"use client";
import { ScrollArea } from "@/components/ui/scroll-area";
import { sidebarContents } from "@/data/vendor-dashboard-data";
import { cn } from "@/lib/utils";
import { LogOutIcon } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import LogOutModal from "../../account/_components/logOutModal";
import DashboardSidebarItem from "./dashboard-sidebar-item";
import Link from "next/link";

const DashSidebar = () => {
  const [showModal, setShowModal] = useState(false);
  const handleLogout = () => {
    setShowModal(true);
  };
  const onModalClose = () => {
    setShowModal(false);
  };

  // bg-gradient-to-b from-[#FFFFFF] to-[#E2EDF6]
  return (
    <>
      <div
        style={{
          backgroundImage: "url('/assets/img/dashboard_sidebar_bg.svg')",
        }}
        className="bg-cover bg-center bg-no-repeat h-screen  w-[218px] 2xl:w-[354px] bg-white rounded-tr-lg shadow-[0px_28px_20px_0px_#0000000D] sticky top-[0px] pt-[20px] -mt-24"
      >
        <ScrollArea className="h-full overflow-y-auto " style={{ scrollbarColor: '#ffffff #F9FAFD' }}>
          <div className="bg-[#F9FAFD] flex justify-center items-center gap-[12px] w-[186px]  2xl:w-[266px] h-[85px] 2xl:h-[95px] shadow-[0px_4px_22px_0px_#D3D8FF99] rounded-[36px] ml-[18px] 2xl:ml-[38px] mt-[32px] mr-[50px] ">
            <Link href="/">
              <Image
                src="/assets/img/dashboard_logo.png"
                alt="dashboard_img"
                width={75}
                height={75}
                className="w-[70px] h-[70px] 2xl:w-[75px] 2xl:h-[75px]"
              />
            </Link>
            <Link href="/">
              <span className="text-[12px] 2xl:text-[15px] font-semibold leading-[18px] text-[#00417E] dark:text-gradient-pink">
                PACIFIC <br />
                RIM <br />
                FUSION
              </span>
            </Link>
          </div>
          <div className="w-full mx-auto space-y-[10px] 2xl:space-y-[16px] pt-[60px]">
            {sidebarContents.map((item) => (
              <DashboardSidebarItem key={item.id} item={item} />
            ))}
          </div>

          <div className="pl-[38px] pt-[206px]">
            <button
              onClick={(e) => {
                {
                  e.preventDefault();
                  handleLogout();
                }
              }}
              className={cn(
                " w-full h-[46px] rounded-[4px] pl-[16px] flex items-center gap-[12px] font-medium text-[18px] leading-[21.4px] transition-colors duration-300 bg-transparent dark:text-gradient-pink text-[#152764] dark:text-gradient-pink hover:text-[#152764] dark:text-[#6841A5] my-[80px]"
              )}
            >
              <LogOutIcon className="w-[16px] h-[16px] " /> Logout
            </button>
          </div>
        </ScrollArea>
      </div>
      {showModal && <LogOutModal onModalClose={onModalClose} />}
    </>
  );
};

export default DashSidebar;
