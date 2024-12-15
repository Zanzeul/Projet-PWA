'use client'
import { MovieRepository } from "@/repositories/interfaces/MovieRepository";
import { ShowRepository } from "@/repositories/interfaces/ShowRepository";
import { DiscoverRepository } from "@/repositories/interfaces/DiscoverRepository";
import { MovieAndShowsRepositoryTMDB } from "@/repositories/MovieRepositoryTMDB";
import { useContext, createContext } from "react";
import { PropsWithChildren } from "react";
import { PeoplesRepository } from "@/repositories/interfaces/PeoplesRepository";


interface Repository{
    movieRepository : MovieRepository;
    showRepository : ShowRepository;
    discoverRepository : DiscoverRepository;
    peoplesRepository : PeoplesRepository
}

const AppRepositoryContext= createContext <Repository | null >(null);

export const useAppRepositoryContext = () => {

    const context = useContext(AppRepositoryContext);
    if(context === null){
        throw new Error("C'est pas WRAP")
    }
    return context;

};

const AppRepositoryContextProvider = ({children} : PropsWithChildren) => {
    return (
       <AppRepositoryContext.Provider value = {{ movieRepository : new MovieAndShowsRepositoryTMDB(), showRepository : new MovieAndShowsRepositoryTMDB, discoverRepository : new MovieAndShowsRepositoryTMDB(),peoplesRepository : new MovieAndShowsRepositoryTMDB()}}>
            {children}
        </AppRepositoryContext.Provider> 
    )
};

export default AppRepositoryContextProvider