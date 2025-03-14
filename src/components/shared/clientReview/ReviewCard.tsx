// package import =========
import Image from "next/image";
import * as React from "react";

// local import ------------
import { Card, CardContent } from "@/components/ui/card";
import { StarRating } from "./StarRating";
import { ReviewCardProps } from "./types";


export const ReviewCard: React.FC<ReviewCardProps> = ({
      
      rating,
      comment,
      fullName,
      userImage,
}) => {
  console.log(userImage)
  return (
    <Card className="flex-1 min-w-[370px] w-[202px]">
      <CardContent className="p-4">
        <div className="flex gap-5 items-center w-full">
          <div className="flex flex-1 gap-2 items-center">
          <Image
            src={userImage || ""}
            width={50}
            height={50}
            alt="Picture of the author"
          />
            <div className="flex flex-col">
              <span className="text-base font-medium text-zinc-900">{fullName}</span>
              {/* <span className="text-sm text-neutral-400">{role}</span> */}
            </div>
          </div>
          <StarRating rating={rating} />
        </div>
        <div className="mt-4 text-base font-medium leading-5 text-center text-green-900">
          {/* <p className="mb-2 text-gradient dark:text-gradient-pink">{title}</p> */}
          <p className="text-gradient text-sm dark:text-gradient-pink line-clamp-5">{comment}</p>
        </div>
      </CardContent>
    </Card>
  );
};