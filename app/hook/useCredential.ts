import { useState } from "react";

const useCredentials = () => {
    const [credentials, setCredentials]  = useState({
        username: "",
        password: "",
    });

    const setUsername = (username : string) => {
        setCredentials((prev) => ({...prev,username}));
    }

    const setPassword = (password : string) => {
        setCredentials((prev) => ({...prev,password}));
    }

    return {
        credentials,
        setUsername,
        setPassword,
    };
}

export default useCredentials;