export type StoreReviews = {
  _id: string;
  user: string;
  rating: number;
  comment: string;
  store: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
  };

 
  

   export type StoreReviewsResponse = {
    success: boolean;
    message: string;
    data: StoreReviews[];
 
   }