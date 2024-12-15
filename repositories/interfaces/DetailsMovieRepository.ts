import { DetailsMovie } from "@/entities/DetailsMovie";

export interface DetailsMovieRepository{
    getByIdMovies(id : string): Promise<DetailsMovie>;
}