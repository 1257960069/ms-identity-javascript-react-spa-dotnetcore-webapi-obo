// For a full list of msal.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
export const msalConfig = {
    auth: {
        clientId: "9eaf8246-7323-4cdb-b2d4-dfaf2c5d5e8d",
        authority: "https://login.microsoftonline.com/consumers",
        redirectUri: "http://localhost:3000"
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
}

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "https://localhost:44351/api/profile",
    resourceScope: "api://09d29e5e-c86f-4652-beeb-39ee66b84b4e/.default"
}

/** 
 * Scopes you enter here will be consented once you authenticate. For a full list of available authentication parameters, 
 * visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
 */
export const loginRequest = {
    scopes: ["openid", "profile", "offline_access"]
}

// Add here scopes for access token to be used at the API endpoints.
export const tokenRequest = {
    scopes: [apiConfig.resourceScope]
}

// Add here scopes for silent token request
export const silentRequest = {
    scopes: ["openid", "profile", apiConfig.resourceScope]
}
