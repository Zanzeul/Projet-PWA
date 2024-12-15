import { People } from "./People"
import { Movie } from "./Movie";
import { Image } from "./Image";

export interface DetailsMovie {
    cast : People[];
    crew : People[];
    movie : Movie;
    images : Image[];
}
