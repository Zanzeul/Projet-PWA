'use client'
import * as React from "react"
import {user} from "../repository/user"
import { useRouter } from 'next/navigation'
import * as bcrypt from 'bcryptjs'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"



export default function Home() {
  const router = useRouter()
  const [isLogged,setIsLogged] = React.useState(false)
  const [username,setUsername] = React.useState("")
  const [password,setPassword] = React.useState("")
  const [errorMessage, setErrorMessage] = React.useState("")

  const handleSubmit  = async (e: React.FormEvent) => {
    e.preventDefault()
    if (username === user.username && bcrypt.compareSync(password, user.password)){
      setIsLogged(true)
      setErrorMessage("")  // Réinitialiser l'erreur
      console.log("Bravo")
      router.push('/dashboard/accueil') 
    } else {
      setErrorMessage("Identifiants incorrects. Essayez à nouveau.")  // Afficher un message d'erreur
    }
  }

  return (
    <Card className="w-[400px]">
      <CardHeader className = "flex justify-center items-center">
        <CardTitle>🎬 Cinetica</CardTitle>
      </CardHeader>
      <CardContent>
      <form onSubmit={handleSubmit}>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-5">
              <Label htmlFor="name">Nom d'utilisateur ou mail</Label>
              <Input  
                id="username"
                placeholder="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="flex flex-col space-y-5">
              <Label htmlFor="name">Mot de passe</Label>
              <Input 
                id="password"
                type="password"
                placeholder="password"
                value={password}
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
  )
}
