// For a full list of msal.js configuration parameters, 
// visit https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-browser/docs/configuration.md
export const msalConfig = {
    auth: {
        clientId: "3406cfad-19de-493c-86fb-adfffed44202",
        authority: "https://login.microsoftonline.com/72237054-fc99-4b57-9698-6e8339143505",
        redirectUri: "http://localhost:3000/"
    },
    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: false // Set this to "true" if you are having issues on IE11 or Edge
    },
}

// Coordinates and required scopes for your web api
export const apiConfig = {
    resourceUri: "https://localhost:44351/api/profile",
    resourceScope: "api://18635a17-b9f2-46e6-bb95-ac34e4ec9c63/.default"
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
