"use client";

// Packages
import { useQuery } from "@tanstack/react-query";

// Local imports
import ErrorContainer from "@/components/ui/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { MembershipPlanType } from "@/types/membership";
import PlansCard from "./plansCard";

const PlansContainer = () => {
  const { data, isLoading, isError, error } = useQuery<MembershipPlanType[]>({
    queryKey: ["MembershipList"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/memberships`).then(
        (res) => res.json()
      ),
  });

  let content;

  if (isLoading) {
    content = (
      <div className="grid grid-cols-3 gap-[30px]">
        {[1, 2, 3].map((n) => (
          <SkeletonWrapper isLoading={isLoading} key={n}>
            <div className="w-full mx-auto">
              <PlansCard
                data={{
                  __v: 0,
                  _id: "324324",
                  planType: "fsdf",
                  createdAt: new Date(),
                  description: "fsdf",
                  numberOfAuction: 0,
                  numberOfBids: 50,
                  price: 432,
                  updatedAt: new Date(),
                }}
              />
            </div>
          </SkeletonWrapper>
        ))}
      </div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error?.message} />;
  } else if ((data ?? []).length > 0) {
    content = (
      <div className="grid grid-cols-3 gap-[30px]">
        {data?.map((item) => (
          <div className="w-full mx-auto" key={item._id}>
            <PlansCard data={item} />
          </div>
        ))}
      </div>
    );
  }

  return content;
};

export default PlansContainer;
