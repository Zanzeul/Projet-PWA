import { NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';
import type { NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
    console.log("Entrée dans me middleware");
  const { pathname } = request.nextUrl;

  // Secret utilisé pour vérifier les tokens JWT
  const secret = process.env.NEXTAUTH_SECRET;

  // Vérification du token pour les requêtes vers le tableau de bord
  if (pathname.startsWith('/dashboard')) {
    const token = await getToken({ req: request, secret });
    console.log("Token récupéré :", token);
    
    if (!token) {
      // Redirection vers la page de connexion si aucun token n'est trouvé
      return NextResponse.redirect(new URL('/', request.url));
    }
  }

  // Ajout du token dans les en-têtes pour les requêtes API
  if (pathname.startsWith('/api')) {
    const token = await getToken({ req: request, secret });

    if (token) {
      const headers = new Headers(request.headers);
      headers.set('Authorization', `Bearer ${token}`);
      return NextResponse.next({
        request: {
          headers,
        },
      });
    } else {
      // Si pas de token, renvoyez une erreur (ou redirigez, selon votre logique)
      return NextResponse.json({ error: 'Token manquant ou invalide' }, { status: 401 });
    }
  }

  // Si aucune condition n'est remplie, continue normalement
  return NextResponse.next();
}

// Export de la configuration du middleware à la fin du fichier
export const config = {
  matcher: ['/dashboard/:path*', '/api/:path*'],
};
