import { State } from "@/data/registration";
import { addStateToBusiness, removeStateFromBusiness } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { Star } from "lucide-react";
const StateContainer = ({
  displayedStates,
  
  country
}: {
  displayedStates: State[];
  country: string
}) => {

  const dispatch = useAppDispatch()

  const businessInfos = useAppSelector((state) => state.auth.businessInfo);
  const business = businessInfos.find((item) => item.country == country);
  const myStats = business?.state


  

  const handleSelect = (state: string) => {
    const isSelected = business?.state?.includes(state);


    if(!isSelected) {
      dispatch(addStateToBusiness({
        country: country,
        stateName: state
      }));

      return;
    }

    // remove
    dispatch(removeStateFromBusiness({
      country: country,
        stateName: state
    }))
   

  }


  return (
    <div className="flex gap-4 flex-wrap justify-center">
      {displayedStates.map((state) => {
       const isOnlyHempCBD = state.allow.length === 1 && state.allow.includes("CBD/HEMP");

        return <button
        key={state.name}
        onClick={() => handleSelect(state.name)}
        className={`p-2 md:p-3 border rounded-md transition-colors flex items-center gap-x-3 duration-300 text-[14px] md:text-[14px] font-medium ${
          myStats?.includes(state.name)
            ? "border-[#B0CBE4] bg-primary dark:bg-pinkGradient text-white"
            : "border-[#B0CBE4] dark:border-[#6841A5] dark:text-gradient-pink hover:bg-[#E9EBF8]"
        }`}
      >
        {state.name} {isOnlyHempCBD && <Star fill="#2387b4" className="text-[#2387b4] h-4 w-4" />}
      </button>
      })}
    </div>
  )
};

export default StateContainer;
