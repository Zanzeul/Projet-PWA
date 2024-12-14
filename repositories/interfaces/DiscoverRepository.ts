import { Movies } from "@/entities/Movies";
import { TVShows } from "@/entities/TVShows";

export interface DiscoverRepository{
    
    getDiscover(): Promise<{movie : Movies[]; show : TVShows[]}>;
}