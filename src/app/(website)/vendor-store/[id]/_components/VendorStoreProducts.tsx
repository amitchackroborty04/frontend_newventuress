"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useState } from "react";

const fetchProducts = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product`,
  );
  if (!response.ok) {
    throw new Error("Network error");
  }
  return response.json();
};

const VendorStoreProducts = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");

  const onSearchHandle = (e: any) => {
    e.preventDefault();
    console.log("Searched query: ", query);
  };

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
  // console.log("uniqueCategories", products);

  const uniqueCategories = Array.from(
    new Set(products.map((product: any) => product.cateogry)),
  );
  console.log("uniqueCategories", uniqueCategories);

  // Map unique categories to the dropdown format
  const categoryOptions = uniqueCategories.map((category, index) => ({
    id: index, // Use category as id since it's unique
    value: category,
    name: category, // Display name
  }));

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected Category:", value);
  };
  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <form onSubmit={onSearchHandle}>
          <div className="flex h-[41px] w-full max-w-[400px] overflow-hidden rounded-[6px] border-2 border-[#0057A8] bg-white">
            <div className="flex items-center pl-2">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 px-2 py-3 text-lg text-gray-600 placeholder-gray-400 focus:outline-none"
            />
            <button
              className="w-[105px] bg-[#0057A8] px-4 font-medium text-white transition-colors hover:bg-blue-800"
              type="submit"
            >
              Search
            </button>
          </div>
        </form>
        <div className="w-full max-w-[180px]">
          <PacificDropdownSelector
            list={categoryOptions}
            selectedValue={selectedCategory}
            onValueChange={handleCategoryChange}
            placeholderText="Select Category"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3">
        {products.map((items: any) => (
          <FeaturedProductCard key={items._id} product={items} />
        ))}
      </div>
    </div>
  );
};

export default VendorStoreProducts;
