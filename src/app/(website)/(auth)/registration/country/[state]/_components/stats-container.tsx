import { addStateToBusiness, removeStateFromBusiness } from "@/redux/features/authentication/AuthSlice";
import { useAppDispatch, useAppSelector } from "@/redux/store";
import { State } from "@/types/form";
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
      {displayedStates.map((state) => (
        <button
          key={state.name}
          onClick={() => handleSelect(state.name)}
          className={`p-2 md:p-3 border rounded-md transition-colors duration-300 text-[14px] md:text-lg font-medium ${
            myStats?.includes(state.name)
              ? "border-[#B0CBE4] bg-primary text-white"
              : "border-[#B0CBE4]  hover:bg-[#E9EBF8]"
          }`}
        >
          {state.name}
        </button>
      ))}
    </div>
  )
};

export default StateContainer;
