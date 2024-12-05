'use client'

import { TVShows } from "../../../../../entities/TVShows"
import { useQuery } from "@tanstack/react-query"
import {useAppRepositoryContext} from "../../../../context/AppRepositoryContext"


export const useFetchPopularShows = () => {
    const { showRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<TVShows[]>({
        queryKey :  ["shows-popular"],
        queryFn: async () => await showRepository.getPopularShows(),
     });

     console.log(data)

     return { show : data, isLoading, isError};
};