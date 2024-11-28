import { Movies } from "@/entities/Movies";

export interface MovieRepository{
    getPopularMovies(): Promise<Movies[]>;
    getTopRatedMovies(): Promise<Movies[]>;
    getNowPlayingMovies(): Promise<Movies[]>
}