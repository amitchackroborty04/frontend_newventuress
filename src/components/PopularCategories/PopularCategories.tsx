"use client";
// local import
import OurAuction from "@/app/(website)/_components/our_auction";
import OurFeatureSection from "@/app/(website)/_components/our_feature_section";
import FindFavourite from "../../app/(website)/_components/FindFavourite";
import SectionHeading from "../shared/SectionHeading/SectionHeading";
import PopularCategoriesCard from "../shared/cards/PopularCategoriesCard";

interface Props {
  loggedin: boolean;
  token: string | null
}

const PopularCategories = ({ loggedin, token }: Props) => {
  return (
    <div className=" pt-[54px]  pb-[40px] md:pb-[100px] section rounded-[16px]  lg:rounded-[52px] bg-[#E6EEF6] dark:bg-[#482D721A]">
      <SectionHeading
        subheading="Popular categories"
        heading="Shop By Popular categories"
      />

      {/*================= cardd ========================= */}
      <div className="container mx-auto pt-[20px] md:pt-[30px] mb-[40px] lg:mb-[85px]">
        <PopularCategoriesCard token={token}/>
      </div>

      {/*///////////// find favourite if user not found then show it ///////////////////// */}
      {!loggedin && (
        <div className="container ">
          <FindFavourite />
        </div>
      )}

      {loggedin && (
        <>
          <OurFeatureSection token={token} />
          <OurAuction token={token} />
        </>
      )}
    </div>
  );
};

export default PopularCategories;
