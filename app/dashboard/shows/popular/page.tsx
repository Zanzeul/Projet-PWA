'use client'
import { useFetchPopularShows } from "./useCase/useFectchPopularShows";

export default function ShowsPopular() {
    const { show, isError, isLoading } = useFetchPopularShows();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    console.log(show)
    return (
        <div>
            {show?.map((show) => 
                <p key={show.id}>{show.name}</p>
            )}
        </div>
    );
}
