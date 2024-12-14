'use client'

import { useAppRepositoryContext } from "@/app/context/AppRepositoryContext";
import { Movies } from "@/entities/Movies"
import { TVShows } from "@/entities/TVShows";
import { useQuery } from "@tanstack/react-query"

export const useFetchDiscover= () => {
    const { discoverRepository} = useAppRepositoryContext();

    const { data, isLoading, isError} = useQuery<{movie : Movies[]; show : TVShows[]}>({
        queryKey :  ["discover"],
        queryFn: async () => await discoverRepository.getDiscover(),
     });
     console.log(data)

     return { discover : data, isLoading, isError};
};