import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;


  const secret = process.env.NEXTAUTH_SECRET;


  if (pathname.startsWith('/dashboard')) {
    const token = await getToken({ req: request, secret });
    console.log("Token récupéré :", token);
    
    if (!token || (Date.now/1000 >= token.exp)) {
    
      return NextResponse.redirect(new URL('/login', request.url));
    }
  }

  
  if (pathname.startsWith('/api')) {
    const token = await getToken({ req: request, secret });

    if (token && (Date.now/1000 >= token.exp)) {
      const headers = new Headers(request.headers);
      headers.set('Authorization', `Bearer ${token.apikey}`);
      return NextResponse.next({
        request: {
          headers,
        },
      });
    } else {
      
      return NextResponse.json({ error: 'Token manquant ou invalide' }, { status: 401 });
    }
  }

  if(pathname.startsWith("/login")){
    const token = await getToken({req : request, secret})
    if(token && (Date.now()/1000 <= token.exp)){
      return NextResponse.redirect(new URL('/dashboard/accueil', request.url))
    }
  }

 
  return NextResponse.next();
}


export const config = {
  matcher: ['/dashboard/:path*', '/api/discover', '/api/movies/:path*','/api/shows/:path*', '/login/:path*'],
};
