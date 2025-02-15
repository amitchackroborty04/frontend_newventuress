export type Country = {
    region: string;
    countryCode: string;
    country: string
}

export const countriesData = [
    { region: "Americas", countryCode: "US", country: "United States" },
    { region: "Americas", countryCode: "CA", country: "Canada" },
    { region: "Americas", countryCode: "MX", country: "Mexico" },
    { region: "Europe", countryCode: "DE", country: "Germany" },
    { region: "Europe", countryCode: "ES", country: "Spain" },
    { region: "Asia", countryCode: "TH", country: "Thailand" },
    { region: "Europe", countryCode: "NL", country: "Netherlands" },
    { region: "Europe", countryCode: "MT", country: "Malta" },
    { region: "Americas", countryCode: "UY", country: "Uruguay" },
    { region: "Americas", countryCode: "CO", country: "Colombia" }
  ] as Country[];
  

  export function getRegionByCountry(country: Country["country"]) {
    // Find the country object that matches the given country code
    const countryObj = countriesData.find((entry) => entry.country === country);
    
    // Return the region if found, otherwise return a message indicating no match
    if (countryObj) {
      return countryObj.region;
    } else {
      return "Country code not found";
    }
  }
  

  