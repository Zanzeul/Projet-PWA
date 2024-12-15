'use client'
import { useDarkModeContext } from "@/app/context/DarkModeContext";
import { useRouter } from "next/navigation";
import { useFetchIdMovies } from "./useCase/useFetchIdMovies";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {User } from "lucide-react";

export default function Page({params}: { params: { id: string } }) {
    const { peoples, isError, isLoading } = useFetchIdMovies(params.id);
    const router = useRouter();
    const {darkMode}  = useDarkModeContext()
    
    
    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }
    return (
        <div>
            <h2> Cast </h2>
            <div className=" flex gap-2 overflow-auto">
                {peoples?.cast.map((cast) => 
                    <Card key = {cast.name} className={`${
                    darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                }  flex-shrink-0`} >
                    <CardHeader>
                    <CardTitle >{cast.name}</CardTitle>
                    <CardDescription ></CardDescription>
                    </CardHeader>
                    <CardContent>
                        {(cast.profile_path != "https://image.tmdb.org/t/p/w300/null") ? (<img className="w-[100px]" src={cast.profile_path} alt="profile" />) : (<User className="h-[150px]" size={100}></User>)}
                    </CardContent>

                </Card>
                )}
            </div>

            <h2> Crew </h2>
            <div className=" flex gap-2 overflow-auto">
                {peoples?.crew.map((crew) => 
                    <Card key = {crew.name} className={`${
                    darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                }  flex-shrink-0`} >
                    <CardHeader>
                    <CardTitle >{crew.name}</CardTitle>
                    <CardDescription ></CardDescription>
                    </CardHeader>
                    <CardContent>
                        {(crew.profile_path != "https://image.tmdb.org/t/p/w300/null") ? (<img className="w-[100px]" src={crew.profile_path} alt="profile" />) : (<User className="h-[150px]" size={100}></User>)}
                    </CardContent>
                    <CardFooter>
                        <p>{crew.known_for_department}</p>
                    </CardFooter>
                </Card>
                )}
            </div>
    </div>
    )
  }