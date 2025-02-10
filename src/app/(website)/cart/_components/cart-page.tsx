"use client";

import { CartItemCard } from "@/components/shared/cards/cart-item";
import { initialItems } from "@/data/CartData";
import { CartItem } from "@/types/cart";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CartSummary } from "./cart-summary";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(initialItems);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const updateQuantity = (id: string, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const calculateTotals = () => {
    const subtotal = items.reduce(
      (sum, item) => sum + item.price * item.quantity,
      0
    );
    const shipping = subtotal > 0 ? 100 : 0;
    const tax = subtotal * 0.01;
    const total = subtotal + shipping + tax;
    return { subtotal, shipping, tax, total };
  };

  const handleCheckout = () => {
    console.log("Proceeding to checkout...");
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      router.push("/checkout");
    }, 3000);
  };

  const { subtotal, shipping, tax, total } = calculateTotals();

  return (
    <div className="container section border-b-[1px] border-[#C0CFE6]/50 pb-[40px] ">
      <div className="mt-[-10px]">
            <SectionHeading heading={"Your Shopping Cart"} subheading={""} />
          </div>

      <div className="max-w-7xl mx-auto lg:grid md:grid-cols-[1fr_500px] gap-8">
        <div className="space-y-6 lg:border-r-[.5px] border-[#C0CFE6]/70 md:pr-8">
          <h2 className="text-xl font-semibold text-gradient dark:text-gradient-pink mb-6">
            Cart Items
          </h2>
          <div className="space-y-4">
            {items.slice(0, 3).map((item) => (
              <CartItemCard
                key={item.id}
                item={item}
                onUpdateQuantity={updateQuantity}
                onRemove={removeItem}
                icon={<Heart className="w-4 h-4 text-gray-600" />}
              />
            ))}
          </div>
        </div>
        <div className="md:sticky md:top-8 h-fit">
          <CartSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            onCheckout={handleCheckout}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
}
