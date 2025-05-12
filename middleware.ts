import { NextRequest ,NextResponse } from "next/server";


export function middleware(request: NextRequest) {
    const token = request.cookies.get("next-auth.session-token");

  // If there's no token, redirect to login
  if (!token) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Optional: specify which routes should use this middleware
export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*"], // Update these paths as needed
};
