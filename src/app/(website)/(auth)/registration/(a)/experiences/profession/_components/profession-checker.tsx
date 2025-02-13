"use client";

// Packages
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useCallback, useMemo } from "react";
import { useDispatch } from "react-redux";

// Local imports

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { cn } from "@/lib/utils";
import { setRegistrationValue } from "@/redux/features/authentication/AuthSlice";
import { useAppSelector } from "@/redux/store";
import { redirect } from "next/navigation";
import FormHeader from "../../../../_components/form-header";

interface Profession {
  id: string;
  label: string;
}

const professions: Profession[] = [
  { id: "farmmer", label: "Farmer" },
  { id: "cultivator", label: "Cultivator" },
  { id: "processor", label: "Processor" },

  { id: "extractor", label: "Extractor" },
  { id: "distributor", label: "Distributor" },

  { id: "dispensary", label: "Dispensary" },
];

export default function ProfessionChecker() {
  const dispatch = useDispatch();
  const authState = useAppSelector((state) => state.auth);


  // Memoize selectedProfessions to avoid recalculating on every render
  const selectedProfessions = useMemo(() => {
    return Array.isArray(authState.profession) ? authState.profession : [];
  }, [authState.profession]);

  // Handle checkbox changes
  const handleProfessionChange = useCallback(
    (currentProfession: string) => {
      let updatedProfessions: string[];

      if (currentProfession === "all") {
        // Toggle "Select All"
        updatedProfessions = selectedProfessions.length === professions.length + 1
          ? [] // Deselect all if already selected
          : [...professions.map((profession) => profession.id), "all"]; // Select all
      } else {
        const updatedSet = new Set(selectedProfessions);

        if (updatedSet.has(currentProfession)) {
          updatedSet.delete(currentProfession); // Remove the profession
        } else {
          updatedSet.add(currentProfession); // Add the profession
        }

        updatedProfessions = Array.from(updatedSet);

        // If all professions are selected, add "Select All"
        if (updatedProfessions.length === professions.length) {
          updatedProfessions.push("all");
        }

        // If "Select All" is selected but a profession is deselected, remove "Select All"
        if (updatedProfessions.includes("all") && updatedProfessions.length < professions.length + 1) {
          updatedProfessions = updatedProfessions.filter((id) => id !== "all");
        }
      }

      // Dispatch the updated professions to the Redux store
      dispatch(setRegistrationValue({ profession: updatedProfessions }));
    },
    [selectedProfessions, dispatch]
  );



  // check if prev form value not found
  const { industry } = authState;

  // if prev state value not found then start from first

  if (industry.length === 0) {
    redirect("/registration");
  }

// Check if a specific profession or "Select All" is checked
const isChecked = (id: string) => {
  return selectedProfessions.includes(id);
};

// Determine if the button should be disabled
const isButtonDisabled = selectedProfessions.length === 0;

  return (
    <div className="py-[20px] md:py-0">
      <div>
        <div>
          <FormHeader
            label="Sign Up"
            paragraph="Continue to register as a customer or vendor, Please provide the information."
            title="What’s your profession?"
          />

          <div className="space-y-4">
            <div className="grid gap-4">
              {professions.map((profession) => (
                <div
                  key={profession.id}
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id={profession.id}
                    checked={isChecked(profession.id)}
                    onCheckedChange={() =>
                      handleProfessionChange(profession.id)
                    }
                  />
                  <label
                    htmlFor={profession.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {profession.label}
                  </label>
                </div>
              ))}
              <div
                  className="flex items-center space-x-2"
                >
                  <Checkbox
                    id="all"
                    checked={isChecked("all")}
                    onCheckedChange={() =>
                      handleProfessionChange("all")
                    }
                  />
                  <label
                    htmlFor="all"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Select All
                  </label>
                </div>
            </div>
          </div>

          <div className="pt-[40px]">
            <Button
            className={cn(isButtonDisabled && "opacity-50 pointer-events-none")}
            disabled={isButtonDisabled}
              size="md"
              asChild
            >
              <Link
                href="/registration/country"
                className="flex items-center w-auto h-full"
              >
                Next
                <ArrowRight className="ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
