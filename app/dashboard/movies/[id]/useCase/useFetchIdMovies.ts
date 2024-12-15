'use client'

import { useAppRepositoryContext } from "@/app/context/AppRepositoryContext";
import { useQuery } from "@tanstack/react-query"
import { DetailsMovie } from "@/entities/DetailsMovie"


export const useFetchIdMovies = (id : string) => {
    const { detailsMovieRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<DetailsMovie>({
        queryKey :  ["movies-details"],
        queryFn: async () => await detailsMovieRepository.getByIdMovies(id),
     });

     return { details : data, isLoading, isError};
};