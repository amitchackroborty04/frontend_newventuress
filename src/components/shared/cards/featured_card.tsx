/* eslint-disable @next/next/no-img-element */
"use client";
// package import
import { Heart } from "lucide-react";
import Image from "next/image";

// local import

import { Button } from "@/components/ui/button";
import { Rating } from "@/components/ui/Rating";
import { FeatureCardType } from "@/data/featured";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { useState } from "react";

export default function FeaturedProductCard({
  product,
}: {
  product: FeatureCardType;
}) {
  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlist((prev) => !prev); // Toggle wishlist state
  };

  return (
    <Link
      href={`/products/${product._id}`}
      className="relative mx-auto my-auto flex w-full shrink grow cursor-pointer flex-col self-stretch overflow-hidden rounded-[8px] border border-solid border-gray-200 bg-white p-3 transition-shadow duration-300 hover:shadow-feature_card lg:w-[260px]"
    >
      <div className="overflow-hidden rounded-[8px]">
        <Image
          loading="lazy"
          src={
            "https://images.pexels.com/photos/1466335/pexels-photo-1466335.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          }
          alt="Product image"
          width={300}
          height={100}
          className="z-0 aspect-[1.07] w-full rounded-[8px] object-cover duration-300 hover:scale-105"
        />
      </div>

      {/* ======= add wishlist ========= */}
      <div className="absolute right-[20px] top-5 z-0 flex w-[32px] flex-col">
      <button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();
            handleWishlistToggle();
          }}
          className={`flex gap-2.5 justify-center items-center px-2 bg-white rounded-full   ${isWishlist
              ? " border-none text-white bg-primary"
              : " border-blue-500 text-black hover:bg-hover-gradient dark:hover:bg-pinkGradient hover:text-white"
            }  min-h-[32px] w-[32px]`}
          aria-label="Add to wishlist"
        // className="flex gap-2.5 items-center p-2 w-full h-8 bg-white hover:bg-primary-green rounded-[30px] transition-colors duration-300 group"
        >
          <Heart className="group-hover:fill-white hover:border-0 w-4 h-4" />
        </button>
      </div>
      <div className="z-0 mt-2 flex w-full flex-col">
        <div className="flex w-full flex-col">
          <div className="flex w-full items-center justify-between gap-10">
            <div className="my-auto flex items-center gap-2 self-stretch whitespace-nowrap text-xs leading-tight text-[#E10E0E]">
              <div className="my-auto flex items-center gap-1 self-stretch">
                {/* hot icon  */}
                {/* <Image
                  loading="lazy"
                  width={9}
                  height={9}
                  src="/assets/svg/hot.svg"
                  alt="hot icon"
                  className="object-contain shrink-0 self-stretch my-auto aspect-[0.75] fill-[#E10E0E] w-[9px]"
                /> */}
                <div
                  className={cn(
                    "my-auto text-[12px] font-normal",
                    product.stoke === "In Stock"
                      ? "text-[#2A6C2D]"
                      : "text-red-500",
                  )}
                >
                  {product.stockStatus}
                </div>
              </div>
            </div>
            <div className="my-auto flex items-start gap-1 self-stretch">
              <Rating productId={product._id} />
            </div>
          </div>
          <div className="text-gradient mt-2 text-left text-[16px] font-medium leading-[19.2px]">
            {product.title}
          </div>
          <div className="mt-2 flex items-end gap-1 self-start font-medium leading-tight">
            <div className="self-stretch whitespace-nowrap text-[16px] text-base leading-[19.2px] text-[#1A1A1A]">
              ₿{product.discountPrice}
            </div>
            <div className="self-stretch text-[12px] font-medium leading-[14.4px] text-[#9C9C9C]">
              <span className="line-through">₿{product.selllingPrice}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            e.preventDefault();

            console.log("add to cart");
          }}
          className="mt-[16px] w-full"
          aria-label="Add to cart"
        >
          Add to cart
        </Button>
      </div>
    </Link>
  );
}
