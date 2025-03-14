export interface Product {
    _id: string;
    storeId: string;
    title: string;
    shortDescription: string;
    description: string;
    images: string[];
    productType: string;
    stockStatus: string;
    cateogry: string;
    subCateogry: string;
    purchasedPrice: number;
    selllingPrice: number;
    discountPrice: number;
    startingPrice: number;
    size: string;
    quantity: string;
    startingTime: string;
    endingTime: Date;

    stockQuantity: number;
    sku: string;
    coa: boolean;
    tags: string[];
    review: string[];
    __v: number;
    purchases: number;
  }

  export interface ProductResponse {
    status: boolean;
    data?: Product[],
    message?: string
  }