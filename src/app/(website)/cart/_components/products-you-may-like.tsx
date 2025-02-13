"use client";
import { ButtonArrow } from "@/components/shared/button/ButtonArrow";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { useQuery } from "@tanstack/react-query";

const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`,
  );
  if (!response.ok) {
    throw new Error("Network error");
  }
  return response.json();
};

const ProductsYouMayLike = () => {
  //? // Fetch products
  const { data, error, isLoading } = useQuery({
    queryKey: ["products"],
    queryFn: fetchProducts,
  });
  const products = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>Error: {error.message}</div>;
  }
  return (
    <div className="section container border-t-[1px] border-[#C0CFE6]/50 pt-[50px]">
      <SectionHeading heading="Products you might like" subheading="Products" />

      <div className="my-[50px] grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {products.slice(0, 4).map((product: any) => (
          <FeaturedProductCard key={product._id} product={product} />
        ))}
      </div>

      <div className="flex justify-center">
        <ButtonArrow text="Explore More" href="/" />
      </div>
    </div>
  );
};

export default ProductsYouMayLike;
