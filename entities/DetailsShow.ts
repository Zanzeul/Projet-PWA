import { People } from "./People"
import { Image } from "./Image";
import { Show } from "./Show";

export interface DetailsShow {
    cast : People[];
    crew : People[];
    show : Show;
    images : Image[];
}
