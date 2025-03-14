// export type Category = {
//     _id: string;
//     categoryName: string;
//     image: string;
//     slug: string;
//     shortDescription: string;
//     __v: number;
//   };

//   export type CategoryResponse =  {
// status: boolean;
// message: string;
// data: Category[]
//   }



 export type CategoryResponse = {
    status: boolean;
    message: string;
    data: Category[];
    meta: Meta;
  };
  
export  type Category = {
    _id: string;
    categoryName: string;
    image: string;
    slug: string;
    shortDescription: string;
    industry: string;
    subCategory: string[];
    __v: number;
  };
  
 export type Meta = {
    currentPage: number;
    totalPages: number;
    totalItems: number;
    itemsPerPage: number;
  };
  