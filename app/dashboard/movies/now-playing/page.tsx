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
  } from "@/components/ui/carousel"
  import { useDarkModeContext } from "@/app/context/DarkModeContext";
  import { useRouter } from "next/navigation";

export default function NowPlayingMovie() {
    const { movie, isError, isLoading } = useFetchNowPlayingMovies();
    const router = useRouter();
    const {darkMode}  = useDarkModeContext()

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
       <div className=" flex gap-2 overflow-auto mt-[10%] mx-5 h-[65%]  ">
            {movie?.map((movie) => 
                <Card onClick = { () => {router.push("/dashboard/movies/" + movie.id)}} key = {movie.id} className={`${
                  darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
              } w-1/5 flex-shrink-0`} >
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
        </div>
        <div className="md:hidden h-full"> {/* Parent pleine hauteur */}
           <Carousel>
          <CarouselContent>
         {movie?.map((movie) => (
          <CarouselItem key={movie.id}>
            <div className="p-2">
              <Card onClick = { () => {router.push("/dashboard/movies/" + movie.id)}}
                    className={`${
                        darkMode.etat ? 'bg-gray-800 text-white  border-black' : 'bg-gray-50'
                    } h-full`} >
                <CardHeader className="flex justify-center items-center flex-col">
                    <CardTitle >{movie.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex justify-center items-center flex-col" >
                     <img className="w-[77%] rounded-md"
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
    </Carousel>
      </div>
      </div>
      
    );
}