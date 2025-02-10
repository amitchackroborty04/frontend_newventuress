// package import 
import { Check, Heart, Minus, Plus } from "lucide-react";
import Image from "next/image";
import { StarRating } from "../clientReview/StarRating";
import { CartItem } from "@/types/cart";
import { useState } from "react";
interface CartItemProps {
  item: CartItem;
  onUpdateQuantity: (id: string, quantity: number) => void;
  onRemove: (id: string) => void;
  icon: JSX.Element;
}

export function CartItemCard({
  item,
  onUpdateQuantity,
  onRemove,
}: CartItemProps) {

  const [isWishlist, setIsWishlist] = useState(false);

  const handleWishlistToggle = () => {
    setIsWishlist((prev) => !prev);
  };
  return (
    <div className="flex flex-col  gap-[16px] rounded-lg p-[12px] border border-gray-200">
      <div className="sm:flex gap-4 ">
        
        <div className="relative h-[181px] lg:h-[127px] w-full md:w-[294px] lg:w-[194px] rounded-[8px]">
          <Image
            src={item?.image}
            alt={item?.name}
            // width={194}
            // height={127}
            fill
            className="rounded-lg object-cover h-full w-full"
          />
          <button
            onClick={(e) => {
              e.stopPropagation();
              e.preventDefault();
              handleWishlistToggle();
            }}
            className={`absolute top-2 right-2 flex gap-2.5 justify-center items-center px-2 bg-white rounded-full ${isWishlist
              ? " border-none text-white bg-primary"
              : " border-blue-500 text-black hover:bg-hover-gradient dark:hover:bg-pinkGradient hover:text-white dark:hover:text-white dark:!text-[#ffffff]"
              }  min-h-[32px] w-[32px]`}
            aria-label="Add to wishlist"
          >
            <Heart className="group-hover:fill-white hover:border-0 w-4 h-4 dark:text-black dark:!hover:text-white" />
          </button>
        </div>
        <div className="flex-1 space-y-1 pt-2 flex flex-col justify-evenly">
          <div className="flex items-start justify-between">
            <div>
              <StarRating className="w-[14px] h-[14px] pb-[5px] -ml-1" rating={item.rating} activeColor="fill-amber-500 text-amber-500" inactiveColor="fill-stone-300 text-stone-300" />
              <p className={`text-xs font-normal leading-[14px] pb-[4px] ${item.stock === "Out of Stoke" ? "text-[#E10E0E]" : "text-[#2A6C2D]"}`}>{item.stock}</p>
              <h3 className="text-base leading-[19px] font-medium text-gradient dark:text-gradient-pink">{item.name}</h3>

            </div>
            <div className="flex items-center md:-mt-3 py-1 rounded">
              <span className="text-xs border dark:border-[#0000001f] rounded-xl flex items-center gap-2 px-2 py-1 dark:text-black">
                <Check className="w-3 h-3" />
                In stock
              </span>
            </div>
          </div>
          <div className="flex items-end justify-between pt-[4px]">
            <div className="flex items-center gap-2">
              <div className="text-base leading-[19px] font-medium text-[#1A1A1A]">
                ₿{item.price.toLocaleString()}
              </div>
              <div className="text-sm font-medium leading-[14px] text-[#9C9C9C] line-through">
                ₿{item.originalPrice.toLocaleString()}
              </div>
            </div>
          </div>
          {/* shadow-[-4px_-4px_8px_0px_#0000000D] */}
          <div className=" flex items-center justify-between gap-4 mt-[8px]">
            {/* quantity buttons */}
            <div className="w-[163px] h-[32px] flex justify-between items-center px-[24px] bg-white border border-white rounded-[24px] shadow-[0px_28px_20px_0px_#0000000D] ">
              <button
                onClick={() =>
                  onUpdateQuantity(item.id, Math.max(0, item.quantity - 1))
                }
                className="w-8 h-8 text-2xl flex items-center justify-center"
              >
                <Minus className="w-[20px] h-[20px]  text-[#6D6D6D]"/>
              </button>
              <span className="text-xl text-[#444444] text-center">{item.quantity}</span>
              <button
                onClick={() => onUpdateQuantity(item.id, item.quantity + 1)}
                className="w-8 h-8 text-2xl flex items-center justify-center"
              >
               <Plus className="w-[20px] h-[20px] text-[#272323]"/>
              </button>
            </div>
            {/* cart item remove button */}
            <button
              onClick={() => onRemove(item.id)}
              className="text-base font-normal leading-[19px] text-[#00417E] dark:text-gradient-pink"
            >
              Remove
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
