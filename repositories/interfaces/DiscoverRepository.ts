import { Movies } from "@/entities/Movies";
import { TVShows } from "@/entities/TVShows";

export interface DiscoverRepository{
    
    getDiscover(): Promise<{movies : Movies[]; shows : TVShows[]}>;
}