'use client'
import { useFetchTopRatedShows } from "./useCase/useFetchTopRatedShows";

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
            {show?.map((show) => 
                <p key={show.id}>{show.name}</p>
            )}
        </div>
    );
}
