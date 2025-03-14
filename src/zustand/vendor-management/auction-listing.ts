import { create } from 'zustand';

// Define the types for the state
interface StoreState {
  show: string;
  setShow: (show: string) => void;
  productsType: string;
  setProductType: (type: string) => void;
  category: string;
  setCategory: (category: string) => void;
  store: string;
  setStore: (store: string) => void;
}

// Create the Zustand store
export const useVendorAuctionListingState = create<StoreState>((set) => ({
  show: 'all', // Default to "all"
  setShow: (show) => set({ show }),

  productsType: 'all', // Default to "all"
  setProductType: (type) => set({ productsType: type }),

  category: '',
  setCategory: (category) => set({ category }),

  store: '',
  setStore: (store) => set({ store }),
}));
