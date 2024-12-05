'use client'
import { useFetchPopularShows } from "./useCase/useFectchPopularShows";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  

export default function ShowsPopular() {
    const { show, isError, isLoading } = useFetchPopularShows();

    if (isLoading) {
        return <p>Chargement en cours...</p>;
    }

    if (isError) {
        return <p>Une erreur a eu lieu.</p>;
    }

    console.log(show)
    return (
        <div className="flex gap-2 overflow-auto mt-[10%] mx-5 h-[65%] no-scrollbar">
            {show?.map((show) => 
                <Card key = {show.id} className="bg-gray-50 w-1/5 flex-shrink-0">
                    <CardHeader>
                     <CardTitle >{show.name}</CardTitle>
                     <CardDescription ></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <img className="w-[300px]" src={show.poster_path}/>
                    </CardContent>
                    <CardFooter>
                        <p>{show.first_air_date}</p>
                    </CardFooter>
                </Card>
            )}
        </div>
    );
}
