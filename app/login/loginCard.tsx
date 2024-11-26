import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLoginContext } from "../context/loginContext"
import useLoginHandler from "./useLoginHandler"


export const LoginCard = ()  => {

    const { credentials, setPassword, setUsername } = useLoginContext();
    const { handleSubmit, errorMessage } = useLoginHandler();


    return ( 
    <Card className="w-[400px]">
    <CardHeader className = "flex justify-center items-center">
      <CardTitle>🎬 Cinetica</CardTitle>
    </CardHeader>
    <CardContent>
    <form onSubmit={handleSubmit}>
        <div className="grid w-full items-center gap-4">
          <div className="flex flex-col space-y-5">
            <Label htmlFor="name">Nom d&apos;utilisateur ou mail</Label>
            <Input  
              id="username"
              placeholder="username"
              value={credentials.username}
              onChange={(e) => setUsername(e.target.value)} />
          </div>
          <div className="flex flex-col space-y-5">
            <Label htmlFor="name">Mot de passe</Label>
            <Input 
              id="password"
              type="password"
              placeholder="password"
              value={credentials.password}
              onChange={(e) => setPassword(e.target.value)} />
          </div>
        </div>
        <CardFooter className="flex justify-center items-center p-4">
          <Button type="submit">Connexion</Button>
        </CardFooter>
        {errorMessage && (
          <p className="text-red-500 text-center mt-2">{errorMessage}</p>
        )}
      </form>
    </CardContent>
  </Card>
  );
};

