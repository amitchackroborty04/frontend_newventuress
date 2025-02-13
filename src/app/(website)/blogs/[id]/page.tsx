import SectionHeading from "@/components/shared/SectionHeading/SectionHeading";
import { PageHeader } from "@/components/shared/sections/page-header";
import BlogCommets from "./_components/blogCommets";
import BlogDetails from "./_components/blogDetails";
import BlogSidebar from "./_components/blogSidebar";

const Page = ({}: { params: { id: string } }) => {
  return (
    <div>
      <PageHeader
        title="Blog Details Page"
        items={[
          {
            label: "Home",
            href: "/",
          },
          {
            label: "Blog> Details",
            href: "/blogs",
          },
        ]}
      />
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-12 text-[32px]">
          <SectionHeading
            heading={"Our Latest News From Blogs"}
            subheading={"Blog"}
          />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="col-span-1 lg:col-span-2">
            <BlogDetails />
            <BlogCommets />
          </div>
          <div className="col-span-1 lg:col-span-1">
            <BlogSidebar />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
