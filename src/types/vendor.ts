export interface GeneralSetting {
  storeName: string
  storeEmail: string
  storeLogo?: string
  storeShortDescription?: string
  facebookURL?: string
}

export interface Address {
  address: string
}

export interface CustomerSupport {
  phone: string
}

export interface VendorInfo {
  _id: number
  follower: number
  rating: number
  imageUrl: string
  generalSetting: GeneralSetting[] // Store details array
  billingAddress: Address[] // Billing addresses array
  shippingAddress?: Address[] // Optional shipping address
  customerSupport?: CustomerSupport[] // Support contacts array
}

export interface SearchBarProps {
  onSearch: (query: string) => void
  totalResults: number
}

export interface VendorCardProps {
  vendor: VendorInfo
}
