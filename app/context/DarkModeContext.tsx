'use client'
import { createContext, useContext, ReactNode } from "react";
import useDarkMode from "../hook/useDarkMode";


export const DarkModeContext = createContext<{
    darkMode: { etat: boolean};
    setEtat: (etat: boolean) => void;
} | null>(null);


const DarkModeProvider = ({ children }: { children: ReactNode }) => {
    const { darkMode, setEtat } = useDarkMode();

    return (
        <DarkModeContext.Provider value={{ darkMode, setEtat}}>
            {children}
        </DarkModeContext.Provider>
    );
};


export const useDarkModeContext = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error("useDarkMode must be used within a DarkModeProvider");
    }
    return context;
};

export default DarkModeProvider;
