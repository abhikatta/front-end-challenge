import { NextRequest, NextResponse } from "next/server";
import { ROLES } from "./constants/roles";

export const proxy = (request: NextRequest) => {
  const user = request.cookies.get("user")?.value;
  const role = user ? JSON.parse(user).role : null;
  const { pathname } = request.nextUrl;

  console.log(user, role);

  if (!user) {
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
  if (
    user &&
    (pathname.startsWith("/login") || pathname.startsWith("signup"))
  ) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  if (role === ROLES.STORE_KEEPER && pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }
  return NextResponse.next();
};

export const config = {
  matcher: ["/((?!api|_next|favicon.ico|login|signup).*)"],
};
