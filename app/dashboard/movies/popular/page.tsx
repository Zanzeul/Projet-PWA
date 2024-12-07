'use client'
import { useFetchPopularMovies } from "./useCase/useFetchPopularMovies";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"

export default function PopularMovie() {
    const { movie, isError, isLoading } = useFetchPopularMovies();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    console.log(movie)

    return (
        <div className="flex gap-2 overflow-auto mt-[10%] mx-5 h-[65%] no-scrollbar">
        {movie?.map((movie) => 
            <Card key = {movie.id} className="bg-gray-50 w-1/5 flex-shrink-0">
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
    );
}
