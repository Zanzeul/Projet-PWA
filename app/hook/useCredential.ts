import { useState } from "react";

const useCredentials = () => {
    const [credentials, setCredentials]  = useState({
        username: "",
        password: "",
        apikey : "",
    });

    const setUsername = (username : string) => {
        setCredentials((prev) => ({...prev,username}));
    }

    const setPassword = (password : string) => {
        setCredentials((prev) => ({...prev,password}));
    }

    const setApikey = (apikey : string) => {
        setCredentials((prev) => ({...prev,apikey}));
    }

    return {
        credentials,
        setUsername,
        setPassword,
        setApikey,
    };
}

export default useCredentials;