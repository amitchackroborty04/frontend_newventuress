export interface ReviewCardProps {
  _id: string
      userID: string
      rating: number
      comment: string
      createdAt: string
      fullName: string
      userImage: string
}

export interface NavigationButtonProps {
  direction: "prev" | "next";
  iconSrc: string;
  onClick: () => void;
}

export interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  activeColor?: string;
  inactiveColor?: string;
}
