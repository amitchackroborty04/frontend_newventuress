import dynamic from "next/dynamic";
import AuthUIProvider from "../../_components/provider/AuthUIProvider";



// const CountrySelector = dynamic(
//   () => import("./_components/country-selector"),
//   { ssr: false }
// );


const TestCountry = dynamic(
  () => import("./_components/TestCountry"),
  { ssr: false }
);

const Page = () => {
  return (
    <AuthUIProvider
      sidebarImage="https://i.postimg.cc/QCCySSfp/image-9.png"
      fullWidth
    >
      <h1 className="text-[36px] font-semibold leading-[43.2px] text-primary text-center ">
      Select Your Country Locations
      </h1>
      <p className="text-[12px] leading-[14.4px] font-normal text-[#6D6D6D] text-center mb-[30px]">
      Choose one or more locations you are in
      </p>
      {/* <CountrySelector /> */}


      <div className="pb-[500px]">
      <TestCountry/>
      </div>

    </AuthUIProvider>
  );
};

export default Page;
