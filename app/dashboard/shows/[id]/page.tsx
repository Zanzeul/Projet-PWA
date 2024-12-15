'use client'
import { useDarkModeContext } from "@/app/context/DarkModeContext";
import { useFetchIdShows } from "./useCase/useFetchIdShows";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {User } from "lucide-react";
  import { Progress } from "@/components/ui/progress";

export default function Page({params}: { params: { id: string } }) {
    const { details, isError, isLoading } = useFetchIdShows(params.id);
    const {darkMode}  = useDarkModeContext()
    
    
    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }
    return (
        <div>
            <div className = "flex flex-col sm:flex-row justify-beetween items-center p-5 m-5  ">
                   <Card  className={`${
                    darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                    } flex justify-center items-center flex-col`} >
                    <CardHeader>
                    <CardTitle >{details?.show.name}</CardTitle>
                    <CardDescription></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img className="rounded-md"src={details?.show.poster_path} alt="poster" />
                    </CardContent>
                    <CardFooter>
                        <p>{details?.show.tagline}</p>
                    </CardFooter>
                     </Card>
            
                    <Card  className={`${
                    darkMode.etat ? 'bg-gray-700 text-white  border-black' : ' bg-gray-50'
                    } flex justify-center items-center flex-col mt-10 sm:ml-10 p-5 w-full sm:w-1/2 `} >
                    <CardContent className="flex justify-center items-center flex-col">
                        <p>{details?.show.overview}</p>
                        <p> Nombre de saisons : {details?.show.number_of_seasons}</p>
                        <p> Nombre d'épisodes : {details?.show.number_of_episodes}</p>
                    </CardContent>
                        <p>Moyennes de notes sur {details?.show.vote_count} avis</p>
                        <Progress className="w-1/5" value={details?.show.vote_average ?  details?.show.vote_average*10 : 0}/>
                        <p>({details?.show.vote_average})</p>
                </Card> 
            </div>
            <div className=" flex gap-2 overflow-auto m-5 p-5">
                {details?.images.map((images,index) => 
                    <Card key={index} className={`${
                    darkMode.etat ? 'bg-gray-900 text-white  border-black' : 'bg-gray-200'
                }  flex-shrink-0 w-full sm:w-auto  `} >
                    <CardContent className = "flex justify-center items-center p-5 ">
                        <img className="  rounded-md" src={images.file_path} alt="movie_image" />
                    </CardContent>
                </Card>
                )}
            </div>
            <h2 className = "p-5"> Cast </h2>
            <div className=" flex gap-2 overflow-auto p-5 m-5">
                {details?.cast.map((cast, index) => 
                    <Card key = {index} className={`${
                    darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                }  flex-shrink-0`} >
                    <CardHeader>
                    <CardTitle >{cast.name}</CardTitle>
                    <CardDescription ></CardDescription>
                    </CardHeader>
                    <CardContent>
                        {(cast.profile_path != "https://image.tmdb.org/t/p/w300/null") ? (<img className="w-[100px] rounded-md" src={cast.profile_path} alt="profile" />) : (<User className="h-[150px]" size={100}></User>)}
                    </CardContent>
                    <CardFooter>
                        <p>{cast.character}</p>
                    </CardFooter>
                </Card>
                )}
            </div>

            <h2 className = "p-5"> Crew </h2>
            <div className=" flex gap-2 overflow-auto p-5 m-5">
                {details?.crew.map((crew,index) => 
                    <Card key = {index} className={`${
                    darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                }  flex-shrink-0`} >
                    <CardHeader>
                    <CardTitle >{crew.name}</CardTitle>
                    <CardDescription ></CardDescription>
                    </CardHeader>
                    <CardContent>
                        {(crew.profile_path != "https://image.tmdb.org/t/p/w300/null") ? (<img className="w-[100px] rounded-md" src={crew.profile_path} alt="profile" />) : (<User className="h-[150px]" size={100}></User>)}
                    </CardContent>
                    <CardFooter>
                        <p>{crew.department}</p>
                    </CardFooter>
                </Card>
                )}
            </div>
    </div>
    )
  }