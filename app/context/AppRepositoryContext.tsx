'use client'
import { MovieRepository } from "@/repositories/interfaces/MovieRepository";
import { MovieRepositoryTMDB } from "@/repositories/MovieRepositoryTMDB";
import { useContext, createContext } from "react";
import { PropsWithChildren } from "react";


interface Repository{
    movieRepository : MovieRepository;
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
       <AppRepositoryContext.Provider value = {{ movieRepository : new MovieRepositoryTMDB() }}>
            {children}
        </AppRepositoryContext.Provider> 
    )
};

export default AppRepositoryContextProvider