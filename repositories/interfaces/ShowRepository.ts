import { TVShows } from "@/entities/TVShows";

export interface ShowRepository{
    getPopularShows(): Promise<TVShows[]>;
    getTopRatedShows(): Promise<TVShows[]>;
    getOnTheAirShows(): Promise<TVShows[]>
}