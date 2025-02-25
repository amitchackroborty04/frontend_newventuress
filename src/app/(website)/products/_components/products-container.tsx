"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { CircleAlert, CircleOff } from "lucide-react";
import { useState } from "react";

// Local imports
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import ProductCardSkeleton from "@/components/shared/skeletons/productCardSkeleton";
import PacificPagination from "@/components/ui/PacificPagination";
import { TextEffect } from "@/components/ui/text-effect";
import { ProductResponse } from "@/types/product";
import ProductsSort from "./products-sort";
import SidebarFilters from "./SidebarFilters";



interface Props {
  token: string
}
const ProductsContainer = ({token} : Props) => {
  const [currentPage, setCurrentPage] = useState(1);
  // const [products, setProducts] = useState([]);

  //? // Fetch products
   //? // Fetch products
     const { data, isError, error, isLoading } = useQuery<ProductResponse>({
      queryKey: ["products"],
      queryFn: async () => {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`, {
            headers: {
              'Authorization': `Bearer ${token}`
            }
          });
        if (!response.ok) {
          throw new Error("Network error");
        }
        return response.json();
      },
    });
  const products = data?.data;


  let content;

  if(isLoading) {
    content = <div className="mt-[52px] grid grid-cols-1 gap-4 md:grid-cols-3">
      {[1,2,3,4,5,6].map((n) => (
        <ProductCardSkeleton key={n} />
      ))}
    </div>
  }



  if (isError) {
    content = <div className="mt-[52px] flex flex-col gap-2 justify-center items-center  min-h-[40vh]  font-inter ">
    <CircleOff className="h-7 w-7 text-red-600" />
    <div className="max-w-[400px] text-center text-14px text-tourHub-gray">
      <TextEffect per="char" preset="fade" variants={{}} className="" onAnimationComplete={() => {}}>
        {error?.message || "something went wrong . Please try again"}
      </TextEffect>
    </div>
  </div>
  } else if(products?.length === 0 ) {
    content = <div className="mt-[52px] w-full flex flex-col gap-2 justify-center items-center min-h-[40vh] font-inter">
    <CircleAlert className="h-5 w-5" />
    <p className="max-w-[400px] text-center text-14px text-tourHub-gray">
      <TextEffect per="char" preset="fade" variants={{}} className="" onAnimationComplete={() => {}}>
        No data available for the selected criteria. Please try different
        filters or check your connection!
      </TextEffect>
    </p>
  </div>
  } else if (products && products?.length > 0) {
    content = <div className="mt-[52px] grid grid-cols-1 gap-4 md:grid-cols-3">
    {products?.map((item: any) => (
      <FeaturedProductCard key={item._id} product={item} />
    ))}
  </div>
  }


  return (
    <div className="section container lg:mb-[150px]">
      <SectionHeading heading="Products" subheading="" />

      {/* product sort  */}
      <div className="container mt-[40px] flex h-[50px] items-center justify-end rounded-[8px] bg-[#F9FAFD] p-[8px] shadow-[0px_4px_4px_0px_#00000026]">
        <div>
          <ProductsSort />
        </div>
      </div>

      <div className="flex flex-wrap items-start gap-4">
        {/* Sidebar Filters */}
        <div className="w-full md:w-1/4">
          <SidebarFilters />
        </div>

        {/* Products Grid */}
        <div className="flex-1">
        {content}
        </div>
      </div>

      {/* Pagination */}
      {!isLoading && !isError && <div className="mt-[40px]">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={20} // Assuming 9 items per page
        />
      </div>}
    </div>
  );
};

export default ProductsContainer;
