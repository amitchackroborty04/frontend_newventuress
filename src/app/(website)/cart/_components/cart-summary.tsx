import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface CartSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  onCheckout: () => void;
  loading: boolean;
}

export function CartSummary({
  subtotal,
  shipping,
  tax,
  total,
  onCheckout,
  loading,
}: CartSummaryProps) {
  return (
    <div className="rounded-lg p-4">
      <h5 className="text-xl font-semibold pb-2 mb-6 text-gradient border-b border-[#C0CFE6] dark:text-gradient-pink">
        Cart Total
      </h5>
      <div className="space-y-4">
        <div className="flex justify-between ">
          <span className="text-[#9C9C9C]">Subtotal</span>
          <span className="dark:text-[#181818]">${subtotal.toLocaleString()}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-[#9C9C9C]">Shipping Estimate</span>
          <span className="dark:text-[#181818]">${shipping.toLocaleString()}</span>
        </div>
        <div className="flex justify-between ">
          <span className="text-[#9C9C9C]">Tax Estimate</span>
          <span className="dark:text-[#181818]">${tax.toLocaleString()}</span>
        </div>
        <div className="pt-4">
          <div className="flex justify-between ">
            <span className="text-[#9C9C9C]">Total Item</span>
            <span className="dark:text-[#181818]">${(subtotal + shipping).toLocaleString()}</span>
          </div>
        </div>
        <div className="border-t border-[#C0CFE6] pt-4">
          <div className="flex justify-between text-[16px] font-normal">
            <span className="text-[#9C9C9C]">Order Total</span>
            <span className="dark:text-[#181818]">${total.toLocaleString()}</span>
          </div>
        </div>
        <Button
          onClick={onCheckout}
          className=" w-full relative"
          disabled={loading}
        >
          Checkout{" "}
          {loading && (
            <div>
              <Loader2 className="animate-spin absolute top-4 right-5 h-5 w-5 " />
            </div>
          )}
        </Button>
      </div>
    </div>
  );
}
