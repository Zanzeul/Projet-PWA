'use client'
import { createContext, useContext, ReactNode } from "react";
import useCredentials from "../hook/useCredential";


export const LoginContext = createContext<{
    credentials: { username: string; password: string;apikey:string};
    setUsername: (username: string) => void;
    setPassword: (password: string) => void;
    setApikey: (apikey : string) => void;
} | null>(null);


const LoginProvider = ({ children }: { children: ReactNode }) => {
    const { credentials, setPassword, setUsername,setApikey } = useCredentials();

    return (
        <LoginContext.Provider value={{ credentials, setPassword, setUsername,setApikey }}>
            {children}
        </LoginContext.Provider>
    );
};


export const useLoginContext = () => {
    const context = useContext(LoginContext);
    if (!context) {
        throw new Error("useLoginContext must be used within a LoginProvider");
    }
    return context;
};

export default LoginProvider;
