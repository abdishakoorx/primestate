import { NextResponse } from 'next/server';
import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware({
  publicRoutes: ["/home"],
  afterAuth(auth, req, evt) {
    const url = new URL(req.url);
    
    // Redirect all requests to root URL to /home
    if (url.pathname === '/') {
      return NextResponse.redirect(new URL('/home', req.url));
    }

    // Handle users who aren't authenticated trying to access protected routes
    if (!auth.userId && !auth.isPublicRoute) {
      return NextResponse.redirect(new URL('/home', req.url));
    }
  },
});

export const config = {
  matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
