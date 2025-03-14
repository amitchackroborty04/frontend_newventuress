"use client";
import AuctionCard from "@/components/shared/cards/auction-card/auction-card";
import ErrorContainer from "@/components/shared/ErrorContainer/ErrorContainer";
import NotFound from "@/components/shared/NotFound/NotFound";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import TableSkeletonWrapper from "@/components/shared/TableSkeletonWrapper/TableSkeletonWrapper";
import PacificPagination from "@/components/ui/PacificPagination";
import { AuctionProductResponse } from "@/types/auction";
import { useQuery } from "@tanstack/react-query";
import { useSession } from "next-auth/react";
import { useState } from "react";


const AllLiveAuctionContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const session = useSession();
  const token = session.data?.user.token;
  console.log({ token });

  const { data, isError, isLoading, error } = useQuery<AuctionProductResponse>({
    queryKey: ["all-auctions", currentPage],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/auction/all?page=${currentPage}&limit=8`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }).then((res) => res.json()),
  });


  const liveAuctionsData = data?.data?.filter((liveAuction) => {
    const auctionEndTime = new Date(liveAuction.endingDateAndTime).getTime(); 
    return auctionEndTime > Date.now();
  });

  let content;


  if(isLoading) {
   content = (
     <div className="container ">
       <TableSkeletonWrapper count={8} width="100%" height="320px" className="bg-[#b4b3b3] md:col-span-1"/>
     </div>
   )
  }
  else if(isError){
   content = (
     <div className="container">
       <ErrorContainer message={error?.message || "something went wrong"}/>
     </div>
   )
  }
  else if(data && data?.data && data?.data?.length === 0){
   content = (
     <div className="container">
       <NotFound message="Oops! No data available. Modify your filters or check your internet connection."/>
     </div>
   )
  }
  else if (data && data?.data &&data?.data?.length > 0){
   content = (
       <div className="mt-[40px] grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-[30px] container">
         {liveAuctionsData?.map((auction, index) => (
         <AuctionCard key={auction._id} auction={auction} index={index} />
       ))}
       </div>
   )
  }


  return (
    <div className="mb-[70px] mt-[40px]">
      <SectionHeading heading="Our Live Auctions" subheading="" />
      {content}
      <div className="mt-[40px]">
        {
          data?.pagination && data?.pagination?.totalPages > 1 && (
            <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={data?.pagination?.totalPages}
        />
          )
        }
      </div>
    </div>
  );
};

export default AllLiveAuctionContainer;
