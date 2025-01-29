import { createSlice } from "@reduxjs/toolkit";

// Define the initial state of the counter
interface Business {
  country: string;
  state?: string;
  license: string;
  resellerBusinessLicense: string;
}

export interface authSliceType {
  industry: "CBD/HEMP" | "Recreational Cannabis" | "Both" | "";

  profession: string[];
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  businessInfo: Business[];
}

const initialState: authSliceType = {
  email: "",
  fullName: "",
  password: "",
  confirmPassword: "",
  industry: "",
  profession: [],

  businessInfo: [],
};

// Create the slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setRegistrationValue: (state, action) => {
      return {
        ...state,
        ...action.payload,
      };
    },
    addNewBusiness: (state, action) => {
      state.businessInfo = action.payload;
    },
    updateBusiness: (state, action) => {
      if (state.businessInfo.length === 0) {
        // If no business exists, add a default one first
        state.businessInfo.push({
          country: "",
          state: "",
          license: "",
          resellerBusinessLicense: "",
        });
      }
      // Update the last business in the array
      const lastIndex = state.businessInfo.length - 1;
      state.businessInfo[lastIndex] = {
        ...state.businessInfo[lastIndex],
        ...action.payload,
      };
    },
    resetAuthSlice: () => {
      return initialState;
    },
  },
});

// Export actions for use in components
export const {
  setRegistrationValue,
  addNewBusiness,
  updateBusiness,
  resetAuthSlice,
} = authSlice.actions;

// Export the reducer to configure the store
export default authSlice.reducer;
