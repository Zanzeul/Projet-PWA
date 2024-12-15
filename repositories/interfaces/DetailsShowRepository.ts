import { DetailsShow } from "@/entities/DetailsShow";

export interface DetailsShowRepository{
    getByIdShows(id : string): Promise<DetailsShow>;
}