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
    size: string;
    quantity: string;
    sku: string;
    coa: boolean;
    tags: string[];
    review: string[];
    __v: number;
  }

  export interface ProductResponse {
    status: boolean;
    data?: Product[],
    message?: string
  }