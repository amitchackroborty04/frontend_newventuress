import { auth } from "@/auth";
import { PageHeader } from "@/components/shared/sections/page-header";
import { redirect } from "next/navigation";
import ProductsContainer from "./_components/products-container";

const Page = async () => {
  const currentUser = await auth();

  if(!currentUser) redirect("/login?callback=/products");
  const token = currentUser["user"]["token"]
  return (
    <div>
      <PageHeader
        title="Our Products"
        items={[
          { label: "Home", href: "/" },
          { label: "Our Products", href: "" },
        ]}
      />
      {/* Render the product grid or list */}
      <div className="">
        <ProductsContainer token={token} />
      </div>
    </div>
  );
};

export default Page;
