"use client";

// Packages
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

// Local imports
import { fadeIn } from "@/components/animations/variant";
import ErrorContainer from "@/components/ui/error-container";
import SkeletonWrapper from "@/components/ui/skeleton-wrapper";
import { BlogResponse } from "@/types/blog";
import { ButtonArrow } from "../../button/ButtonArrow";
import PopularBlogsCards from "../../cards/BlogsCards";
import SectionHeading from "../../SectionHeading/SectionHeading";

function PopularBlog() {
  // Fetch blogs data with React Query
  const {
    data: resData,
    isLoading,
    isError,
    error,
  } = useQuery<BlogResponse>({
    queryKey: ["blogs"],
    queryFn: () =>
      fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-blog`).then((res) =>
        res.json()
      ),
  });

  const blogs = resData?.data;

  // Track if the component is in view for animations
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true, // Only trigger the animation once
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
            <PopularBlogsCards
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
  } else if (blogs && blogs.length > 0) {
    content = (
      <>
        <motion.div
          variants={fadeIn("up", 0.3)}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[29px] mb-12"
        >
          {blogs.slice(0, 3).map((blog) => (
            <PopularBlogsCards key={blog._id} data={blog} /> // Render blog cards
          ))}
        </motion.div>
      </>
    );
  }

  return (
    <motion.div ref={ref}>
      <div className="container mx-auto pt-[56px]">
        <SectionHeading heading="Shop By Popular Blogs" subheading="Blog" />
        {content} {/* Render content based on the state */}
        <div className="text-center">
          <ButtonArrow href="/blogs" text="Explore More" />
        </div>
      </div>
    </motion.div>
  );
}

export default PopularBlog;
