'use client'

import { Movies } from "../../../../../entities/Movies"
import { useQuery } from "@tanstack/react-query"
import {useAppRepositoryContext} from "../../../../context/AppRepositoryContext"


export const useFetchTopRatedMovies = () => {
    const { movieRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<Movies[]>({
        queryKey :  ["movies-now-playing"],
        queryFn: async () => await movieRepository.getTopRatedMovies(),
     });

     return { movie : data, isLoading, isError};
};