import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { i18n } from '@/i18n';
import getLocale from '@/middlewares/getLocale.middleware';

export function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;

  // Verifique se há alguma localidade suportada no nome do caminho
  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  )

  // Verifique se a rota começa com `/imgs` ou '/api', se for, retorne a resposta atual
  if (pathname.startsWith('/assets') || pathname.startsWith('/api')) {
    return NextResponse.next();
  }

  NextResponse.redirect(new URL('/home', request.url))
  // Redirecionar se não houver localidade
  if (pathnameIsMissingLocale) {
    const locale = getLocale(request)
    //console.log(locale)
    return NextResponse.redirect(
      new URL(
        `/${locale}${pathname.startsWith('/') ? '' : '/'}${pathname}`,
        request.url
      )
    )
  }
  
  // ========= '3RANIY!
  
  if (pathname.match(/^\/[a-z]{2}\/?$/)) { // Verificar se a rota é `/:locale/, se for redireciona para /`
    const locale = pathname.split('/')[1];
    const newLocalePath = `/${locale}`;
    // Evitar redirecionamento se o pathname já estiver no formato desejado
    
    if (pathname !== newLocalePath) {
      return NextResponse.redirect(
        new URL(newLocalePath, request.url)
      );
    }
  }
  // =========
   
}

export const config = {
  // Matcher ignorando `/_next/` and `/api/`
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}