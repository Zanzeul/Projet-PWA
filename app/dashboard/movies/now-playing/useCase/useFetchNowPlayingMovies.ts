'use client'

import { useAppRepositoryContext } from "@/app/context/AppRepositoryContext";
import { Movies } from "@/entities/Movies"
import { useQuery } from "@tanstack/react-query"

export const useFetchNowPlayingMovies = () => {
    const { movieRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<Movies[]>({
        queryKey :  ["movies-now-playing"],
        queryFn: async () => await movieRepository.getNowPlayingMovies(),
     });

     return { movie : data, isLoading, isError};
};