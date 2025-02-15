"use client"
import { Button } from "@/components/ui/button";
import { resetAuthSlice } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import Link from "next/link";
import { redirect } from "next/navigation";

const SignUpOverview = () => {
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

    if(!businessName || !email || !fullName || experiences.length == 0) {
        dispatch(resetAuthSlice());
        redirect("/registration")
    }

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
                <div key={i} className="bg-[#E6EEF6] rounded-[12px] p-[20px] text-[#444444] font-medium text-[20px]">
            <h3>Country - {i + 1}: {item.country}</h3>
           {item?.state && item.state.length >= 1 &&  <h3>State Of {item.country}: {item.state.join(", ")}</h3>}
           {item?.metrcLicense.length >= 1 && <h3>Metrc license No: {item.metrcLicense.join(", ")}</h3>}
            {item?.cannabisLicense.length >= 1 && <h3>Cannabis license No: {item.cannabisLicense.join(", ")}</h3>}
            {item?.businessLicense.length >= 1 && <h3>Metrc license No: {item.businessLicense.join(", ")}</h3>}
            
            
            </div>
            ))}
            
        </div>

        

    </div>
    <Button className="mt-[20px]" asChild>
    <Link href="/login">
    <span>Next →</span></Link></Button></>
  )
}

export default SignUpOverview