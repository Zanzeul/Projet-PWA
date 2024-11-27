import { NextResponse } from 'next/server';
import { Movies } from '../../../../entities/Movies';

const url = 'https://api.themoviedb.org/3/movie/top_rated?language=fr-FR&page=1';


export async function GET( request : Request
) {
    try {
        const token = request.headers.get('Authorization')?.split(' ')[1]; // Récupère le token dans le format "Bearer token"

        if (!token) {
          return NextResponse.json({ error: 'Token manquant ou invalide' }, { status: 401 });
        }
    
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`, // Utilisation du token récupéré
          },
        };

        // 1. Récupérer les données depuis l'URL externe
        const response = await fetch(url,options);
        
        if (!response.ok) {
            return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
        }

        // 2. Analyser les données JSON reçues
        const data = await response.json();

        // 3. Filtrer les champs pour ne conserver que ceux pertinents pour l'entité Movie
        const movies: Movies[] = data.results.map((item: Movies) => ({
            id: item.id,
            title: item.title,
            overview: item.overview,
            releaseDate: item.releaseDate,  // Assurez-vous que le champ correspond bien à celui attendu par votre interface
            posterPath: item.posterPath,
        }));

        // 4. Envoyer la réponse avec les films filtrés
        return NextResponse.json({movies}, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}