import { MovieRepository } from "./interfaces/MovieRepository";
import { Movies } from "@/entities/Movies";

export class MovieRepositoryTMDB implements MovieRepository{

    getPopularMovies(): Promise<Movies[]> {
        
        async function fetchPopMovies() {
            const response = await fetch("/api/movies/popular")

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
            
             return data

        }

        return fetchPopMovies()
    }

    getTopRatedMovies(): Promise<Movies[]> {
        
        async function fetchTopRatedMovies() {
            const response = await fetch("/api/movies/top-rated")

            if(!response.ok){
                return Error("Cquetuveux")
            }

            const data = await response.json()

            return data

        }

        return fetchTopRatedMovies()
    }

    async getNowPlayingMovies(): Promise<Movies[]> {
        
        async function fetchNowPlayingdMovies() {
            const response = await fetch("/api/movies/now-playing")

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
            
             return data

        }

        return await fetchNowPlayingdMovies() 
    }

}