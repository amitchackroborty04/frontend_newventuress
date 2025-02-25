export type Category = {
    _id: string;
    categoryName: string;
    image: string;
    slug: string;
    shortDescription: string;
    __v: number;
  };

  export type CategoryResponse =  {
status: boolean;
message: string;
data: Category[]
  }