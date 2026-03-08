import { NextRequest, NextResponse } from "next/server";
import { ROLES } from "./constants/roles";

export function proxy(request: NextRequest) {
  const userCookie = request.cookies.get("user")?.value;
  const user = userCookie ? JSON.parse(userCookie) : null;

  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/login") || pathname.startsWith("/signup");

  if (!user && isAuthPage) {
    return NextResponse.next();
  }

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (user && isAuthPage) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (user.role === ROLES.STORE_KEEPER && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|favicon.ico).*)"],
};
