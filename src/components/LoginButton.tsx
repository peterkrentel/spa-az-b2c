import { useMsal } from "@azure/msal-react";
import { loginRequest } from "../config/authConfig";

export const LoginButton = () => {
    const { instance } = useMsal();

    const handleLogin = () => {
        instance.loginRedirect(loginRequest)
            .then((response) => {
                console.log("Login redirect initiated:", response);
            })
            .catch((error) => {
                console.error("Login failed:", error);
            });
    };

    return (
        <button onClick={handleLogin}>
            Sign In
        </button>
    );
}; 