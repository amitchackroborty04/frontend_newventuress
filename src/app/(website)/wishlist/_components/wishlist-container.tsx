"use client";


import { Button } from "@/components/ui/button";
import { useAppSelector } from "@/redux/store";
import { useEffect, useState } from "react";
import { WishlistCard } from "./WishlistCard";
import Link from "next/link";

const WishlistContainer = () => {
  const cartItems = useAppSelector((state) => state.wishlist.items); // Get cart items from Redux

  useEffect(() => {
    console.log("Cart Items from Redux:", cartItems); // Log cart items
  }, [cartItems]); // Re-log when cartItems change

  const [items, setItems] = useState<typeof cartItems>([]); // Initialize with an empty array

  useEffect(() => {
    setItems(cartItems); // Update state after mount
  }, [cartItems]);

  const updateQuantity = (id: string, quantity: number) => {
    setItems((prevItems) =>
      prevItems.map((item) => (item._id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((item) => item._id !== id));
  };

  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.slice(0, 6).map((item) => (
          <div key={item._id} className="w-full pb-[16px]">
            <WishlistCard
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
              // icon={<ShoppingCart className="w-4 h-4 " />}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-[20px] md:pt-[30px] lg:pt-[40px]">
 <Link href="/cart">
 <Button className="text-base font-medium leading-[19px] bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] hover:bg-[#121D42] rounded-[8px] py-[12px] px-[24px]">
          Go to Cart
        </Button>
 </Link>
      </div>
    </section>
  );
};

export default WishlistContainer;
