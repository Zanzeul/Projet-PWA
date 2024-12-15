import { Peoples } from "@/entities/Peoples";

export interface PeoplesRepository{
    getByIdMovies(id : string): Promise<Peoples>;
    getByIdShows(id : string): Promise<Peoples>;
}