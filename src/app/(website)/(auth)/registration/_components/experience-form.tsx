"use client";
// Packages
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useDispatch } from "react-redux";

// Local imports
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import FormHeader from "./form-header";

export function ExperienceForm() {
  const dispatch = useDispatch();

  const authState = useAppSelector((state) => state.auth);




  // check if prev form value not found
  const { email, fullName, password } = authState;

  // if prev state value not found then start from first

  if (!email || !fullName || !password) {
    redirect("/registration");
  }

  const handleExperiencChange = (
    type: "CBD/HEMP" | "Recreational Cannabis" | "Select All"
  ) => {
    const currentIndustries = Array.isArray(authState.industry) ? authState.industry : [];
    let updatedIndustries: ("CBD/HEMP" | "Recreational Cannabis" | "Select All")[];
  
    if (type === "Select All") {
      // If "Select All" is clicked, toggle between selecting all or clearing the selection
      updatedIndustries =
        currentIndustries.includes("Select All") // If "Select All" is already selected
          ? [] // Clear all selections
          : ["CBD/HEMP", "Recreational Cannabis", "Select All"]; // Select all industries
    } else {
      // Handle individual industry selection
      if (currentIndustries.includes(type)) {
        // If the industry is already selected, remove it
        updatedIndustries = currentIndustries.filter((industry) => industry !== type);
  
        // If "Select All" is currently selected, remove it when deselecting an individual industry
        if (updatedIndustries.includes("Select All")) {
          updatedIndustries = updatedIndustries.filter((industry) => industry !== "Select All");
        }
      } else {
        // If the industry is not selected, add it
        updatedIndustries = [...currentIndustries, type];
  
        // If both "CBD/HEMP" and "Recreational Cannabis" are now selected, automatically add "Select All"
        if (
          updatedIndustries.includes("CBD/HEMP") &&
          updatedIndustries.includes("Recreational Cannabis")
        ) {
          updatedIndustries = ["CBD/HEMP", "Recreational Cannabis", "Select All"];
        }
      }
    }
  
    // Dispatch the updated industries to the Redux store
    dispatch(setRegistrationValue({ industry: updatedIndustries }));
  };

 // Check if a specific checkbox is checked
 const isChecked = (type: "CBD/HEMP" | "Recreational Cannabis" | "Select All") => {
  return Array.isArray(authState.industry) && authState.industry.includes(type);
};

// Ensure the button is disabled if no industries are selected
const isButtonDisabled = !Array.isArray(authState.industry) || authState.industry.length === 0;

console.log(isButtonDisabled)



  return (
    <div className="py-[20px] md:py-0">
      <FormHeader
        label="Sign Up"
        paragraph="Continue to register as a customer or vendor, Please provide the information."
        title="What do you want to experience?"
      />
      <form className="space-y-6">
        <div className="space-y-4">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="CBD/HEMP"
                checked={isChecked("CBD/HEMP")}
                onCheckedChange={() => handleExperiencChange("CBD/HEMP")}
              />
              <label
                htmlFor="CBD/HEMP"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
              >
                CBD/HEMP
              </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="recreational"
                checked={isChecked("Recreational Cannabis")}
                onCheckedChange={() =>
                  handleExperiencChange("Recreational Cannabis")
                }
              />
              <label
                htmlFor="recreational"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Recreational Cannabis
              </label>
            </div>
            <div className="flex items-center space-x-2 cursor-pointer">
              <Checkbox
                id="both"
                checked={isChecked("Select All")}
                onCheckedChange={() => handleExperiencChange("Select All")}
              />
              <label
                htmlFor="both"
                className="text-[20px] font-medium leading-[24px] peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Select All
              </label>
            </div>
          </div>
        </div>
        <Button className={cn(isButtonDisabled && "opacity-50 pointer-events-none")} disabled={isButtonDisabled} size="md" asChild>
          <Link
            href="/registration/experiences/profession"
            className="flex items-center w-auto h-full"
          >
            Next
            <ArrowRight className="ml-2" />
          </Link>
        </Button>
      </form>
    </div>
  );
}

export default ExperienceForm;
