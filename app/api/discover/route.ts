import { NextResponse } from 'next/server'; // Utilisez NextResponse pour les réponses
import { Movies } from '../../../entities/Movies';
import { TVShows } from '../../../entities/TVShows';

const movie_url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=fr-FR&page=1&sort_by=popularity.desc';
const show_url = 'https://api.themoviedb.org/3/discover/tv?include_adult=false&include_null_first_air_dates=false&language=fr-FR&page=1&sort_by=popularity.desc';

const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2NmYyNzY4NzU0NmYyMDY3MzMzNDYyOWUwNGRjOWM3MCIsIm5iZiI6MTczMDgyMDExOS45OTIzMTUzLCJzdWIiOiI2NzJhMzM5YjE0ZDRhMzk5NzIwMzU2MDAiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0._QOFs8qsJmlp3C3eUZVLptw2xG6B6LBwBLQdldX4m2A'
  }
};

export async function GET() {
  try {
    const [movieResponse, showResponse] = await Promise.all([
      fetch(movie_url, options),
      fetch(show_url, options)
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
      releaseDate: item.releaseDate,
      posterPath: item.posterPath
    }));

    const show: TVShows[] = showData.results.map((item: TVShows) => ({
      id: item.id,
      name: item.name,
      overview: item.overview,
      releaseDate: item.releaseDate,
      posterPath: item.posterPath
    }));

    return NextResponse.json({ movie, show }, { status: 200 });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
  }
}
