'use client'
import { useFetchNowPlayingMovies } from "./useCase/useFetchNowPlayingMovies";
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
  
  import { useRouter } from "next/navigation";

export default function NowPlayingMovie() {
    const { movie, isError, isLoading } = useFetchNowPlayingMovies();
    const router = useRouter();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    console.log(movie)

    return (

      <div>
        <h2> Now Playing Movies</h2>
      <div className="hidden md:block">
       <div className=" flex gap-2 overflow-auto mt-[10%] mx-5 h-[65%] no-scrollbar ">
            {movie?.map((movie) => 
                <Card onClick = { () => {router.push("/dashboard/movies/detail")}} key = {movie.id} className="bg-gray-50 w-1/5 flex-shrink-0">
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
        </div>
        <div className="md:hidden -w-full h-full flex items-center justify-center"> {/* Parent pleine hauteur */}
           <Carousel className="w-full w-max-sm ">
          <CarouselContent>
         {movie?.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-2">
              <Card className=" bg-gray-50">
                <CardHeader>
                    <CardTitle >{movie.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex aspect-[9/12] items-center justify-center p-6">
                     <img className="w-[90%]" src={movie.poster_path}/>
                </CardContent>
                <CardFooter>
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
      </div>
      </div>
      
    );
}