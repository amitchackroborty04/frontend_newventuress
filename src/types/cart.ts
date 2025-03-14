export interface CartItem {
    id: string
    name: string
    price: number
    originalPrice: number
    image: string
    quantity: number
    rating: number
    stock : string
  }
  
  export interface CartState {
    items: CartItem[]
  }

  
