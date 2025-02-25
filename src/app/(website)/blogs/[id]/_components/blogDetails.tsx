"use client";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation"; // ✅ Use useParams instead of useRouter
import { Calendar, Eye, UserRound } from "lucide-react";
import Image from "next/image";
import moment from "moment";
import React from "react";
import ErrorContainer from "@/components/ui/error-container";
import { Blog } from "@/types/blog";

interface BlogDetailsProps {
  id?: string; // Optional, since we get it from the URL
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ id }) => {
  const params = useParams(); // ✅ Fetch params from the URL
  const blogId = id || (params?.id as string); // Use prop first, fallback to URL param

  // Fetch blog details
  const { data: blogData, isLoading, isError, error } = useQuery<Blog>({
    queryKey: ["blog", blogId],
    queryFn: async () => {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-blog/${blogId}`);
      if (!res.ok) throw new Error("Failed to fetch blog details");
      const blogData = await res.json();
      return blogData.data; // Access the actual blog data
    },
    enabled: !!blogId, // Fetch only when blogId exists
  });

  console.log(blogData?.description)
  if (isLoading) return <p>Loading blog details...</p>;
  if (isError) return <ErrorContainer message={error.message} />;
  console.log(blogData?.title);

  return (
    <div>
      <article className="mb-8 bg-[#E6EEF6] dark:bg-[#482D721A] rounded-lg">
        <div className="overflow-hidden">
          <Image
            src={blogData?.image ?? "/assets/blogs/default.png"}
            alt={blogData?.title ?? "Blog Image"}
            width={770}
            height={440}
            className="w-full h-[320px] lg:w-[770px] md:h-[440px] lg:h-[440px] rounded-t-lg transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-150 duration-300"
          />
        </div>
        <div className="p-4">
          <h2 className="text-[28px] leading-[33.6px] font-semibold text-gradient dark:text-gradient-pink mb-4">
            {blogData?.title ?? "Blog Title"}
          </h2>
          <div className="flex gap-5 flex-wrap text-[#444444] font-[16px] leading-[19.2px] mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-[20px] h-[20px]" />
              <span className="font-[16px] leading-[19.2px]">
                {moment(blogData?.createdAt).format("DD MMM, YYYY")}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <UserRound className="w-[20px] h-[20px]" />
              <span className="font-[16px] leading-[19.2px]">
                {blogData?.author ?? "By Admin"}
              </span>
            </div>
            <div className="flex items-center gap-1">
              <Eye className="w-[20px] h-[20px]" />
              <span className="font-[16px] leading-[19.2px]">
                {blogData?.views ?? 0} Views
              </span>
            </div>
          </div>
          <div className="text-[#444444] font-[16px] leading-[19.2px]">
            <div dangerouslySetInnerHTML={{ __html: blogData?.description ?? "Blog Description" }} />
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogDetails;
