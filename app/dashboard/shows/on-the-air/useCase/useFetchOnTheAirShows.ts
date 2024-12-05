'use client'

import { TVShows } from "../../../../../entities/TVShows"
import { useQuery } from "@tanstack/react-query"
import {useAppRepositoryContext} from "../../../../context/AppRepositoryContext"


export const useFetchOnTheAirShows = () => {
    const { showRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<TVShows[]>({
        queryKey :  ["shows-on-the-air"],
        queryFn: async () => await showRepository.getOnTheAirShows(),
     });

     console.log(data)

     return { show : data, isLoading, isError};
};