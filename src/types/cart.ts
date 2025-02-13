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
  
  