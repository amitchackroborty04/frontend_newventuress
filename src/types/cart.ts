export interface CartItem {
    id: string
    name: string
    price: number
    originalPrice: number
    image: string
    quantity: number
    rating: number
    stock : string
    // isHot?: boolean
    // icon: "heart",
    // views?: number
  }
  
  export interface CartState {
    items: CartItem[]
  }
  
  // interface CartProduct {
  //   productId: string;
  //   _id: string;
  // }
  
  // export interface CartData {
  //   _id: string;
  //   user: string | null;
  //   subTotal: number;
  //   shippingCost: number;
  //   taxEstimate: number;
  //   totalItem: number;
  //   product: CartProduct[];
  //   __v: number;
  // }
  
  // export interface CartResponse {
  //   status: boolean;
  //   message: string;
  //   data: CartData;
  // }
  