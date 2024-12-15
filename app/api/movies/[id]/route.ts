import { NextResponse } from 'next/server';
import { People } from '@/entities/People';



export async function GET(request : Request , {params} : {params : {id : string}}) 
{
  const url = "https://api.themoviedb.org/3/movie/" + params.id + "/credits";
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

       
        const cast: People[] = data.cast.map((item: People) => ({
            name : item.name,
            profile_path: "https://image.tmdb.org/t/p/w300/" + item.profile_path,
        }));

        const crew: People[] = data.crew.map((item: People) => ({
          name : item.name,
          profile_path: "https://image.tmdb.org/t/p/w300/" + item.profile_path,
          known_for_department : item.known_for_department,
      }));

        
        return NextResponse.json({cast,crew}, { status: 200 });

    } catch (error) {
        console.error(error);
    return NextResponse.json({ error: 'Erreur interne du serveur' }, { status: 500 });
    }
}