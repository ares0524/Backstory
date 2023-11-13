import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request ? request.cookies?.get('token') : null;
  const JWT = token?.value;

  const pathname = request.url;

  if (
    pathname.includes('/login') || 
    pathname.includes('/register') || 
    JWT 
  ) {
    return NextResponse.next();
  }

  if (!JWT && !request.nextUrl.pathname.startsWith('/login')) {    
    return NextResponse.redirect(new URL('/login', request.url))
  } 
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/dashboard/:path*',
    '/login/:path*',
    '/register/:path*',
    '/library/:path*',
    '/account/:path*',
    '/profile/:path*',
  ]
}