import { Home, ShoppingBag, ThumbsUp } from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button"

export default function Rewards() {
  return (
    <div className="max-w-[1170px] mx-auto p-6 space-y-8">
      {/* Ways to earn section */}
      <div className="space-y-6">
        <h2 className="text-xl font-semibold">Ways to earn</h2>
        <div className="space-y-4">
          {/* Sign Up */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a237e] flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Sign Up</h3>
              <p className="text-[#4D4D4D] text-sm">
                you could get 250 Vida Rewards Points by sign up for the first time in our website.
              </p>
            </div>
          </div>

          {/* Place an order */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a237e] flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Place an order</h3>
              <p className="text-[#4D4D4D] text-sm">
                you could get 250 Vida Rewards Points by every purchase for the first time in our website.
              </p>
            </div>
          </div>

          {/* Like */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a237e] flex items-center justify-center">
              <ThumbsUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Like</h3>
              <p className="text-[#4D4D4D] text-sm">
                You could get 250 Vida Rewards Points by bidding for the first time.
              </p>
            </div>
          </div>

          {/* Place an order (second) */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a237e] flex items-center justify-center">
              <ShoppingBag className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Place an order</h3>
              <p className="text-[#4D4D4D] text-sm">
                you could get 250 Vida Rewards Points by every purchase for the first time in our website.
              </p>
            </div>
          </div>

          {/* Sign Up (second) */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-[#1a237e] flex items-center justify-center">
              <Home className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Sign Up</h3>
              <p className="text-[#4D4D4D] text-sm">
                you could get 250 Vida Rewards Points by sign up for the first time in our website.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Total Points */}
      <div className="flex justify-between items-center border-t py-4">
        <span className="text-[#9C9C9C] text-[20px]">Total Points</span>
        <span className="font-semibold">100</span>
      </div>

      {/* Your Points */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[#1a237e]">Your Points</h2>
        <div className="relative w-[90%] mx-auto">
          <Progress value={45} className="h-3" />
          <div className="flex justify-between mt-2 text-sm">
            <span>0</span>
            <span className="absolute left-[45%] text-[#1a237e] translate-y-[-42px]">45 Points</span>
            <span>100</span>
          </div>
        </div>
      </div>

      {/* Available Coupons */}
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-[36px] leading-[43px] text-[#1a237e]">Your Available Coupons Are</h2>
        <div>
          <p className="text-gray-600 text-sm mb-4">(Use Point if you want to have discount)</p>
          <div className="flex flex-wrap gap-2">
            <Button variant="outline" className="rounded-full">
              Coupon #1255
            </Button>
            <Button variant="outline" className="rounded-full">
              Coupon #4856
            </Button>
            <Button variant="outline" className="rounded-full">
              Coupon #8966
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

