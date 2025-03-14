"use client";
import StoreHeading from "@/app/(website)/vendor-store/[id]/about/_components/storeHeading";
import VendorReviewCard from "@/components/shared/cards/VendorReviewCard";
import NotFound from "@/components/shared/NotFound/NotFound";
import StoreReviewSkeleton from "@/components/storereviewsSkeleton/StoreReviewSkeleton";
import ErrorContainer from "@/components/ui/error-container";
import { StoreReviewsResponse } from "@/types/storeReviews";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";

const VendorReviews = () => {
  
  const params = useParams();
  const reviewsid = params?.id;
  console.log("Product ID:", reviewsid);


  

  const { data, isError, isLoading, error } = useQuery<StoreReviewsResponse>({
    queryKey: ["storeReviews"],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/store/view/${reviewsid}`);
      if (!res.ok) throw new Error("Failed to fetch data");
      return res.json();
    },
  });

  console.log(data);

  let content;
  if (isLoading) {
    content = (
      <div className="container ">
        <StoreReviewSkeleton/>
      </div>
    )
  }
  else if (isError) {
    content = (
      <div className="container">
        <ErrorContainer message={error?.message || "something went wrong"} />
      </div>
    )
  }
  else if (data && data?.data && data?.data?.length === 0) {
    content = (
      <div className="container">
        <NotFound message="Oops! No data available. Modify your filters or check your internet connection." />
      </div>
    )
  }
  else if (data && data?.data) {
    content = (
      <div>
        {data?.data.map((review, index) => (
          <div key={index} className="border-b-[1px] border-[#C5C5C5]  last:border-none ">
            <VendorReviewCard
              key={index}
              imageSrc={''}
              name={review.comment}
              date={review.createdAt}
              rating={review.rating}
              review={review.comment}
              storeName={review.comment}
            />
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="w-full lg:w-[870px] border-[1px] border-[#C5C5C5] rounded-[12px]">
      <div className="py-5 pl-5 border-b-[1px] border-[#C5C5C5]">
        <StoreHeading heading="About My Store" />
      </div>

     
      <div className=" px-5 ">
        {content}
      </div>
    </div>
  );
};

export default VendorReviews;
