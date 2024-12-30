import { NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const url = req.nextUrl.clone();
  const password = process.env.NEXT_PUBLIC_DASHBOARD_PASSWD; // Store your password in an environment variable
  const userPassword = req.cookies.get('route-password');

  console.log("im working")
  if (!userPassword || userPassword.value !== password) {
    url.pathname = '/dashboard/login'; // Redirect to the login page
    return NextResponse.redirect(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/dashboard((?!/login).)*', // Match /dashboard and its children, but exclude /dashboard/login
  ],
}
