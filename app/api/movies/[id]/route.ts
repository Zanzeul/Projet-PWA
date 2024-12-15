import { NextResponse } from 'next/server';
import { People } from '@/entities/People';
import { Movie } from '@/entities/Movie';
import { Image } from '@/entities/Image';



export async function GET(request : Request , {params} : {params : {id : string}}) 
{
  const url_credits = "https://api.themoviedb.org/3/movie/" + params.id + "/credits?language=fr-FR";
  const url_movie = "https://api.themoviedb.org/3/movie/" + params.id + "?language=fr-FR";
  const url_images = "https://api.themoviedb.org/3/movie/ "+ params.id + "/images";

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

        
        const response_credits = await fetch(url_credits,options);
        const response_movie = await fetch(url_movie,options);
        const response_images = await fetch(url_images,options);
        
        if (!response_credits.ok || !response_movie.ok || !response_images.ok) {
            return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
        }

        const data_credits = await response_credits.json();
        const data_movie = await response_movie.json();
        const data_images = await response_images.json();
       
        const cast: People[] = data_credits.cast.map((item: People) => ({
            id : item.id,
            name : item.name,
            profile_path: "https://image.tmdb.org/t/p/w300/" + item.profile_path,
            character : item.character,
        }));

        const crew: People[] = data_credits.crew.map((item: People) => ({
          id : item.id,
          name : item.name,
          profile_path: "https://image.tmdb.org/t/p/w300/" + item.profile_path,
          department : item.department,
      }));

      const movie: Movie = {
        title: data_movie.title,             
        overview: data_movie.overview,      
        tagline: data_movie.tagline,
        release_date: data_movie.release_date,     
        poster_path: "https://image.tmdb.org/t/p/w300/" + data_movie.poster_path,      
        vote_average : data_movie.vote_average,
        vote_count : data_movie.vote_count,
      }

      const images : Image[] = data_images.backdrops.map((item : Image) =>({
        file_path : "https://image.tmdb.org/t/p/w500" + item.file_path,
      }))



        
        return NextResponse.json({images,movie,cast,crew}, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}