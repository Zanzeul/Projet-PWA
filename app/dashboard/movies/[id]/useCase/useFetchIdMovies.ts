'use client'

import { useAppRepositoryContext } from "@/app/context/AppRepositoryContext";
import { useQuery } from "@tanstack/react-query"
import { Peoples } from "@/entities/Peoples"


export const useFetchIdMovies = (id : string) => {
    const { peoplesRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<Peoples>({
        queryKey :  ["movies-peoples"],
        queryFn: async () => await peoplesRepository.getByIdMovies(id),
     });

     return { peoples : data, isLoading, isError};
};