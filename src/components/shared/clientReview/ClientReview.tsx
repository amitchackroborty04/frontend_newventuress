"use client";
// package import ==============
import * as React from "react";


// local import --------------
import type { CarouselApi } from "@/components/ui/carousel";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { cn } from "@/lib/utils";
import SectionHeading from "../SectionHeading/SectionHeading";
import { ReviewCard } from "./ReviewCard";
import { useSession } from "next-auth/react";
import { useQuery } from "@tanstack/react-query";
import ErrorContainer from "../ErrorContainer/ErrorContainer";

// Review data this come from Backend **********************


export const 
ClientReviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [api, setApi] = React.useState<CarouselApi>();

  const session = useSession();
  const token = session.data?.user.token;
  // console.log({ token });
  type ClientReviewResponse = {
  success: boolean;
  message: string;
    data: {
      _id: string;
      userID: string;
      rating: number;
      comment: string;
      createdAt: string;
      fullName: string;
      userImage: string;
    }[];
  };

  const { data, isError, error, isLoading } = useQuery<ClientReviewResponse>({
    queryKey: ["clientReview"],
    queryFn: async () => {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/review/user/get`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!response.ok) {
        throw new Error("Network error");
      }
      return response.json();
    },
  });
  

  // console.log("reviews data:", data);
  

  React.useEffect(() => {
    if (!api) {
      return;
    }

    api.on("select", () => {
      setActiveIndex(api.selectedScrollSnap());
    });
  }, [api]);
   
  const totalSlides = data?.data?.length || 0;
  const visibleItems = 3;
  const centerIndex = (activeIndex + Math.floor(visibleItems / 2)) % totalSlides;

  if(isError) {
    return <ErrorContainer message={error.message} />
  }
  if(isLoading) {
    return <div className="container">Loading...</div>
  }

  return (
    <section className="flex flex-col items-center mb-12 mt-[90px]">
      {/* Header Section */}

      <SectionHeading heading={"Our Client Review"} subheading={"Clients says"}/>


      {/*---------------------- Carousel Section ----------------------*/}
      <Carousel
        opts={{ align: "start", loop: true }}
        className="w-full max-w-7xl relative mb-10 p-3 select-none"
        setApi={setApi}
      >
        <CarouselContent>
          {data?.data?.map((review, index) => (
            <CarouselItem
              key={index}
              className="w-full flex justify-center md:basis-1/2 lg:basis-1/3 h-full"
            >
              <div
                className={`m-5 transition-shadow duration-300 rounded-lg ${
                  index === centerIndex ? "drop-shadow-lg" : "shadow-none"
                }`}
                style={{
                  boxShadow:
                    index === centerIndex
                      ? "0px 0px 10px 1px rgba(34, 86, 36, 0.15)"
                      : "none",
                }}
              >
                <ReviewCard {...review} />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute flex justify-between space-x-5 -bottom-10 left-[calc(50%-20px)] w-[40px]">
          <CarouselPrevious className={cn("px-4 py-2 h-[40px] w-[140]  !text-white rounded-full ")} />
          <CarouselNext className="px-4 py-2 h-[40px] w-[140]  !text-white rounded-full " />
        </div>
      </Carousel>
    </section>
  );
};
