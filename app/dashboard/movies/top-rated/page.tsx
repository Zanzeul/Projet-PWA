'use client'
import { useFetchTopRatedMovies } from "./useCase/useFetchTopRatingMovies";
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

export default function PopularMovie() {
    const { movie, isError, isLoading } = useFetchTopRatedMovies();
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
        <div className="md:hidden"> {/* Parent pleine hauteur */}
           <Carousel>
          <CarouselContent>
         {movie?.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-2">
              <Card className="bg-gray-50 ">
                <CardHeader className="flex justify-center items-center flex-col">
                    <CardTitle >{movie.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center flex-col" >
                     <img className="w-[75%]"
                      src={movie.poster_path}/>
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
      </div>
      </div>
    );
}
