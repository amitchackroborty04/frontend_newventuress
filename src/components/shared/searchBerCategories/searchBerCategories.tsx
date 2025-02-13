import Hideon from "@/provider/Hideon";
import Categories from "../categories/categories";
import SearchBer from "../searchBer/searchBer";
import ThemeSwitcher from "./theme-switcher";

function SearchBerCategories() {
  return (
    <Hideon routes={["/vendor-dashboard"]}>
      <div className="bg-[#E6EEF6] dark:bg-[#482D721A] pt-[9px]  md:py-[10px]">
        <div className=" container  flex gap-x-[10px]  lg:gap-x-[20px] justify-between   ">
          <div className="w-[178px] lg:w-[15%]">
            <Categories />
          </div>
          <div className="w-[100%] lg:w-[60%] hidden md:block lg:block">
            <SearchBer />
          </div>
          <div className="  w-[150px]   lg:w-[246px]  ">
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </Hideon>
  );
}

export default SearchBerCategories;
