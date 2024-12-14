import { useState } from "react";


const useDarkMode = () => {
    const [darkMode, setDarkMode]  = useState({
        etat: true,
    });

    const setEtat = (etat : boolean) => {
        setDarkMode((prev) => ({...prev,etat}));
    }

    return {
        darkMode,
        setEtat,
    };
}

export default useDarkMode;