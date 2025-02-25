import React from "react";

export default function ProductCard({ product }: any) {
  return (
    <div>
      <h1>All products</h1>
      {product.map((items: any) => (
        <div key={items._id}>
          <h1>{items.description}</h1>
        </div>
      ))}
    </div>
  );
}
