import Image from "next/image";
import { Star } from "lucide-react";

interface ProductReviewProps {
  image: string;
  title: string;
  reviewer: string;
  rating: number;
}

export default function ProductReview({
  image,
  title,
  reviewer,
  rating,
}: ProductReviewProps) {
  return (
    <div className="flex items-center gap-4 p-4 rounded-lg max-w-md">
      <div className="relative w-[142px] h-[110px] shrink-0">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="min-w-0">
        <div className="flex gap-0.5 mb-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${
                i < rating
                  ? "fill-[#FF8A00] text-[#FF8A00]"
                  : "fill-[#CCCCCC] text-[#CCCCCC]"
              }`}
            />
          ))}
        </div>
        <h3 className="text-[18px] font-semibold truncate mt-3 text-gradient dark:text-gradient-pink">{title}</h3>
        <p className="text-[16px] text-[#444444] truncate mt-2">{reviewer}</p>
      </div>
    </div>
  );
}