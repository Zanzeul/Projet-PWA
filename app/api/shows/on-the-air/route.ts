import { NextResponse } from 'next/server';
import { TVShows } from '../../../../entities/TVShows';

const url = 'https://api.themoviedb.org/3/tv/on_the_air?language=fr-FR&page=1';
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxMTIxN2Y3ZDk1YTNlOTVjMmI0MGNmYjVmYWZiYzRjNiIsIm5iZiI6MTczMDg5NTQxNy4xNTg0OTc4LCJzdWIiOiI2NzJiNTVjYjQyNGNjNmEzYmUyZTRkNDIiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.0FIVhsB8iRD3NkXdeFiXinVw8Jxe6BMniB2_YDUJAHo'
    }
  };

export async function GET(
) {
    try {

        // 1. Récupérer les données depuis l'URL externe
        const response = await fetch(url,options);
        
        if (!response.ok) {
            return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
        }

        // 2. Analyser les données JSON reçues
        const data = await response.json();

        // 3. Filtrer les champs pour ne conserver que ceux pertinents pour l'entité Movie
        const shows: TVShows[] = data.results.map((item: TVShows) => ({
            id: item.id,
            title: item.name,
            overview: item.overview,
            releaseDate: item.releaseDate,  // Assurez-vous que le champ correspond bien à celui attendu par votre interface
            posterPath: item.posterPath,
        }));

        // 4. Envoyer la réponse avec les films filtrés
        return NextResponse.json({shows}, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}