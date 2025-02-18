export type Country = {
  region: string;
  countryCode: string;
  country: string;
  color: number;
  allow: string[]
}

export const countriesData: Country[] = [
  { region: "Americas", countryCode: "US", country: "United States", color: 80, allow: ["CBD/HEMP", "Recreational Cannabis", "Select All"] },
  { region: "Americas", countryCode: "CA", country: "Canada", color: 80, allow: ["CBD/HEMP", "Recreational Cannabis", "Select All"]},
  { region: "Americas", countryCode: "MX", country: "Mexico", color: 50, allow: ["CBD/HEMP"]},
  { region: "Europe", countryCode: "DE", country: "Germany", color: 80, allow: ["Recreational Cannabis"] },
  { region: "Europe", countryCode: "ES", country: "Spain", color: 80, allow: ["CBD/HEMP", "Recreational Cannabis", "Select All"]},
  { region: "Asia", countryCode: "TH", country: "Thailand", color: 50, allow: ["CBD/HEMP"]},
  { region: "Europe", countryCode: "NL", country: "Netherlands", color: 80, allow: ["CBD/HEMP", "Recreational Cannabis", "Select All"]},
  { region: "Americas", countryCode: "UY", country: "Uruguay", color: 80, allow: ["Recreational Cannabis"]},
  { region: "Americas", countryCode: "CO", country: "Colombia", color: 80, allow: ["Recreational Cannabis"]},
  { region: "Europe", countryCode: "AT", country: "Austria", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "BE", country: "Belgium", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "BG", country: "Bulgaria", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "HR", country: "Croatia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "CY", country: "Cyprus", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "CZ", country: "Czechia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "DK", country: "Denmark", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "EE", country: "Estonia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "FR", country: "France", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "GR", country: "Greece", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "HU", country: "Hungary", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "IE", country: "Ireland", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "IT", country: "Italy", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "LV", country: "Latvia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "LT", country: "Lithuania", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "LU", country: "Luxembourg", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "PL", country: "Poland", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "PT", country: "Portugal", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "RO", country: "Romania", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "SK", country: "Slovakia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "SI", country: "Slovenia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "CH", country: "Switzerland", color: 50, allow: ["CBD/HEMP"] },
  { region: "Europe", countryCode: "GB", country: "United Kingdom", color: 50, allow: ["CBD/HEMP"] },
  { region: "Americas", countryCode: "AR", country: "Argentina", color: 50, allow: ["CBD/HEMP"] },
  { region: "Asia", countryCode: "JP", country: "Japan", color: 50, allow: ["CBD/HEMP"] },
  { region: "Oceania", countryCode: "AU", country: "Australia", color: 50, allow: ["CBD/HEMP"] },
  { region: "Africa", countryCode: "ZA", country: "South Africa", color: 50, allow: ["CBD/HEMP"] },
];

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