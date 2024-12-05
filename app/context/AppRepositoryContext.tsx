'use client'
import { MovieRepository } from "@/repositories/interfaces/MovieRepository";
import { ShowRepository } from "@/repositories/interfaces/ShowRepository";
import { MovieAndShowsRepositoryTMDB } from "@/repositories/MovieRepositoryTMDB";
import { useContext, createContext } from "react";
import { PropsWithChildren } from "react";


interface Repository{
    movieRepository : MovieRepository;
    showRepository : ShowRepository;
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
       <AppRepositoryContext.Provider value = {{ movieRepository : new MovieAndShowsRepositoryTMDB(), showRepository : new MovieAndShowsRepositoryTMDB}}>
            {children}
        </AppRepositoryContext.Provider> 
    )
};

export default AppRepositoryContextProvider