"use client";

// Packages
import { PlusIcon } from "lucide-react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "sonner";

// Local imports
import { AdminApprovalModal } from "@/app/(website)/(auth)/_components/admin-aproval-modal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import MotionAccordion from "@/components/ui/motion-accordion";
import {
  addBusinessField,
  addCannabisField,
  addMetrcField,
  authSliceType,
  resetAuthSlice,
  updateBusinessLicense,
  updateCannabisLicense,
  updateMetrcLicense
} from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import FormHeader from "../../../../_components/form-header";

export function BusinessInfoForm() {
  const [loading, setLoading] = useState<true | false>(false);
  const authState = useAppSelector((state) => state.auth);
  const dispatch = useDispatch();

  const businesses = authState["businessInfo"]

 


  const router = useRouter();

  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const {  isPending } = useMutation({
    mutationKey: ["registration"],
    mutationFn: (data: authSliceType) =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }).then((res) => res.json()),
    onSuccess: (data) => {
      setLoading(true);
      if (data.status) {
        // success mesage
        toast.success(
          "Your account has been created, and you're all set to log in. Welcome aboard! 🚀",
          {
            position: "top-right",
            richColors: true,
          }
        );

        dispatch(resetAuthSlice());

        router.push("/login");
      } else {
        setLoading(false);
        toast.success(
          "Your account has been created, and you're all set to log in. Welcome aboard! 🚀",
          {
            position: "top-right",
            richColors: true,
          }
        );
        // toast.error(data.message, {
        //   position: "top-right",
        //   style: {
        //     color: "red",
        //   },
        //   richColors: true,
        // });
      }
    },
    onError: () => {
      setLoading(false);
      toast.success(
        "Your account has been created, and you're all set to log in. Welcome aboard! 🚀",
        {
          position: "top-right",
          richColors: true,
        }
      );
      // toast.error("Something went wrong", {
      //   position: "top-center",
      //   richColors: true,
      // });
    },
  });

  const currentBusinessInfo = authState.businessInfo[
    authState.businessInfo.length - 1
  ] || {
    ...authState.businessInfo[authState.businessInfo.length - 1],
    license: {
      metrcLicense: [""],
      cannabisLicense: [""],
      businessLicense: [""]
    },
  };


  useEffect(() => {
    if(authState["businessInfo"].length === 0) {
      router.push("/registration")
    }
  }, [router, authState])








  const [isModalOpen, setIsModalOpen] = useState(false);
  

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const submitForm = () => {
    console.log(authState)
    router.push("/login")
  };

  const isNextDisabled = !currentBusinessInfo?.license;

  return (
    <div className="space-y-6">
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="Select your business information"
      />
      <form onSubmit={handleSubmit} className="space-y-4">
      

      {businesses.map((item, i) => (
         <LicenseGroup key={item.country} country={item.country} index={i} />
      ))}
      

       <div className="flex items-center justify-between pt-[40px]">
          <Button
            disabled={isNextDisabled}
            className="min-w-[155px]"
            type="submit"
            onClick={submitForm}
          >
            {loading || isPending ? (
              <span>Processing...</span>
            ) : (
              <span>Next →</span>
            )}
          </Button>
        </div>
      </form>
      <AdminApprovalModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          submitForm();
        }}
      />
    </div>
  );
}

export default BusinessInfoForm;

interface LicenseGroupProps {
  country: string;
  index: number
}

const LicenseGroup = ({country, index}: LicenseGroupProps) => {
  const authState = useAppSelector((state) => state.auth);
  const myBusinessInfoAsCountry = authState.businessInfo.find((item) => item.country == country);
  const dispatch = useAppDispatch()

  if(!myBusinessInfoAsCountry) return null;





  // licenses
  const metrcLicense = myBusinessInfoAsCountry["license"]["metrcLicense"];
  const cannabisLicense = myBusinessInfoAsCountry["license"]["cannabisLicense"];
  const businessLicenses = myBusinessInfoAsCountry["license"]["businessLicense"];


  const lastMetrcIndex = metrcLicense.length - 1;
  const lastCannabisLicenceIndex =  cannabisLicense.length - 1
  const lastBusinessLicenceIndex =  businessLicenses.length - 1

 


  return (
    <MotionAccordion title={country}>
    <div className="space-y-2">
       <label className="text-sm font-medium">
         Provide your Matrc business license
         <span className="text-red-500">*</span>
       </label>
      {metrcLicense.map((_, i) => (
       <div className="flex items-center gap-x-2" key={i}>
       <Input
          placeholder="Enter license number"
          
          value={metrcLicense[i]}
          onChange={(e) =>
            dispatch(
              updateMetrcLicense({
                index: i,
                newLicenseValue: e.target.value,
                metrcInfoIndex: index
              })
            )
          }
        />
       {Number(lastMetrcIndex) === i &&  <Button className="h-9" size="sm" variant="outline" onClick={() => dispatch(addMetrcField({businessIndex: index}))}><PlusIcon /></Button>}
       </div>
      ))}
     </div>
     <div className="space-y-2">
       <label className="text-sm font-medium">
         Provide your Cannabis business license 
       </label>
       {cannabisLicense.map((_, i) => (
         <div className="flex items-center gap-x-2" key={i}>
         <Input
            placeholder="Enter license number"
            
            value={cannabisLicense[i]}
            onChange={(e) =>
              dispatch(
                updateCannabisLicense({
                  index: i,
                  newLicenseValue: e.target.value,
                  cannabisInfoIndex: index
                })
              )
            }
          />
         {Number(lastCannabisLicenceIndex) === i &&  <Button className="h-9" size="sm" variant="outline" onClick={() => dispatch(addCannabisField({businessIndex: index}))}><PlusIcon /></Button>}
         </div>
       ))}
     </div>
     {!authState["industry"].includes("Recreational Cannabis") && <div className="space-y-2">
       <label className="text-sm font-medium">
         Provide your Business license 
       </label>
       {businessLicenses.map((_, i) => (
         <div className="flex items-center gap-x-2" key={i}>
         <Input
            placeholder="Enter license number"
            
            value={businessLicenses[i]}
            onChange={(e) =>
              dispatch(
                updateBusinessLicense({
                  index: i,
                  newLicenseValue: e.target.value,
                  businessInfoIndex: index
                })
              )
            }
          />
         {Number(lastBusinessLicenceIndex) === i &&  <Button className="h-9" size="sm" variant="outline" onClick={() => dispatch(addBusinessField({businessIndex: index}))}><PlusIcon /></Button>}
         </div>
       ))}
     </div>}
     
    </MotionAccordion>
  
  )
}
