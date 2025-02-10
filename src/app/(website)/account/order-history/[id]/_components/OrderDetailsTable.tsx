import { cn } from "@/lib/utils";
import Image from "next/image";

interface Product {
  id: number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

const products: Product[] = [
  {
    id: 1,
    name: "American Beauty",
    price: 7000.0,
    quantity: 3,
    image: "/assets/img/orderProduct.png"
  },
  {
    id: 2,
    name: "American Beauty",
    price: 7000.0,
    quantity: 3,
    image: "/assets/img/orderProduct.png"
  },
  {
    id: 3,
    name: "American Beauty",
    price: 7000.0,
    quantity: 3,
    image: "/assets/img/orderProduct.png"
  }
];

const OrderDetailsTable = ({ className }: { className: string }) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("en-PH", {
      style: "currency",
      currency: "PHP",
      minimumFractionDigits: 2
    }).format(price);
  };

  return (
    <div className={cn("w-full max-w-4xl mx-auto mt-10 md:mt-0", className)}>
      {/* Table for medium and larger screens */}
      <div className="hidden md:block overflow-hidden rounded-lg border border-gray-200 ">
        <table className="w-full text-center ">
          <thead className="bg-gray-100 dark:bg-[#482D721A]">
            <tr>
              <th className="px-6 py-4 text-center text-base font-medium text-[#444444] ">
                Product
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-600">
                Price
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-600">
                Quantity
              </th>
              <th className="px-6 py-4 text-center text-base font-medium text-gray-600">
                Subtotal
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {products.map(product =>
              <tr key={product.id}>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <span className="text-base font-medium text-primary dark:text-gradient-pink ">
                      {product.name}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-base text-[#181818] font-medium">
                  {formatPrice(product.price)}
                </td>
                <td className="px-6 py-4 text-base text-[#181818] font-medium">
                  X{product.quantity}
                </td>
                <td className="px-6 py-4 text-base text-[#181818] font-medium">
                  {formatPrice(product.price * product.quantity)}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Card layout for small screens */}
      <div className="md:hidden space-y-4">
        {products.map(product =>
          <div
            key={product.id}
            className="bg-white rounded-lg border border-gray-200 p-4"
          >
            <div className="flex items-center gap-4 mb-4">
              <Image
                src={product.image}
                alt={product.name}
                width={80}
                height={80}
                className="rounded-lg"
              />
              <span className="text-sm font-medium text-gray-900">
                {product.name}
              </span>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Price:</span>
                <span className="text-sm text-gray-900">
                  {formatPrice(product.price)}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-600">Quantity:</span>
                <span className="text-sm text-gray-900">
                  X{product.quantity}
                </span>
              </div>
              <div className="flex justify-between pt-2 border-t border-gray-200">
                <span className="text-sm font-medium text-gray-600">
                  Subtotal:
                </span>
                <span className="text-sm font-medium text-gray-900">
                  {formatPrice(product.price * product.quantity)}
                </span>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderDetailsTable;
