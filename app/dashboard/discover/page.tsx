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
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

export default function Discover() {
    const { discover, isError, isLoading } = useFetchDiscover();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }
    console.log(discover)
    console.log(discover?.movie)
    return (
        <div className="h-full">
            <div 
            className="hidden md:block">
                <h1 className="m-10">Discover Movies</h1>
                <div className="flex gap-2 overflow-auto mx-5 h-[65%]= ">
                {discover?.movie.map((movie) => 
                    <Card key = {movie.id} className="bg-gray-50  flex-shrink-0">
                        <CardHeader>
                        <CardTitle >{movie.title}</CardTitle>
                        <CardDescription ></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <img className="w-[300px]" src={movie.poster_path}/>
                        </CardContent>
                        <CardFooter>
                            <p>{movie.release_date}</p>
                        </CardFooter>
                    </Card>
                )}
                </div>
                <h1 className="m-10">Discover Shows</h1>
                <div className="flex gap-2 overflow-auto  mx-5 h-[65%] ">
                {discover?.show.map((show) => 
                    <Card key = {show.id} className="bg-gray-50 flex-shrink-0">
                        <CardHeader>
                        <CardTitle >{show.name}</CardTitle>
                        <CardDescription ></CardDescription>
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
            <h1 >Discover Movies</h1>
            <Carousel>
                <CarouselContent>
                    {discover?.movie.map((movie) => (
                        <CarouselItem key={movie.id}>
                            <div className="p-2">
                                <Card className="bg-gray-50 ">
                                    <CardHeader className="flex justify-center items-center flex-col">
                                        <CardTitle >{movie.title}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center items-center flex-col" >
                                        <img className="w-[75%]" src={movie.poster_path}/>
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center flex-col">
                                         <p>{movie.release_date}</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
            <h1 >Discover Shows</h1>
            <Carousel>
                <CarouselContent>
                    {discover?.show.map((show) => (
                        <CarouselItem key={show.id}>
                            <div className="p-2">
                                <Card className="bg-gray-50 ">
                                    <CardHeader className="flex justify-center items-center flex-col">
                                        <CardTitle >{show.name}</CardTitle>
                                    </CardHeader>
                                    <CardContent className="flex justify-center items-center flex-col" >
                                        <img className="w-[75%]" src={show.poster_path}/>
                                    </CardContent>
                                    <CardFooter className="flex justify-center items-center flex-col">
                                         <p>{show.first_air_date}</p>
                                    </CardFooter>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel>
        </div>
        </div>
    );
}
