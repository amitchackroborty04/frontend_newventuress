import { Skeleton } from "@/components/ui/skeleton";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export function AuctionDetailsSkeleton() {
    return (
        <section className=" container">
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-wrap gap-8 w-full">
                    {/* Left Side - Images */}
                    <div className="flex flex-col gap-3 ">
                        <Skeleton className="h-[180px] w-[180px] rounded-md" />
                        <Skeleton className="h-[180px] w-[180px] rounded-md" />
                        <Skeleton className="h-[180px] w-[180px] rounded-md" />
                        
                    </div>

                    {/* Main Image */}
                    <div className="flex justify-center w-[40%]">
                        <Skeleton className="h-[570px] w-[400px] rounded-lg" />
                    </div>

                    {/* Right Side - Product Details */}
                    <div className="flex flex-col grow min-w-[240px] w-[30%] gap-4">
                        <Skeleton className="h-10 w-3/4" /> {/* Title */}
                        <Skeleton className="h-6 w-24" /> {/* Rating */}
                        <Skeleton className="h-5 w-3/4" /> {/* Short Description */}

                        {/* Countdown Timer */}
                        <Skeleton className="h-14 w-52 rounded-lg" />

                        {/* Store Info */}
                        <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                                <Skeleton className="h-6 w-6 rounded-full" />
                            </Avatar>
                            <Skeleton className="h-5 w-32" />
                        </div>

                        {/* Bidding Input */}
                        <div className="flex flex-col max-w-[400px] pt-[25px]">
                            <Skeleton className="h-6 w-32" /> {/* Label */}
                            <div className="flex justify-between mt-2 w-full h-12 rounded-md border border-neutral-400">
                                <Skeleton className="h-12 w-12 rounded-l-md" />
                                <Skeleton className="h-12 flex-1 rounded-r-md" />
                            </div>
                        </div>

                        {/* Buttons */}
                        <div className="flex gap-4 mt-6">
                            <Skeleton className="h-12 w-12 rounded-md" /> {/* Wishlist Button */}
                            <Button disabled className="w-full h-12">Bid Now</Button>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="flex flex-col items-center mt-10 w-full text-center">
                    <Skeleton className="h-6 w-32" /> {/* "Description" Title */}
                    <Skeleton className="h-24 w-full mt-2 rounded-md" />
                </div>
            </div>
        </section>
    );
}
