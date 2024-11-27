import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import useCredentials from "../hook/useCredential";
import { useLoginContext } from "../context/loginContext";

const useLoginHandler = () => {
    const { credentials, setApikey } = useLoginContext();
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
            setApikey('eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTIxN2Y3ZDk1YTNlOTVjMmI0MGNmYjVmYWZiYzRjNiIsIm5iZiI6MTczMDg5NTQxNy4xNTg0OTc4LCJzdWIiOiI2NzJiNTVjYjQyNGNjNmEzYmUyZTRkNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0FIVhsB8iRD3NkXdeFiXinVw8Jxe6BMniB2_YDUJAHo');
            router.push("/dashboard/accueil");
        } else {
            setErrorMessage(result?.error || "Une erreur est survenue.");
        }
    };
    
    
    
    
    return { handleSubmit, errorMessage };
};

export default useLoginHandler;



