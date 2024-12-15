'use client'

import { useAppRepositoryContext } from "@/app/context/AppRepositoryContext";
import { useQuery } from "@tanstack/react-query"
import { DetailsShow } from "@/entities/DetailsShow"


export const useFetchIdShows = (id : string) => {
    const { detailsShowRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<DetailsShow>({
        queryKey :  ["shows-details"],
        queryFn: async () => await detailsShowRepository.getByIdShows(id),
     });

     return { details : data, isLoading, isError};
};