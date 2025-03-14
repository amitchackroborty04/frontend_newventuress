import { Home, ShoppingBag, ThumbsUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function Rewards() {
  return (
    <div className="max-w-[1170px] mx-auto p-6 space-y-8">
      {/* Ways to earn section */}
      <div className="space-y-6">
        <h2 className="text-[25px] font-semibold text-black">Ways to earn</h2>
        <div className="space-y-6">
          {/* Sign Up */}
          <div className="flex items-center gap-4">
            <div className="w-20 md:w-10 lg:w-16 h-10 lg:h-16 rounded-full bg-primary dark:bg-pinkGradient flex items-center justify-center">
              <Home className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="font-normal leading-[28px] text-[18px] lg:text-[24px] text-black">Sign Up</h3>
              <p className="text-[#4D4D4D] text-[16px] lg:text-[20px] font-normal leading-[24px]">
                you could get 250 Vida Rewards Points by sign up for the first time in our website.
              </p>
            </div>
          </div>

          {/* Place an order */}
          <div className="flex items-center gap-4">
            <div className="w-[85px] md:w-10 lg:w-16 h-10 lg:h-16 rounded-full bg-primary dark:bg-pinkGradient flex items-center justify-center">
              <ShoppingBag className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="font-normal leading-[28px] text-[18px] lg:text-[24px] text-black">Place an order</h3>
              <p className="text-[#4D4D4D] text-[16px] lg:text-[20px] font-normal leading-[24px]">
                you could get 250 Vida Rewards Points by every purchase for the first time in our website.
              </p>
            </div>
          </div>

          {/* Like */}
          <div className="flex items-center gap-4">
            <div className="w-[70px] md:w-10 lg:w-16 h-10 lg:h-16 rounded-full bg-primary dark:bg-pinkGradient flex items-center justify-center">
              <ThumbsUp className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="font-normal leading-[28px] text-[18px] lg:text-[24px] text-black">Like</h3>
              <p className="text-[#4D4D4D] text-[16px] lg:text-[20px] font-normal leading-[24px]">
                You could get 250 Vida Rewards Points by bidding for the first time.
              </p>
            </div>
          </div>

          {/* Place an order (second) */}
          <div className="flex items-center gap-4">
            <div className="w-[85px] md:w-10 lg:w-16 h-10 lg:h-16 rounded-full bg-primary dark:bg-pinkGradient flex items-center justify-center">
              <ShoppingBag className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="font-normal leading-[28px] text-[18px] lg:text-[24px] text-black">Place an order</h3>
              <p className="text-[#4D4D4D] text-[16px] lg:text-[20px]font-normal leading-[24px]">
                you could get 250 Vida Rewards Points by every purchase for the first time in our website.
              </p>
            </div>
          </div>

          {/* Sign Up (second) */}
          <div className="flex items-center gap-4">
            <div className="w-20 md:w-10 lg:w-16 h-10 lg:h-16 rounded-full bg-primary dark:bg-pinkGradient flex items-center justify-center">
              <Home className="w-4 lg:w-6 h-4 lg:h-6 text-white" />
            </div>
            <div className="space-y-1">
              <h3 className="font-normal leading-[28px] text-[18px] lg:text-[24px] text-black">Sign Up</h3>
              <p className="text-[#4D4D4D] text-[16px] lg:text-[20px] font-normal leading-[24px]">
                you could get 250 Vida Rewards Points by sign up for the first time in our website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Total Points */}
      <div className="flex justify-between items-center border-t border-[#DDDFE2] py-3 mt-2">
        <span className="text-[#9C9C9C] font-semibold text-[20px]">Total Points</span>
        <span className="font-medium text-[18px] text-[#181818]">100</span>
      </div>

      {/* Your Points */}
      <div className="space-y-16">
        <h2 className="text-[28px] lg:text-[36px] font-semibold text-gradient dark:text-gradient-pink">Your Points</h2>
        <div className="relative w-[90%] mx-auto">
          <Progress value={45} className="h-3" />
          <div className="flex justify-between mt-2 text-sm">
            <span>0</span>
            <p className="absolute left-[45%] text-gradient dark:text-gradient-pink font-semibold text-[23px] translate-y-[-62px]">45 <span className="font-normal text-[19px]">Points</span></p>
            <span>100</span>
          </div>
        </div>
      </div>

      {/* Available Coupons */}
      <div className="space-y-6">
        <h2 className="font-semibold text-[25px] lg:text-[36px] leading-[43px] text-gradient dark:text-gradient-pink ">Your Available Coupons Are</h2>
        <div>
          <p className="text-gradient dark:text-gradient-pink text-[16px] font-medium mb-4">Available Coupon <span className="text-[#9C9C9C] text-[12px] font-normal">(Use them if you want to have discount)</span></p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="border border-[#121D42] text-gradient dark:text-gradient-pink dark:border-[#6841A5]">
              Coupon #1255
            </Button>
            <Button variant="outline" className="border border-[#121D42] text-gradient dark:text-gradient-pink dark:border-[#6841A5]">
              Coupon #4856
            </Button>
            <Button variant="outline" className="border border-[#121D42] text-gradient dark:text-gradient-pink dark:border-[#6841A5]">
              Coupon #8966
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

