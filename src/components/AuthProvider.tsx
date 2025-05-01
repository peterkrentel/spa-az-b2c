import { MsalProvider } from "@azure/msal-react";
import { PublicClientApplication, EventType, InteractionRequiredAuthError } from "@azure/msal-browser";
import { msalConfig } from "../config/authConfig";
import { useEffect, useState } from "react";

const msalInstance = new PublicClientApplication(msalConfig);

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const initializeMsal = async () => {
            try {
                // Initialize MSAL
                await msalInstance.initialize();
                console.log("MSAL initialized successfully with config:", msalConfig);

                // Add event callbacks for debugging
                msalInstance.addEventCallback((event) => {
                    console.log("MSAL Event:", event.eventType, event);
                    if (event.eventType === EventType.LOGIN_SUCCESS || event.eventType === EventType.ACQUIRE_TOKEN_SUCCESS) {
                        console.log("Authentication successful:", event);
                    } else if (event.eventType === EventType.LOGIN_FAILURE || event.eventType === EventType.ACQUIRE_TOKEN_FAILURE) {
                        console.error("Authentication failed:", event);
                        if (event.error instanceof InteractionRequiredAuthError) {
                            console.error("Interaction required:", event.error);
                        }
                    } else if (event.eventType === EventType.LOGOUT_SUCCESS) {
                        console.log("Logout successful:", event);
                    } else if (event.eventType === EventType.LOGOUT_FAILURE) {
                        console.error("Logout failed:", event);
                    }
                });

                // Handle redirect response
                const response = await msalInstance.handleRedirectPromise();
                if (response) {
                    console.log("Redirect response received:", response);
                }

                // Check if we're returning from a redirect
                const accounts = msalInstance.getAllAccounts();
                console.log("Current accounts:", accounts);
                if (accounts.length > 0) {
                    console.log("Found existing accounts:", accounts);
                }

                setIsInitialized(true);
            } catch (error) {
                console.error("Error initializing MSAL:", error);
            }
        };

        initializeMsal();
    }, []);

    if (!isInitialized) {
        return <div>Initializing authentication...</div>;
    }

    return (
        <MsalProvider instance={msalInstance}>
            {children}
        </MsalProvider>
    );
}; 