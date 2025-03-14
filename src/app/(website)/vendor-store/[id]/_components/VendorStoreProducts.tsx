"use client";
import FeaturedProductCard from "@/components/shared/cards/featured_card";
import PacificDropdownSelector from "@/components/ui/PacificDropdownSelector";
import { useQuery } from "@tanstack/react-query";
import { Search } from "lucide-react";
import { useSession } from "next-auth/react";
import { useState } from "react";
import { useParams } from "next/navigation";

const VendorStoreProducts = () => {
  const [query, setQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const { data: session, status } = useSession();
  const token = session?.user?.token;

  const params = useParams();
  const productid = params?.id;
  console.log("Product ID:", productid);

  const fetchProducts = async () => {
    if (!productid) {
      throw new Error("Product ID is missing");
    }

    const headers = {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    };

    const response = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/product/store/${productid}`,
      {
        method: 'GET',
        headers: headers,
      }
    );

    if (!response.ok) {
      throw new Error(data.message || "Network error")
    }

    return response.json();
  };


  const { data, error, isLoading } = useQuery({
    queryKey: ["products", productid],
    queryFn: fetchProducts,
    enabled: !!token && !!productid, 
  });

  if (status === "loading") {
    return <div>Loading session...</div>;
  }

  if (!token) {
    return <div>Error: Token not found. Please login again.</div>;
  }

  const products = data?.data;

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div> {"no data"}</div>;
  }

  const uniqueCategories = Array.from(
    new Set(products.map((product: any) => product.category)),
  );

  const categoryOptions = uniqueCategories.map((category, index) => ({
    id: index,
    value: category,
    name: category,
  }));

  const handleCategoryChange = (value: string) => {
    setSelectedCategory(value);
    console.log("Selected Category:", value);
  };

  return (
    <div>
      <div className="mb-8 flex items-center justify-between">
        <form onSubmit={(e) => { e.preventDefault(); console.log("Searched query: ", query); }}>
          <div className="flex h-[41px] w-full max-w-[400px] overflow-hidden rounded-[6px] border-2 border-[#0057A8] dark:border-[#643F9E] bg-white">
            <div className="flex items-center pl-2">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search"
              className="flex-1 px-2 py-3 text-lg text-gray-600 placeholder-gray-400 focus:outline-none dark:bg-white"
            />
            <button
              className="w-[105px] bg-primary dark:bg-pinkGradient px-4 font-medium text-white transition-colors hover:bg-blue-800"
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
        {products?.map((items: any) => (
          <FeaturedProductCard key={items._id} product={items} />
        ))}
      </div>
    </div>
  );
};

export default VendorStoreProducts;
