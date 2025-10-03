  import { NextResponse } from 'next/server'
  import type { NextRequest } from 'next/server'

  export function middleware(request: NextRequest) {
    const token = request.cookies.get('token')?.value
    const verified = request.cookies.get('verified')?.value === 'true'

    const isAuthPage = request.nextUrl.pathname === '/' || request.nextUrl.pathname === '/login' || request.nextUrl.pathname === '/register'
    const isVerifyPage = request.nextUrl.pathname === '/verify'
    const isDashboard = request.nextUrl.pathname.startsWith('/dashboard')

    // If not logged in and trying to access protected routes → redirect to root (login/register)
    if (!token && (isDashboard || isVerifyPage)) {
      const url = request.nextUrl.clone()
      url.pathname = '/'
      return NextResponse.redirect(url)
    }

    // If logged in and verified and on auth/verify pages → send to dashboard
    if (token && verified && (isAuthPage || isVerifyPage)) {
      const url = request.nextUrl.clone()
      url.pathname = '/dashboard'
      return NextResponse.redirect(url)
    }

    // If logged in but not verified and trying to access dashboard → force verify
    if (token && !verified && isDashboard) {
      const url = request.nextUrl.clone()
      url.pathname = '/verify'
      return NextResponse.redirect(url)
    }

    return NextResponse.next()
  }

  export const config = {
    matcher: ['/((?!_next/static|_next/image|favicon.ico|public).*)'],
  }


