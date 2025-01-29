"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

// Local imports
import { fadeIn } from "@/components/animations/variant";
import BlogsCards, { BlogSkeleton } from "@/components/shared/cards/BlogsCards";
import ErrorContainer from "@/components/ui/error-container";
import PacificPagination from "@/components/ui/PacificPagination";
import { BlogResponse } from "@/types/blog";

const BlogsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch blogs data with React Query
  const {
    data: resData,
    isLoading,
    isError,
    error,
  } = useQuery<BlogResponse>({
    queryKey: ["blogs", currentPage],
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-blog?page=${currentPage}&limit=3`
      ).then((res) => res.json()),
  });

  const blogs = resData?.data ?? []; // Fallback to an empty array if undefined

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  let content;

  if (isLoading) {
    content = (
      <motion.div
        // variants={fadeIn("up", 0.3)}
        // initial="hidden"
        // animate={inView ? "show" : "hidden"} // Animate only when in view
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12"
      >
        {["1", "2", "3"].map((id) => (
          <BlogSkeleton key={id} />
        ))}
      </motion.div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error.message} />; // Display error message
  } else if (blogs && blogs.length > 0) {
    content = (
      <>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12"
        >
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogsCards key={blog._id} data={blog} index={index} /> // Render blog cards
          ))}
        </motion.div>
      </>
    );
  }

  return (
    <motion.div ref={ref}>
      <AnimatePresence>{content}</AnimatePresence>

      <div className="">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={resData?.meta.totalPages ?? 1}
        />
      </div>
    </motion.div>
  );
};

export default BlogsContainer;
