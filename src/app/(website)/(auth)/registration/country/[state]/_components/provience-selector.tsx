"use client";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { getRegionByCountry } from "@/data/countries";
import { canadaProvinces, usStates } from "@/data/registration";
import { cn } from "@/lib/utils";
import { useAppSelector } from "@/redux/store";
import Link from "next/link";
import { redirect } from "next/navigation";
import StateHeader from "./State-Header";
import StateContainer from "./stats-container";


interface Props {
  currentState: string;
  countries: string[]
}

/** NextButton Component */
const NextButton = ({

  currentState,
  isUsa,
  isCanada

}: {
  currentState: string;
  isUsa?: boolean;
  isCanada?: boolean
}) => {

  // Selectors for USA and Canada states
  const businessInfo = useAppSelector((state) => state.auth.businessInfo);

  // Ensure the correct states are retrieved based on the country flag
  const usaStats = isUsa
    ? businessInfo.find((item) => item.country === "United States")?.state || []
    : [];

  const canadaStats = isCanada
    ? businessInfo.find((item) => item.country === "Canada")?.state || []
    : [];

  // Determine if the button should be disabled (example logic placeholder)
  const isDisabled = (!usaStats.length && isUsa) || (!canadaStats.length && isCanada);






  return (
    <div className="flex justify-end w-full mt-16">
      <Button disabled={isDisabled} className="w-fit md:min-w-[155px] h-full text-[14px]" asChild >
        <Link
          href={`/registration/country/${currentState}/business_information`}
          className={cn(isDisabled ? "opacity-50 pointer-events-none" : "", "w-[155px]")}
        >
          Next →
        </Link>
      </Button>
    </div>
  )
};

/** Main StateSelector Component */
export function ProvienceSelector({ currentState, countries }: Props) {

  const isEmptyPreviousField = useAppSelector((state) => state.auth.profession.length === 0);
  const authstate = useAppSelector((state) => state.auth)

  const business = authstate.businessInfo







  if (isEmptyPreviousField) {
    redirect("/registration")
  }


  const isUs = countries.includes("United States");
  const isCA = countries.includes("Canada");






  const BreadCumb = (
    <>
      {business.map(({ country, state }) => {
        const continent = getRegionByCountry(country)
        return (
          <div className="flex items-center gap-x-5 text-[14px] text-gradient dark:text-gradient-pink" key={country}>
            Region:  <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>{continent}</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>{country}</BreadcrumbLink>
                </BreadcrumbItem>
                {state && state.length > 0 && <><BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>{state?.join(", ")}</BreadcrumbPage>
                  </BreadcrumbItem></>}
              </BreadcrumbList>
            </Breadcrumb></div>
        )
      })}</>
  )





  return (
    <div className="flex flex-col items-start w-full max-w-6xl mx-auto px-4 space-y-[70px]">


      <div className="my-5">
        {BreadCumb}
      </div>


      {isUs && <div>
        <StateHeader country="USA" />
        <StateContainer
          country="United States"
          displayedStates={usStates}
        /></div>}
      {isCA && <div> <StateHeader country="Canada" /> <StateContainer
        country="Canada"
        displayedStates={canadaProvinces}
      /></div>}
      <NextButton currentState={currentState} isCanada={isCA} isUsa={isUs} />
    </div>
  );
}

export default ProvienceSelector; 
