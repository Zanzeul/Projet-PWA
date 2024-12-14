'use client'
import { useFetchPopularShows } from "./useCase/useFectchPopularShows";
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
  import { useDarkModeContext } from "@/app/context/DarkModeContext";
  import { useRouter } from "next/navigation";
  

export default function ShowsPopular() {
    const { show, isError, isLoading } = useFetchPopularShows();
    const {darkMode}  = useDarkModeContext()
    const router = useRouter();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    console.log(show)
    return (
        <div>
        <h2> Popular Shows</h2>
        <div className="hidden md:block">
           <div className="flex gap-2 overflow-auto mt-[10%] mx-5 h-[65%]">
                {show?.map((show) => 
                    <Card onClick = { () => {router.push("/dashboard/shows/" + show.id)}} key = {show.id} className={`${
                        darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                        } w-1/5 flex-shrink-0`} >
                        <CardHeader>
                            <CardTitle >{show.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <img className="w-[300px]" src={show.poster_path}/>
                        </CardContent>
                        <CardFooter>
                            <p>{show.first_air_date}</p>
                        </CardFooter>
                    </Card>
                )}
            </div>
        </div>
        <div className="md:hidden"> {/* Parent pleine hauteur */}
            <Carousel>
                <CarouselContent>
                    {show?.map((show) => (
                        <CarouselItem key={show.id}>
                            <div className="p-2">
                            <Card onClick = { () => {router.push("/dashboard/shows/" + show.id)}}
                                className={`${
                                darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                                } h-full`} >
                                    <CardHeader className="flex justify-center items-center flex-col">
                                        <CardTitle >{show.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center items-center flex-col" >
                                        <img className="w-[77%]" src={show.poster_path}/>
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
