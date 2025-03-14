import { useQuery } from "@tanstack/react-query";
import Image from "next/image";

interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
  product: string;
  store: string;
  createdAt: string;
  updatedAt: string;
}

interface ApiResponse {
  message: string;
  data: Review[];
}

const fetchReviews = async (productId: string): Promise<Review[]> => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api//review/product/view/${productId}`,
  );
  const data: ApiResponse = await response.json();

  if (data.message === "successful" && Array.isArray(data.data)) {
    return data.data.filter((review) => review.product === productId);
  }

  return [];
};

interface RatingProps {
  productId: string;
}

export const Rating: React.FC<RatingProps> = ({ productId }) => {
  const {
    data: reviews = [],
    isLoading,
    error,
  } = useQuery({
    queryKey: ["reviews", productId],
    queryFn: () => fetchReviews(productId),
  });

  // console.log(reviews);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading reviews</p>;

  const averageRating =
    reviews.length > 0
      ? reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length
      : 0;

  const maxStars = 5;
  const filledStars = Math.round(averageRating); // Round rating to nearest whole number

  return (
    <div className="flex items-center">
      {[...Array(maxStars)].map((_, index) => (
        <Image
          key={index}
          loading="lazy"
          src={
            index < filledStars
              ? "/assets/svg/star-fill.svg"
              : "/assets/svg/star-outline.svg"
          }
          alt={index < filledStars ? "filled star" : "empty star"}
          height={12}
          width={12}
          className="aspect-square w-3 shrink-0 object-contain"
        />
      ))}
      <span className="ml-1 text-sm text-gray-600">
        ({averageRating.toFixed(1)})
      </span>
    </div>
  );
};

// Usage Example
// <Rating productId="67962b9e954391e7bf0abca5" />
