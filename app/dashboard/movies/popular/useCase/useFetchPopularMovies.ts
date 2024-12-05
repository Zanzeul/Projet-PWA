'use client'

import { Movies } from "../../../../../entities/Movies"
import { useQuery } from "@tanstack/react-query"
import {useAppRepositoryContext} from "../../../../context/AppRepositoryContext"


export const useFetchPopularMovies = () => {
    const { movieRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<Movies[]>({
        queryKey :  ["movies-popular"],
        queryFn: async () => await movieRepository.getPopularMovies(),
     });

     return { movie : data, isLoading, isError};
};