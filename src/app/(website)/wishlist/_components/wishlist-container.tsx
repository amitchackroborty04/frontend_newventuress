"use client";

import { CartItemCard } from "@/components/shared/cards/cart-item";
import { Button } from "@/components/ui/button";
import { initialItems } from "@/data/CartData";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

const WishlistContainer = () => {
  const [items, setItems] = useState(initialItems);

  const updateQuantity = (id: string, quantity: number) => {
    setItems(
      items.map((item) => (item.id === id ? { ...item, quantity } : item))
    );
  };

  const removeItem = (id: string) => {
    setItems(items.filter((item) => item.id !== id));
  };
  return (
    <section>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {items.slice(0, 6).map((item, index) => (
          <div
            key={item.id}
            className={`w-full pb-[16px] ${
              index % 2 === 0 ? "" : ""
            }`}
          >
            <CartItemCard
              item={item}
              onUpdateQuantity={updateQuantity}
              onRemove={removeItem}
              icon={<ShoppingCart className="w-4 h-4 " />}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center pt-[20px] md:pt-[30px] lg:pt-[40px]">
        <Button className="text-base font-medium leading-[19px] bg-gradient-to-r from-[#121D42] via-[#152764] to-[#4857BD] hover:bg-[#121D42] rounded-[8px] py-[12px] px-[24px]">
          Move All them to Cart
        </Button>
      </div>
    </section>
  );
};

export default WishlistContainer;
