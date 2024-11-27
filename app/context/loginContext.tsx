'use client'
import { createContext, useContext, ReactNode } from "react";
import useCredentials from "../hook/useCredential";

// Création du contexte
export const LoginContext = createContext<{
    credentials: { username: string; password: string;apikey:string};
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    setApikey: (apikey : string) => void;
} | null>(null);

// Provider du contexte
const LoginProvider = ({ children }: { children: ReactNode }) => {
    const { credentials, setPassword, setUsername,setApikey } = useCredentials();

    return (
        <LoginContext.Provider value={{ credentials, setPassword, setUsername,setApikey }}>
            {children}
        </LoginContext.Provider>
    );
};

// Hook personnalisé pour utiliser le contexte
export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext must be used within a LoginProvider");
    }
    return context;
};

export default LoginProvider;
