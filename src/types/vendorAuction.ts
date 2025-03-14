export type AuctionDataTypeResponse = {
    status: boolean;
    message: string;
    data: AuctionDataType[];
    pagination: PaginationDataType;
};

export type AuctionDataType = {
    _id: string;
    vendorID?: string | null;
    title: string;
    shortDescription?: string;
    productType?: string;
    category?: CategoryDataType | null;
    startingPrice: number;
    startingTime: string;
    endingTime?: string;
    sku: string;
    stockQuantity: number;
    tags: string[];
    images: string[];
    createdAt: string;
    updatedAt: string;
    __v: number;
};

export type CategoryDataType = {
    _id: string;
    categoryName: string;
    image: string;
    slug: string;
    subCategory: string;
    __v: number;
    industry: string;
};

export type PaginationDataType = {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
};
