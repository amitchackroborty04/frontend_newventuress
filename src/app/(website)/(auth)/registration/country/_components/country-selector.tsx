// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
"use client"

// Packages
import { VectorMap } from "@react-jvectormap/core"
import { worldMill } from "@react-jvectormap/world"
import { AnimatePresence, motion } from "framer-motion"
import { Loader2, X } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect, useState } from "react"

// Local imports
import { Button } from "@/components/ui/button"
import { countriesData } from "@/data/countries"
import { cn } from "@/lib/utils"
import { addNewBusiness } from "@/redux/features/authentication/AuthSlice"
import { useAppDispatch, useAppSelector } from "@/redux/store"

// Define the countries you want to include
const countries = countriesData.reduce((acc, { countryCode, country }) => {
  acc[countryCode] = country;
  return acc;
}, {});

const disabledColor = "#808080" // Gray color for disabled countries
const colorScale = ["#C8EEFF", "#0071A4", "#008000"] // Green for selected countries

function CountrySelector() {
  const [loading, setLoading] = useState<true | false>(false)

  const [regionColors, setRegionColors] = useState({
    US: 80,
    CA: 100,
    MX: 100,
    DE: 80,
    ES: 100,
    TH: 80,
    NL: 100,
    MT: 80,
    UY: 100,
    CO: 100,
  })

  const [selectedCountries, setSelectedCountries] = useState<string[]>([])

  

  const dispatch = useAppDispatch()
  const router = useRouter()

  const [mapPaths, setMapPaths] = useState(null)

  const authState = useAppSelector((state) => state.auth)

  const businesses = authState.businessInfo;

  const cSelectedCountries = businesses.map((business) => business.country)

  

  // check if prev form value not found
  const { profession } = authState

  // if prev state value not found then start from first

  if (profession.length == 0) {
    router.push("/registration")
  }

  // Dynamically set the map paths after the component has mounted
  useEffect(() => {
    if (worldMill && worldMill.paths) {
      setMapPaths(worldMill.paths)
    }
  }, [])

  useEffect(() => {
    return () => {
      setLoading(false)
    }
  }, [])

  function handleRegionClick(event, code) {
    // If the country is not in the list, prevent interaction by returning early
    if (!countries[code]) {
      return // Disable the click interaction
    }

    const countryName = countries[code] || "Unknown Country"

    setSelectedCountries((prevSelected) => {
      let newSelected
      if (prevSelected.includes(countryName)) {
        // If already selected, remove it
        newSelected = prevSelected.filter((country) => country !== countryName)
      } else if (prevSelected.length < 12) {
        // If not selected and less than 3 countries are selected, add it
        newSelected = [...prevSelected, countryName]
      } else {
        // If 3 countries are already selected, replace the first one
        newSelected = [...prevSelected.slice(1), countryName]
      }

      // Log the selected countries
      console.log("AuthState", authState)

      // Update the clicked region's color (for visual feedback)
      setRegionColors((prevColors) => {
        const newColors = { ...prevColors }
       
        return newColors
      })

      const businessessArray =  newSelected.map((country) => {
        if (country === "United States" || country === "Canada") {
          return {
            country,
            state: [],
            license: [],
          };
        } else {
          return {
            country,
            state: [],
            license: [
              {
                name: country,
                metrcLicense: [""],
                cannabisLicense: [""],
                businessLicense: [""],
              },
            ],
          };
        }
      })

      // Dispatch action to update business list
      dispatch(
        addNewBusiness(
          businessessArray
        ),
      )

      return newSelected
    })

    setLoading(false)
  }



  function handleRemoveCountry(country) {

   const newSelected = businesses.filter((business) => business.country !== country);

   setSelectedCountries(newSelected.map((business) => business.country))

   dispatch(addNewBusiness(newSelected))

  }

  function handleRegionTipShow(event, label, code) {
    const countryName = countries[code] || "Unknown Country"
    label.html(`
      <div style="background-color: black; border-radius: 6px; min-height: 50px; width: 150px; color: white; padding: 10px;">
        <p><b>${countryName}</b></p>
      </div>
    `)
  }

  const isContinueDisble = businesses.length == 0

  const countriesLists = selectedCountries.join("_")

  const redirectUrl =
      selectedCountries.includes("United States") || selectedCountries.includes("Canada")
        ? `/registration/country/${countriesLists}`
        : `/registration/country/${countriesLists}/business_information`;

  

  return (
   <>

<div className="py-4">
  {cSelectedCountries.length > 0 && (
    <div className="mt-4 p-4 border rounded-sm shadow-md bg-gray-100">
      <h3 className="text-lg font-semibold">Selected Countries:</h3>
      <div className="flex flex-wrap gap-2 mt-2">
        {cSelectedCountries.map((country, index) => {
          const isNorthAmerica = ["Canada", "United States", "Mexico"].includes(country);
          return (
            <span
              key={index}
              className={`px-3 py-1 ${
                isNorthAmerica ? "bg-[#007853]" : "bg-[#008000]"
              } text-white rounded-full text-sm flex items-center gap-x-2`}
            >
              {country}:  {isNorthAmerica ? "HEMP/CBD" : "Recreational Cannabis"}
              <span className="bg-white hover:bg-white/80 cursor-pointer text-black rounded-full" onClick={() => handleRemoveCountry(country)}><X className="h-4 w-4" /></span>
            </span>
          );
        })}
      </div>
    </div>
  )}
</div>


 <div>
     <motion.div
   
   exit={{
     opacity: 0,
     transition: {
       duration: 1,
     },
   }}
   style={{
     margin: "auto",
     width: "100%",
     height: "500px",
     position: "relative",
   }}
 >
  
   <AnimatePresence>
     {loading && (
       <motion.div
         initial={{
           opacity: 0,
         }}
         animate={{
           opacity: 1,
           transition: {
             duration: 0.5,
           },
         }}
         exit={{
           opacity: 0,
         }}
         style={{
           position: "absolute",
           top: 0,
           left: 0,
           height: "100%",
           width: "100%",
           backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent black
           zIndex: 100, // Ensure it layers on top of the map
         }}
       >
         <div className="w-full h-full flex justify-center items-center">
           <Loader2 className="animate-spin h-5 w-5 z-50 text-white " />
         </div>
       </motion.div>
     )}
   </AnimatePresence>
   <VectorMap
     map={worldMill}
     containerStyle={{
       width: "700px",
       height: "600px",
     }}
     backgroundColor="#DBDDDF"
     series={{
       regions: [
         {
           scale: colorScale, // Color scale for countries
           values: {
             // Check if mapPaths is available
             ...(mapPaths
               ? Object.keys(mapPaths).reduce((acc, key) => {
                   // If the country code is in the `countries` list, set color to green
                   if (countries[key]) {
                     acc[key] = 100 // Green for selected countries
                   } else {
                     acc[key] = disabledColor // Gray for disabled countries
                   }
                   return acc
                 }, {})
               : {}),
             ...regionColors, // Override the enabled countries' colors (green for selected)
           },
           min: 0,
           max: 100,
         },
       ],
     }}
     onRegionTipShow={handleRegionTipShow}
     onRegionClick={handleRegionClick}
   />


   <div className="mt-4 hidden">
     <h3>Selected Countries:</h3>
     <ul>
       {selectedCountries.map((country, index) => (
         <li key={index}>{country}</li>
       ))}
     </ul>
   </div>
 </motion.div>

 <div>
 <nav className="flex items-center bg-gray-300  gap-6 p-4">
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-[#007853]" />
        <span className="text-slate-600 text-sm"> HEMP/CBD </span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-[#008000]" />
        <span className="text-slate-600 text-sm">Recreational Cannabis</span>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-5 h-5 rounded-full bg-[#ffffff]" />
        <span className="text-slate-600 text-sm">No Service</span>
      </div>
    </nav>

   </div>
   <div className="mt-3 flex justify-end">
    <Button asChild disabled={isContinueDisble}>
      <Link className={cn(isContinueDisble ? "pointer-events-none opacity-70" : "opacity-100", "w-full")} href={redirectUrl} onClick={() => setLoading(true)}>Continue</Link>
    </Button>
   </div>
 </div></>
  )
}

export default CountrySelector

