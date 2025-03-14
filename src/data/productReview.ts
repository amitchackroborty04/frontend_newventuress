export type ProductStatement = {
  title: string;
  description: string;
  _id: string;
};
export interface User {
  _id: string;
  email: string;
  fullName: string;
  image: string;
}

// interface Review {
//   _id: string;
//   user: User;
//   rating: number;
//   comment: string;
//   product: string; // Product ID (reference)
//   store: string; // Store ID (reference)
//   createdAt: string; // ISO Date String
//   updatedAt: string; // ISO Date String
//   __v: number;
// }
export interface ProductReviewDataType {
    _id: string;
  user: User;
  rating: number;
  comment: string;
  product: string; 
  store: string; 
  createdAt: string; 
  updatedAt: string; 
  __v: number;
  ProductStatement: ProductStatement[];
}

export interface ProductReviewDataResponse {
  success: boolean;
  message: string;
  data: ProductReviewDataType[];
  pagination: {
    totalPages: number;
  };
}
