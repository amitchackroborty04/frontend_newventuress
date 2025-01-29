
import AnalyticsChart from "../_components/analytics-chart";
import DashboardOverview from "../_components/dashBoardOverview";
import MostSoldItems from "../_components/MostSoldItems";
import GeoChart from "../_components/TopUserCountries";
import ReportsFilter from "./_component/ReportsFilter";



const Page = () => {
 
  return (
    <div className="w-full px-5 ">
<ReportsFilter/>

{/* Title  */}
    <div className="bg-primary px-[32px] py-[20px] h-[78px] rounded-t-[24px] mb-[30px]">
      <h1  className="text-white text-[28px] font-semibold">Reports</h1>
    </div>

      {/* Dashboard Overview Section */}
      <section>
       
        <DashboardOverview />
      </section>

      {/* Main Content Grid */}
      <div className="w-full mx-auto grid grid-cols-6 gap-8 my-[30px]">
        {/* Geo Chart Component */}
        <GeoChart />
        
        {/* Right Column for Most Sold Items and Analytics */}
        <div className="w-full col-span-2">
          <MostSoldItems />
          <AnalyticsChart />
        </div>
      </div>

      
    </div>
  );
};

export default Page;
