'use client'
import { useFetchNowPlayingMovies } from "./useCase/useFetchNowPlayingMovies";

export default function NowPlayingMovie() {
    const { movie, isError, isLoading } = useFetchNowPlayingMovies();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    return (
        <div>
            {movie?.map((movie) => 
                <p key={movie.id}>{movie.title}</p>
            )}
        </div>
    );
}
