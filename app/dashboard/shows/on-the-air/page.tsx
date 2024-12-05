'use client'
import { useFetchOnTheAirShows } from "./useCase/useFetchOnTheAirShows"

export default function ShowsOnTHeAIr() {
    const { show, isError, isLoading } = useFetchOnTheAirShows();

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
