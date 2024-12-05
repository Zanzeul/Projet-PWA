'use client'

import { TVShows } from "../../../../../entities/TVShows"
import { useQuery } from "@tanstack/react-query"
import {useAppRepositoryContext} from "../../../../context/AppRepositoryContext"


export const useFetchTopRatedShows = () => {
    const { showRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<TVShows[]>({
        queryKey :  ["shows-top-rated"],
        queryFn: async () => await showRepository.getTopRatedShows(),
     });

     console.log(data)

     return { show : data, isLoading, isError};
};