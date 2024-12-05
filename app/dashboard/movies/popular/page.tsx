'use client'
import { useFetchPopularMovies } from "./useCase/useFetchPopularMovies";

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
        <div>
            {movie?.map((movie) => 
                <p key={movie.id}>{movie.title}</p>
            )}
        </div>
    );
}
