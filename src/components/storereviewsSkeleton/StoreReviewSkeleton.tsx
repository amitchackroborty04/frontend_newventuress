import { Skeleton } from "@/components/ui/skeleton";
import { LuBox } from "react-icons/lu";


const StoreReviewSkeleton = () => {
    return (
        <div className="mt-5 pb-6">
            {/* Profile Image and User Info */}
            <div className="flex items-center gap-x-[8px] lg:gap-x-[12px]">
                <Skeleton className="w-[52px] h-[52px] lg:h-[80px] lg:w-[80px] rounded-full" />

                <div>
                    {/* Name and Date */}
                    <div className="flex">
                        <Skeleton className="w-[120px] h-[24px] lg:h-[30px] rounded-md" />
                        <Skeleton className="w-[80px] h-[16px] lg:h-[19px] ml-[6px] rounded-md" />
                    </div>

                    {/* Rating Section */}
                    <div className="flex gap-x-1 mt-2 lg:mt-4">
                        <Skeleton className="w-[20px] h-[20px] rounded-md" />
                        <Skeleton className="w-[50px] h-[19px] rounded-md" />
                    </div>
                </div>
            </div>

            {/* Review Text */}
            <Skeleton className="w-full h-[60px] lg:h-[80px] mt-5 rounded-md" />

            {/* Store Name */}
            <div className="flex items-center gap-x-[6px] mt-5">
                <LuBox className="text-xl text-[#2A6C2D]" />
                <Skeleton className="w-[100px] h-[19px] rounded-md" />
            </div>
        </div>
    );
};

export default StoreReviewSkeleton;
