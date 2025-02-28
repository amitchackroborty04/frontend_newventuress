'use client'
import { CartItemCard } from "@/components/shared/cards/cart-item";
import { Heart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { CartSummary } from "./cart-summary";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { useAppSelector, useAppDispatch } from "@/redux/store"; // Import useAppDispatch
import EmptyCart from "./empty-cart";
import { updateQuantity, removeFromCart } from "@/redux/features/cart/cartSlice"; // Import actions

export default function CartPage() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const dispatch = useAppDispatch(); // Use dispatch

  const cartItems = useAppSelector((state) => state.cart.items); // Get cart items from Redux

  useEffect(() => {
    console.log("Cart Items from Redux:", cartItems); // Log cart items
  }, [cartItems]); // Re-log when cartItems change

  const updateQuantityHandler = (id: string, quantity: number) => {
    dispatch(updateQuantity({ id, quantity })); // Dispatch updateQuantity action
  };

  const removeItemHandler = (id: string) => {
    dispatch(removeFromCart(id)); // Dispatch removeFromCart action
  };

  const calculateTotals = () => {
    const subtotal = cartItems.reduce(
      (sum, item) => sum + item.discountPrice * item.quantity,
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

  if (cartItems.length === 0) {
    return <EmptyCart />;
  }

  return (
    <div className="container section md:border-b-[1px] border-[#C0CFE6]/50 pb-10">
      <div className="mt-[-10px]">
        <SectionHeading heading={"Your Shopping Cart"} subheading={""} />
      </div>

      <div className="max-w-7xl mx-auto lg:grid md:grid-cols-[1fr_500px] gap-8">
        <div className="space-y-6 lg:border-r-[.5px] border-[#C0CFE6]/70 md:pr-8">
          <h2 className="text-xl font-semibold text-gradient dark:text-gradient-pink mb-6">
            Cart Items
          </h2>
          <div className="space-y-4">
            {cartItems.map((item) => (
              <CartItemCard
                key={item._id}
                item={item}
                onUpdateQuantity={updateQuantityHandler} // Use the handler
                onRemove={removeItemHandler} // Use the handler
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
