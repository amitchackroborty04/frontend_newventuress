"use client"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { resetAuthSlice } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { AdminApprovalModal } from "../../../_components/admin-aproval-modal";

const SignUpOverview = () => {
  const [isModalOpen, setIsModalOpen] = useState(false)
    const authState = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch()

    const businessName = authState.businessName;
    const email = authState.email;
    const fullName = authState.fullName;
    const experiences = authState.industry;
    const businessInfos = authState.businessInfo




    const licenses = businessInfos.flatMap(entry =>
        entry.license.map(lic => ({
          name: lic.name,
          country: entry.country,
          metrcLicense: lic.metrcLicense,
          cannabisLicense: lic.cannabisLicense,
          businessLicense: lic.businessLicense,
          state: entry.state
        }))
      );

      useEffect(() => {
        if (!businessName || !email || !fullName || experiences.length === 0) {
          dispatch(resetAuthSlice());
          redirect("/registration")
        }
      }, [businessName, email, fullName, experiences, dispatch]);

  return (
    <>
    <div className="w-full border-[#162866] border-[1px] rounded-[20px] p-[20px] mt-[40px]">
        <div className="text-[#444444] font-medium text-[20px] grid grid-cols-2 gap-x-[30px] gap-y-[20px]">
        <h3>Business Name: {businessName}</h3>
        <h3>Email address: {email}</h3>
        <h3>Full Name: {fullName}</h3>
        <h3>Experience: {experiences.filter((item) => item !== "Select All").join(", ")}</h3>
        </div>

        <div className="mt-[20px] grid grid-cols-1 md:grid-cols-2 gap-y-[20px] gap-x-[30px]">
            {licenses.map((item, i) => (
                <div key={i} className="bg-[#E6EEF6] rounded-[12px] p-[20px] text-[#444444] font-medium text-[17px]">
            <div className="flex items-start justify-between">
            <div>
            <h3>Country - {i + 1}: {item.country}</h3>
           {item?.state && item.state.length >= 1 &&  <h3>State Of {item.country}: {item.state.join(", ")}</h3>}
           {item?.metrcLicense.length > 0 && <h3 className="flex items-center gap-x-4 flex-wrap">Metrc license No: {item.metrcLicense.join(", ")} <CustomBadge className="text-[#16A34A] bg-[#F0FDF4]">Pending</CustomBadge></h3>}
            {item?.cannabisLicense.length > 0 && <h3 className="flex items-center gap-x-4 flex-wrap">Cannabis license No: {item.cannabisLicense.join(", ")} <CustomBadge  className="text-[#CA8A04] bg-[#FEFCE8]">Auto Approved</CustomBadge></h3>}
            {item?.businessLicense.length > 0 && <h3>Business license No: {item.businessLicense.join(", ")}</h3>}
              </div>

            {/* <Badge >Pending</Badge> */}
              </div>
            
            
            </div>
            ))}
            
        </div>

        

    </div>
    <Button className="mt-[20px]" onClick={() => {
      setIsModalOpen(true);
      dispatch(resetAuthSlice())
    }}>
    <span>Next →</span></Button> <AdminApprovalModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
        }}
      /></>
  )
}

export default SignUpOverview


interface CustomBadgeProps {
  children: string;
  className?:string
}

const CustomBadge = ({children, className}: CustomBadgeProps) => {
  return (
    <div  className={cn(className, "text-[8px]  rounded-full px-2 py-1")}>
     {children}
    </div>
  )
}