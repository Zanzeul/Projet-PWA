'use client'

import { useAppRepositoryContext } from "@/app/context/AppRepositoryContext";
import { useQuery } from "@tanstack/react-query"
import { Details } from "@/entities/Details"


export const useFetchIdMovies = (id : string) => {
    const { detailsRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<Details>({
        queryKey :  ["movies-details"],
        queryFn: async () => await detailsRepository.getByIdMovies(id),
     });

     return { details : data, isLoading, isError};
};