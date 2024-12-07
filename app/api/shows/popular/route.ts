import { NextResponse } from 'next/server';
import { TVShows } from '../../../../entities/TVShows';

const url = 'https://api.themoviedb.org/3/tv/popular?language=fr-FR&page=1';


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
            first_air_date: item.first_air_date,  
            poster_path: "https://image.tmdb.org/t/p/w500/" + item.poster_path,
        }));

        
        return NextResponse.json(shows, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}