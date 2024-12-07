import { NextResponse } from 'next/server';
import { Movies } from '../../../entities/Movies';
import { TVShows } from '../../../entities/TVShows';

const movie_url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc';
const show_url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc';

export async function GET(request: Request) {
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

    
    const [movieResponse, showResponse] = await Promise.all([
      fetch(movie_url, options),
      fetch(show_url, options),
    ]);

    if (!movieResponse.ok || !showResponse.ok) {
      return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
    }

    const movieData = await movieResponse.json();
    const showData = await showResponse.json();

    const movie: Movies[] = movieData.results.map((item: Movies) => ({
      id: item.id,
      title: item.title,
      overview: item.overview,
      release_date: item.release_date,  
      poster_path: "https://image.tmdb.org/t/p/w500/" + item.poster_path,
    }));

    const show: TVShows[] = showData.results.map((item: TVShows) => ({
      id: item.id,
      name: item.name,
      overview: item.overview,
      first_air_date: item.first_air_date,
      poster_path: "https://image.tmdb.org/t/p/w500/" + item.poster_path,
    }));

    return NextResponse.json({ movie, show }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
