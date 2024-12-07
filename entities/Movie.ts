export interface Movie {
    id: string;                // Identifiant unique du film
    title: string;             // Titre du film
    overview: string;          // Synopsis du film
    release_date: string;       // Date de sortie au format ISO (ex: "2023-05-15")
    poster_path: string;        // URL ou chemin vers l'affiche du film
}
