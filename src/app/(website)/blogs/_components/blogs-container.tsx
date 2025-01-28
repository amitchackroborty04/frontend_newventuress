"use client";
import { fadeIn } from "@/components/animations/variant";
import BlogsCards from "@/components/shared/cards/BlogsCards";
import ErrorContainer from "@/components/ui/error-container";
import PacificPagination from "@/components/ui/PacificPagination";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { Blog } from "@/types/blog";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const BlogsContainer = () => {
  const [currentPage, setCurrentPage] = useState(1);

  // Fetch blogs data with React Query
  const { data, isLoading, isError, error } = useQuery<Blog[]>({
    queryKey: ["blogs"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-blog`).then(
        async (res) => {
          const resData = await res.json();
          return resData.blogs; // Ensure the response contains a `blogs` array
        }
      ),
  });

  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  let content;

  if (isLoading) {
    content = (
      <motion.div
        variants={fadeIn("up", 0.3)}
        initial="hidden"
        animate={inView ? "show" : "hidden"} // Animate only when in view
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12"
      >
        {["1", "2", "3"].map((id) => (
          <SkeletonWrapper isLoading={isLoading} key={id}>
            <BlogsCards
              data={{
                __v: 0,
                _id: "f",
                createdAt: new Date(),
                description: "dfsd",
                image:
                  "https://images.pexels.com/photos/1632790/pexels-photo-1632790.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                title: "dfas",
                updatedAt: new Date(),
              }}
            />
          </SkeletonWrapper>
        ))}
      </motion.div>
    );
  } else if (isError) {
    content = <ErrorContainer message={error.message} />; // Display error message
  } else if (data && data.length > 0) {
    content = (
      <>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12"
        >
          {data.slice(0, 3).map((blog) => (
            <BlogsCards key={blog._id} data={blog} /> // Render blog cards
          ))}
        </motion.div>
      </>
    );
  }

  return (
    <motion.div ref={ref}>
      {content}

      <div className="">
        <PacificPagination
          currentPage={currentPage}
          onPageChange={(page) => setCurrentPage(page)}
          totalPages={10}
        />
      </div>
    </motion.div>
  );
};

export default BlogsContainer;
