import { Configuration, PopupRequest } from "@azure/msal-browser";

// Azure B2C configuration
export const msalConfig: Configuration = {
    auth: {
        clientId: "a60ab1f6-ac72-4293-aad5-e138ef137c62",
        authority: "https://B2CDemov1.b2clogin.com/B2CDemov1.onmicrosoft.com/B2C_1_signupsignin1",
        knownAuthorities: ["B2CDemov1.b2clogin.com"],
        redirectUri: "http://localhost:5173",
        navigateToLoginRequestUrl: true,
        postLogoutRedirectUri: "http://localhost:5173"
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