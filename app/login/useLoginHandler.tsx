import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCredentials from "../hook/useCredential";
import { useLoginContext } from "../context/loginContext";

const useLoginHandler = () => {
    const { credentials } = useLoginContext();
    const [errorMessage, setErrorMessage] = useState("");
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
    
        console.log("Current credentials state:", credentials);
    
        const result = await signIn("credentials", {
            username: credentials.username,
            password: credentials.password,
            redirect: false,
        });
    
        console.log("Sign-in result:", result);
    
        if (result?.ok) {
            router.push("/dashboard/accueil");
        } else {
            setErrorMessage(result?.error || "Une erreur est survenue.");
        }
    };
    
    
    
    
    return { handleSubmit, errorMessage };
};

export default useLoginHandler;
