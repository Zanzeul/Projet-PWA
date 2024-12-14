'use client'
import { useFetchTopRatedShows } from "./useCase/useFetchTopRatedShows";
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


export default function ShowsTopRated() {
    const { show, isError, isLoading } = useFetchTopRatedShows();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    return (
        <div>
        <div className="hidden md:block">
           <div className="flex gap-2 overflow-auto mt-[10%] mx-5 h-[65%] no-scrollbar">
                {show?.map((show) => 
                    <Card key = {show.id} className="bg-gray-50 w-1/5 flex-shrink-0">
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
