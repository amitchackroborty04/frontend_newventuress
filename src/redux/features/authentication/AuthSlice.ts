// @ts-nocheck 
import { createSlice } from "@reduxjs/toolkit";


interface License {
  name: string
  metrcLicense: string[];
  cannabisLicense: string[];
  businessLicense: string[];
}

// Define the initial state of the counter
interface Business {
  country: string;
  state?: string[];
  license: License[]
}

export interface authSliceType {
  industry: ("CBD/HEMP" | "Recreational Cannabis" | "Select All" )[];

  profession: string[];
  email: string;
  fullName: string;
  password: string;
  confirmPassword: string;
  businessInfo: Business[];
  businessName: string;
}

const initialState: authSliceType = {
  email: "",
  fullName: "",
  password: "",
  confirmPassword: "",
  industry: [],
  profession: [],

  businessInfo: [],
  businessName: ""
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
    addStateToBusiness: (state, action) => {
      const { country, stateName } = action.payload;

      const businessIndex = state.businessInfo.findIndex(
        (business) => business.country === country
      );

      if (businessIndex !== -1) {
        const business = state.businessInfo[businessIndex];
        if (!business.state) {
          business.state = [];
        }

        if (!business.state.includes(stateName)) {
          business.state.push(stateName);

          // also add a new license object 
          business.license.push({
            name: stateName,
            businessLicense: [""],
            cannabisLicense: [""],
            metrcLicense: [""]
          })
        } else {
          console.warn(`${stateName} is already present for country: ${country}`);
        }
      } else {
        console.error(`No business found for country: ${country}`);
      }
    },

    removeStateFromBusiness: (state, action) => {
      const { country, stateName } = action.payload;

      const businessIndex = state.businessInfo.findIndex(
        (business) => business.country === country
      );

      if (businessIndex !== -1) {
        const business = state.businessInfo[businessIndex];
        if (business.state?.includes(stateName)) {
          // remove state from states array
          business.state = business.state.filter((state) => state !== stateName);

          // remove license object from license array
          business.license = business.license.filter((license) => license.name !== stateName)
        } else {
          console.warn(`${stateName} not found for country: ${country}`);
        }
      } else {
        console.error(`No business found for country: ${country}`);
      }
    },
    updateBusiness: (state, action) => {
      if (state.businessInfo.length === 0) {
        // If no business exists, add a default one first
        state.businessInfo.push({
          country: "",
          state: [""],
          license: {
            metrcLicense: [""],
            cannabisLicense: [""],
            businessLicense: [""]
        
          }
        });
      }
      // Update the last business in the array
      const lastIndex = state.businessInfo.length - 1;
      state.businessInfo[lastIndex] = {
        ...state.businessInfo[lastIndex],
        ...action.payload,
      };
    },
    addMetrcField: (state, action) => {
      const { businessIndex, name } = action.payload;
    
      // Validate business index
      if (!state.businessInfo?.[businessIndex]) {
        console.error("Invalid business index or no business found.");
        return;
      }
    
      const business = state.businessInfo[businessIndex];
    
      // Ensure the business has a license array (for non-US/Canada countries)
      if (Array.isArray(business.license) && business.license.length > 0) {
        // Find the correct license entry based on the name
        const licenseEntry = business.license.find((license) => license.name === name);
    
        if (licenseEntry) {
          // Add a new empty string to metrcLicense of the found license entry
          licenseEntry.metrcLicense.push("");
        } else {
          console.error(`No license found with name: ${name}`);
        }
      } else {
        console.error("No license available to add a new field.");
      }
    },
    
    
    addCannabisField: (state, action) => {
      const { businessIndex, name } = action.payload;
    
      // Validate business index
      if (!state.businessInfo?.[businessIndex]) {
        console.error("Invalid business index or no business found.");
        return;
      }
    
      const business = state.businessInfo[businessIndex];
    
      // Ensure the business has a license array (for non-US/Canada countries)
      if (Array.isArray(business.license) && business.license.length > 0) {
        // Find the correct license entry based on the name
        const licenseEntry = business.license.find((license) => license.name === name);
    
        if (licenseEntry) {
          // Add a new empty string to cannabisLicense of the found license entry
          licenseEntry.cannabisLicense.push("");
        } else {
          console.error(`No license found with name: ${name}`);
        }
      } else {
        console.error("No license available to add a new cannabis field.");
      }
    },
    
    
    addBusinessField: (state, action) => {
      const { businessIndex, name } = action.payload;
    
      // Validate business index
      if (!state.businessInfo?.[businessIndex]) {
        console.error("Invalid business index or no business found.");
        return;
      }
    
      const business = state.businessInfo[businessIndex];
    
      // Ensure the business has a license array (for non-US/Canada countries)
      if (Array.isArray(business.license) && business.license.length > 0) {
        // Find the correct license entry based on the name
        const licenseEntry = business.license.find((license) => license.name === name);
    
        if (licenseEntry) {
          // Add a new empty string to businessLicense of the found license entry
          licenseEntry.businessLicense.push("");
        } else {
          console.error(`No license found with name: ${name}`);
        }
      } else {
        console.error("No license available to add a new business field.");
      }
    },
    
    
    
    updateMetrcLicense: (state, action) => {
      const { index, newLicenseValue, metrcInfoIndex, name } = action.payload;
    
      // Validate the business index
      if (!state.businessInfo?.[metrcInfoIndex]) {
        console.error("Invalid business index or no businessInfo available.");
        return;
      }
    
      const business = state.businessInfo[metrcInfoIndex];
    
      // Ensure the business has a license array (for non-US/Canada countries)
      if (Array.isArray(business.license) && business.license.length > 0) {
        // Find the correct license object based on the name
        const licenseEntry = business.license.find((license) => license.name === name);
    
        if (licenseEntry) {
          // Ensure the index is valid within metrcLicense
          if (licenseEntry.metrcLicense && index >= 0 && index < licenseEntry.metrcLicense.length) {
            licenseEntry.metrcLicense[index] = newLicenseValue;
          } else {
            console.error("Invalid metrcLicense index.");
          }
        } else {
          console.error(`No license found with name: ${name}`);
        }
      } else {
        console.error("No metrcLicense available to update.");
      }
    },
    
    

    updateCannabisLicense: (state, action) => {
      const { index, newLicenseValue, cannabisInfoIndex, name } = action.payload;
    
      // Validate the business index
      if (!state.businessInfo?.[cannabisInfoIndex]) {
        console.error("Invalid business index or no businessInfo available.");
        return;
      }
    
      const business = state.businessInfo[cannabisInfoIndex];
    
      // Ensure the business has a license array (for non-US/Canada countries)
      if (Array.isArray(business.license) && business.license.length > 0) {
        // Find the correct license object based on the name
        const licenseEntry = business.license.find((license) => license.name === name);
    
        if (licenseEntry) {
          // Ensure the index is valid within cannabisLicense
          if (licenseEntry.cannabisLicense && index >= 0 && index < licenseEntry.cannabisLicense.length) {
            licenseEntry.cannabisLicense[index] = newLicenseValue;
          } else {
            console.error("Invalid cannabisLicense index.");
          }
        } else {
          console.error(`No license found with name: ${name}`);
        }
      } else {
        console.error("No cannabisLicense available to update.");
      }
    },
    
    
    updateBusinessLicense: (state, action) => {
      const { index, newLicenseValue, businessInfoIndex, name } = action.payload;
    
      // Validate the business index
      if (!state.businessInfo?.[businessInfoIndex]) {
        console.error("Invalid business index or no businessInfo available.");
        return;
      }
    
      const business = state.businessInfo[businessInfoIndex];
    
      // Ensure the business has a license array (for non-US/Canada countries)
      if (Array.isArray(business.license) && business.license.length > 0) {
        // Find the correct license object based on the name
        const licenseEntry = business.license.find((license) => license.name === name);
    
        if (licenseEntry) {
          // Ensure the index is valid within businessLicense
          if (licenseEntry.businessLicense && index >= 0 && index < licenseEntry.businessLicense.length) {
            licenseEntry.businessLicense[index] = newLicenseValue;
          } else {
            console.error("Invalid businessLicense index.");
          }
        } else {
          console.error(`No license found with name: ${name}`);
        }
      } else {
        console.error("No businessLicense available to update.");
      }
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
  // updateBusiness,
  resetAuthSlice,
  updateMetrcLicense,
  addMetrcField,
  addCannabisField,
  addBusinessField,
  updateCannabisLicense,
  updateBusinessLicense,
  addStateToBusiness,
  removeStateFromBusiness

} = authSlice.actions;

// Export the reducer to configure the store
export default authSlice.reducer;
