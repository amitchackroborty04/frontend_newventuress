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
      // if (state.businessInfo.length === 0) {
      //   // If no business exists, add a default one first
      //   state.businessInfo.push({
      //     country: "",
      //     state: [""],
      //     license: {
      //       metrcLicense: [""],
      //       cannabisLicense: [""],
      //       businessLicense: [""]
        
      //     }
      //   });
      // }
      // // Update the last business in the array
      // const lastIndex = state.businessInfo.length - 1;
      // state.businessInfo[lastIndex] = {
      //   ...state.businessInfo[lastIndex],
      //   ...action.payload,
      // };
    },
    addMetrcField: (state, action) => {
      // const {businessIndex} = action.payload
      // // Ensure businessInfo is not empty
      // if (businessIndex !== -1) {
      //   // Add a new empty string to the metrcLicense array for the specific business
      //   state.businessInfo[businessIndex].license.metrcLicense.push("");
      // } else {
      //   console.error(`No business found for for add new field`);
      // }
    },
    addCannabisField: (state, action) => {
      // const {businessIndex} = action.payload
      // // Ensure businessInfo is not empty
      // if (businessIndex !== -1) {
      //   // Add a new empty string to the metrcLicense array for the specific business
      //   state.businessInfo[businessIndex].license.cannabisLicense.push("");
      // } else {
      //   console.error(`No business found for for add new field`);
      // }
    },
    addBusinessField: (state, action) => {
      // const {businessIndex} = action.payload
      // // Ensure businessInfo is not empty
      // if (businessIndex !== -1) {
      //   // Add a new empty string to the metrcLicense array for the specific business
      //   state.businessInfo[businessIndex].license.businessLicense.push("");
      // } else {
      //   console.error(`No business found for for add new field`);
      // }
    },
    
    updateMetrcLicense: (state, action) => {
      // const { index, newLicenseValue, metrcInfoIndex } = action.payload;
    
      // // Ensure metrcInfoIndex is valid
      // if (
      //   state.businessInfo?.[metrcInfoIndex]?.license?.metrcLicense &&
      //   index >= 0 &&
      //   index < state.businessInfo[metrcInfoIndex].license.metrcLicense.length
      // ) {
      //   state.businessInfo = state.businessInfo.map((business, i) =>
      //     i === metrcInfoIndex
      //       ? {
      //           ...business,
      //           license: {
      //             ...business.license,
      //             metrcLicense: business.license.metrcLicense.map((license, j) =>
      //               j === index ? newLicenseValue : license
      //             )
      //           }
      //         }
      //       : business
      //   );
      // } else {
      //   if (!state.businessInfo?.length) {
      //     console.error("No businessInfo available to update a metrc license");
      //   } else {
      //     console.error("Invalid metrcLicense index or metrcInfoIndex");
      //   }
      // }
    }
,    
    updateCannabisLicense: (state, action) => {
      // const { index, newLicenseValue, cannabisInfoIndex } = action.payload;
    
      // // Ensure cannabisInfoIndex is valid
      // if (
      //   state.businessInfo?.[cannabisInfoIndex]?.license?.cannabisLicense &&
      //   index >= 0 &&
      //   index < state.businessInfo[cannabisInfoIndex].license.cannabisLicense.length
      // ) {
      //   state.businessInfo = state.businessInfo.map((business, i) =>
      //     i === cannabisInfoIndex
      //       ? {
      //           ...business,
      //           license: {
      //             ...business.license,
      //             cannabisLicense: business.license.cannabisLicense.map((license, j) =>
      //               j === index ? newLicenseValue : license
      //             )
      //           }
      //         }
      //       : business
      //   );
      // } else {
      //   if (!state.businessInfo?.length) {
      //     console.error("No businessInfo available to update a cannabis license");
      //   } else {
      //     console.error("Invalid cannabisLicense index or cannabisInfoIndex");
      //   }
      // }
    },
    
    updateBusinessLicense: (state, action) => {
    //   const { index, newLicenseValue, businessInfoIndex } = action.payload;
    
    //   if (
    //     state.businessInfo?.[businessInfoIndex]?.license?.businessLicense &&
    //     index >= 0 &&
    //     index < state.businessInfo[businessInfoIndex].license.businessLicense.length
    //   ) {
    //     // Immutably update the state
    //     state.businessInfo = state.businessInfo.map((business, i) => 
    //       i === businessInfoIndex
    //         ? {
    //             ...business,
    //             license: {
    //               ...business.license,
    //               businessLicense: business.license.businessLicense.map((license, j) =>
    //                 j === index ? newLicenseValue : license
    //               )
    //             }
    //           }
    //         : business
    //     );
    //   }
    }
    ,

    
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
