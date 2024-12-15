'use client'
import { useFetchDiscover } from "./useCase/useFetchDiscover"
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import {
    Carousel,
    CarouselContent,
    CarouselItem,
  } from "@/components/ui/carousel"
  import { useDarkModeContext } from "@/app/context/DarkModeContext"
  import { useRouter } from "next/navigation";
  

export default function Discover() {
    const { discover, isError, isLoading } = useFetchDiscover();
    const {darkMode}  = useDarkModeContext()
    const router = useRouter();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }
    console.log(discover)
    console.log(discover?.movie)
    return (
        <div className="h-[80%] b-[11%] ">
            <div 
            className="hidden md:block">
                <h2 className="m-10">Discover Movies</h2>
                <div className="flex gap-2 overflow-auto mx-5 h-[65%]= ">
                {discover?.movie.map((movie) => 
                    <Card onClick = { () => {router.push("/dashboard/movies/" + movie.id)}} key = {movie.id} className={`${
                        darkMode.etat ? 'bg-gray-800 text-white  border-black'  : 'bg-gray-50'
                    } flex-shrink-0`}>
                        <CardHeader>
                        <CardTitle >{movie.title}</CardTitle>
                        <CardDescription ></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img className="w-[300px] rounded-md" src={movie.poster_path}/>
                        </CardContent>
                        <CardFooter>
                            <p>{movie.release_date}</p>
                        </CardFooter>
                    </Card>
                )}
                </div>
                <h2 className="m-10">Discover Shows</h2>
                <div className="flex gap-2 overflow-auto  mx-5 h-[65%] ">
                {discover?.show.map((show) => 
                    <Card onClick = { () => {router.push("/dashboard/shows/" + show.id)}} key = {show.id} className={`${
                        darkMode.etat ? 'bg-gray-800 text-white border-black' : 'bg-gray-50'
                    } flex-shrink-0`}>
                        <CardHeader>
                        <CardTitle >{show.name}</CardTitle>
                        <CardDescription ></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img className="w-[300px] rounded-md" src={show.poster_path}/>
                        </CardContent>
                        <CardFooter>
                            <p>{show.first_air_date}</p>
                        </CardFooter>
                    </Card>
                )}
                </div>
            </div>
            <div className="md:hidden overflow-auto"> {/* Parent pleine hauteur */}
            <h2 >Discover Movies</h2>
            <Carousel >
                <CarouselContent>
                    {discover?.movie.map((movie) => (
                        <CarouselItem key={movie.id}>
                            <div className="p-2">
                                <Card onClick = { () => {router.push("/dashboard/movies/" + movie.id)}} className={`${
                        darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                    } flex-shrink-0`}>
                                    <CardHeader className="flex justify-center items-center flex-col">
                                        <CardTitle >{movie.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center items-center flex-col" >
                                        <img className="w-[77%] rounded-md" src={movie.poster_path}/>
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center flex-col">
                                         <p>{movie.release_date}</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            <h2 >Discover Shows</h2>
            <Carousel>
                <CarouselContent>
                    {discover?.show.map((show) => (
                        <CarouselItem key={show.id}>
                            <div className="p-2">
                                <Card onClick = { () => {router.push("/dashboard/shows/" + show.id)}} className={`${
                        darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                    } flex-shrink-0`}>
                                    <CardHeader className="flex justify-center items-center flex-col">
                                        <CardTitle >{show.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center items-center flex-col" >
                                        <img className="w-[77%] rounded-md" src={show.poster_path}/>
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center flex-col">
                                         <p>{show.first_air_date}</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </div>
        </div>
    );
}
