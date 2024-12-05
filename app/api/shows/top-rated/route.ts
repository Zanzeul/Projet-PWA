import { NextResponse } from 'next/server';
import { TVShows } from '../../../../entities/TVShows';

const url = 'https://api.themoviedb.org/3/tv/top_rated?language=fr-FR&page=1';

export async function GET(request : Request
) {
    try {

        const token = request.headers.get('Authorization')?.split(' ')[1]; 

        if (!token) {
          return NextResponse.json({ error: 'Token manquant ou invalide' }, { status: 401 });
        }
    
        const options = {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${token}`,
          },
        };

        
        const response = await fetch(url,options);
        
        if (!response.ok) {
            return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
        }

       
        const data = await response.json();

        
        const shows: TVShows[] = data.results.map((item: TVShows) => ({
            id: item.id,
            name: item.name,
            overview: item.overview,
            releaseDate: item.releaseDate, 
            posterPath: item.posterPath,
        }));

        
        return NextResponse.json(shows, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}