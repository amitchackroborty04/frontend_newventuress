export type AuctionProduct = {
    _id: string;
    vendorID: string;
    title: string;
    shortDescription: string;
    category: string;
    buyNowPrice: number;
    startingPrice: number;
    startingDateAndTime: Date; // Consider using Date if parsing is needed
    endingDateAndTime: Date; // Consider using Date if parsing is needed
    sku: string;
    stockQuantity: number;
    tags: string[]; // Fixing array structure, assuming it's an array of strings
    images: string[];
    createdAt: string; // Consider using Date if parsing is needed
    updatedAt: string; // Consider using Date if parsing is needed
    __v: number;
  };

  export type MetaPagination  = {
    currentPage: number,
        totalPages: number,
        totalItems: number,
        itemsPerPage: number
  }
  

   export type AuctionProductResponse = {
    success: boolean;
    message: string;
    data: AuctionProduct[];
    pagination: MetaPagination
   }