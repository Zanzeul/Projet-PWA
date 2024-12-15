import { NextResponse } from 'next/server';
import { People } from '@/entities/People';
import { Image } from '@/entities/Image';
import { Show } from '@/entities/Show';



export async function GET(request : Request , {params} : {params : {id : string}}) 
{
  const url_credits = "https://api.themoviedb.org/3/tv/" + params.id + "/credits?language=fr-FR";
  const url_show = "https://api.themoviedb.org/3/tv/" + params.id + "?language=fr-FR";
  const url_images = "https://api.themoviedb.org/3/tv/ "+ params.id + "/images";

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
        const response_show = await fetch(url_show,options);
        const response_images = await fetch(url_images,options);
        
        if (!response_credits.ok || !response_show.ok || !response_images.ok) {
            return NextResponse.json({ error: 'Erreur lors de la récupération des données' }, { status: 500 });
        }

        const data_credits = await response_credits.json();
        const data_show = await response_show.json();
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

      const show: Show = {
        name: data_show.title,             
        overview: data_show.overview,      
        tagline: data_show.tagline,
        first_air_date: data_show.release_date,     
        poster_path: "https://image.tmdb.org/t/p/w300/" + data_show.poster_path,      
        vote_average : data_show.vote_average,
        vote_count : data_show.vote_count,
        number_of_episodes : data_show.number_of_episodes,
        number_of_seasons : data_show.number_of_seasons,
      }

      const images : Image[] = data_images.backdrops.map((item : Image) =>({
        file_path : "https://image.tmdb.org/t/p/w500" + item.file_path,
      }))



        
        return NextResponse.json({images,show,cast,crew}, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}