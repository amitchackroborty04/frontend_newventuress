// locatl  import ==================

// import AboutSection from "@/components/shared/sections/about-section";
import MarketingLandingPage from "@/components/marketingLandingPage/MarketingLandingPage";
// import DealOfTheDay from "./_components/deal_of_the_day";

const Page = async () => {
  // const currentUser = await auth();


  // const loggedin = !!currentUser;

  // const token = currentUser?.user?.token || null

  return (
    // <div>
    //   <div className="min-h-screen ">

    //     <Hero />
    //     <PopularCategories loggedin={loggedin} token={token} />
    //     {/* {!loggedin && <DealOfTheDay />} */}
    //     {/* {!loggedin && (
    //       <AboutSection image="https://utfs.io/f/HkyicnKv4pLkKb11IfnzkrEA5LwVvWx2Fbfe7a6P94u0gcjZ" />
    //     )} */}
    //     {!loggedin && (
    //       <div className="pb-[80px]">
    //         <FAQSection />
    //       </div>
    //     )}

    //     {loggedin && <PopularBlog />}

    //     {loggedin && <ClientReviews />}

    //     {!loggedin && <BestOffer />}
    //   </div>
    // </div>

    <div>
      <MarketingLandingPage />
    </div>
  );
};

export default Page;
