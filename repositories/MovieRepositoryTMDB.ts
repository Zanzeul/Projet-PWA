import { DiscoverRepository } from "./interfaces/DiscoverRepository";
import { MovieRepository } from "./interfaces/MovieRepository";
import { DetailsMovieRepository } from "./interfaces/DetailsMovieRepository";
import { DetailsShowRepository } from "./interfaces/DetailsShowRepository";
import { ShowRepository } from "./interfaces/ShowRepository";
import { Movies } from "@/entities/Movies";
import { TVShows } from "@/entities/TVShows";
import { DetailsMovie } from "@/entities/DetailsMovie";
import { DetailsShow } from "@/entities/DetailsShow";

export class MovieAndShowsRepositoryTMDB implements MovieRepository, ShowRepository, DiscoverRepository, DetailsMovieRepository, DetailsShowRepository{

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

    getPopularShows(): Promise<TVShows[]> {
        
        async function fetchPopShows() {
            const response = await fetch("/api/shows/popular")

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
            
             return data

        }

        return fetchPopShows()
    }

    getTopRatedShows(): Promise<TVShows[]> {
        
        async function fetchTopRatedShows() {
            const response = await fetch("/api/shows/top-rated")

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
            
             return data

        }

        return fetchTopRatedShows()
    }

    getOnTheAirShows(): Promise<TVShows[]> {
        
        async function fetchOnTheAirShows() {
            const response = await fetch("/api/shows/on-the-air")

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
             
            
             return data

        }

        return fetchOnTheAirShows()
    }

    getDiscover(): Promise<{movie : Movies[]; show : TVShows[]}> {
        
        async function fetchDiscover() {
            const response = await fetch("/api/discover")

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
             
            
             return data

            }
    
            return fetchDiscover()
        }
    
        getByIdMovies( id : string): Promise<DetailsMovie> {
            
            async function fetchByIdMovies() {
                const response = await fetch("/api/movies/" + id)
    
                if(!response.ok){
                    return Error("Cquetuveux")
                }

             const data = await response.json()
             
            
             return data

        }

        return fetchByIdMovies()
    }

    getByIdShows( id : string): Promise<DetailsShow> {
        
        async function fetchByIdShows() {
            const response = await fetch("/api/shows/" + id)

            if(!response.ok){
                return Error("Cquetuveux")
            }

             const data = await response.json()
             
            
             return data

        }

        return fetchByIdShows()
    }
}