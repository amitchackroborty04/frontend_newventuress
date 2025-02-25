/**
 * An array of routes that are accesible to the public
 * These routes do not require authentication
 * @type {string[]}
 */

export const publicRoutes = ["/", "/age-alert"];

/**
 * An array of routes that are used for authentication
 * These routes will redirect loggedin users to homepage
 * @type {string[]}
 */

export const authRoutes = [
  "/login",
  "/registration",
  "/registration/experiences",
  "/registration/experiences/profession",
  "/registration/country",
  "/registration/country/Canada",
  "/registration/country/United%20States",
  "/registration/country/United%20States/business_information",
  "/registration/country/Canada/business_information",
  "/registration/country/Mexico/business_information",
  "/registration/country/Germany/business_information",
  "/registration/country/Spain/business_information",
  "/registration/country/Thailand/business_information",
];

/**
 * The prefix for API authentication routes
 * Routes that start with this prefix are used for API
 * @type {string}
 */
export const apiAuthPrefix = "/api/auth";

/**
 * The default redirect path after loggin in
 
 * @type {string}
 */
export const DEFAULT_LOGIN_REDIRECT = "/";
