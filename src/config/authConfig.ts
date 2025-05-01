import { Configuration, PopupRequest } from "@azure/msal-browser";

// Get environment variables
const clientId = import.meta.env.VITE_AZURE_B2C_CLIENT_ID;
const tenantName = import.meta.env.VITE_AZURE_B2C_TENANT_NAME;
const userFlow = import.meta.env.VITE_AZURE_B2C_USER_FLOW;
const redirectUri = import.meta.env.VITE_AZURE_B2C_REDIRECT_URI || "http://localhost:5173";

// Validate required environment variables
if (!clientId || !tenantName || !userFlow) {
    throw new Error("Missing required Azure B2C environment variables. Please check your .env file.");
}

// Azure B2C configuration
export const msalConfig: Configuration = {
    auth: {
        clientId,
        authority: `https://${tenantName}.b2clogin.com/${tenantName}.onmicrosoft.com/${userFlow}`,
        knownAuthorities: [`${tenantName}.b2clogin.com`],
        redirectUri,
        navigateToLoginRequestUrl: true,
        postLogoutRedirectUri: redirectUri
    },
    cache: {
        cacheLocation: "sessionStorage",
        storeAuthStateInCookie: false,
    }
};

// Add here scopes for id token to be used at MS Identity Platform endpoints.
export const loginRequest: PopupRequest = {
    scopes: ["openid", "profile"],
    prompt: "select_account"
};

// Add here the endpoints for MS Graph API services you would like to use.
export const graphConfig = {
    graphMeEndpoint: "https://graph.microsoft.com/v1.0/me",
}; 