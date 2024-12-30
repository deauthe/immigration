/**
 * An array of routes that can be accessed without authentication
 * @type {String[]}
 */
export const publicRoutes: string[] = [
	"/",
	"/migrate",
	"/about-us",
	"/assesment-form",
];

/**
 * An array of routes that are use for authentication
 * these routes will redirect authenticated users to settings
 * @type {String[]}
 */
export const authRoutes: string[] = [
	"/auth/login",
	"/auth/register",
	"/auth/signin",
];

/**
 * The prefix for API authentication routes
 * they should be public to all users
 */
export const apiAuthPrefix: string = "/api/auth";

/**
 * default path to redirect to after login
 * @type {String}
 */
export const DEFAULT_LOGIN_REDIRECT: string = "/assesment-form";

//hello from the past
