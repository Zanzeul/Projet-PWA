import { Details } from "@/entities/Details";

export interface DetailsRepository{
    getByIdMovies(id : string): Promise<Details>;
    getByIdShows(id : string): Promise<Details>;
}