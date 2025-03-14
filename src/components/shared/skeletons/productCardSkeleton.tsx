"use client"

import { Button } from "@/components/ui/button"
import { Skeleton } from "@/components/ui/skeleton"

export default function ProductCardSkeleton() {
  return (
    <div
      className="relative mx-auto my-auto flex w-full shrink grow cursor-pointer flex-col self-stretch overflow-hidden rounded-[8px] border border-solid border-gray-200 bg-white p-3 transition-shadow duration-300 hover:shadow-feature_card md:w-[260px]"
    >
      <div className="overflow-hidden rounded-[8px]">
        <Skeleton className="aspect-[1.07] w-full h-[200px] rounded-[8px]" />
      </div>

      {/* Wishlist button skeleton */}
      <div className="absolute right-[20px] top-5 z-0 flex w-[32px] flex-col">
        <Skeleton className="h-8 w-8 rounded-full" />
      </div>

      <div className="z-0 mt-2 flex w-full flex-col">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between gap-10">
            <Skeleton className="h-4 w-20" />
            <Skeleton className="h-4 w-16" />
          </div>
          <Skeleton className="mt-2 h-5 w-full" />
          <div className="mt-2 flex items-end gap-1 self-start">
            <Skeleton className="h-5 w-16" />
            <Skeleton className="h-4 w-12" />
          </div>
        </div>
        <Button disabled className="mt-[16px] w-full disabled:opacity-10">
          Add to cart
        </Button>
      </div>
    </div>
  )
}

