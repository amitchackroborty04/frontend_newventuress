import { create } from "zustand";

interface ProductStore {
    productType: string;
    setProductType: (newProducts: string) => void;
}

export const useAuctions = create<ProductStore>((set) => ({
 productType : "All Product Types",
  setProductType: (newProducts) => set({ productType: newProducts }),
}));
