"use client";
// Packages
import { useQuery } from "@tanstack/react-query"; // Importing useQuery for data fetching

// Local imports
import BlogsCards, { BlogSkeleton } from "@/components/shared/cards/BlogsCards"; // Importing components for displaying blogs and loading skeletons
import ErrorContainer from "@/components/ui/error-container"; // Importing error handling component
import { BlogResponse } from "@/types/blog"; // Importing type definition for blog response

function BlogSidebar() {
  // Fetching blog data using useQuery
  const {
    data: resData, // Response data from the API
    isLoading, // Loading state
    isError, // Error state
    error, // Error object
  } = useQuery<BlogResponse>({
    queryKey: ["blogs"], // Unique key for the query
    queryFn: () =>
      fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/get-blog?page=${1}&limit=3` // Fetching blogs from the backend API
      ).then((res) => res.json()), // Parsing the response as JSON
  });

  const blogs = resData?.data; // Extracting blogs from the response data

  let content; // Variable to hold the content to be rendered

  // Conditional rendering based on the state of the query
  if (isLoading) {
    // Display loading skeletons while data is being fetched
    content = (
      <div className="grid grid-cols-1 gap-6">
        {[1, 2, 3].map((item) => (
          <BlogSkeleton key={item} /> // Loading skeleton for each blog
        ))}
      </div>
    );
  } else if (isError) {
    // Display error message if there's an error
    content = <ErrorContainer message={error.message} />;
  } else if (blogs && blogs.length > 0) {
    // Display the list of blogs if data is available
    content = (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1  gap-6">
        {blogs.slice(0, 4).map((blog) => (
          <BlogsCards key={blog._id} data={blog} /> // Blog card for each blog
        ))}
      </div>
    );
  }
  return content; // Return the content to be rendered
}

export default BlogSidebar; // Exporting the BlogSidebar component
