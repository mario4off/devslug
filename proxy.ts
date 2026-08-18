import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { auth } from "@/auth";

export async function proxy(request: NextRequest) {
  const session = await auth();

  const isLoggedIn = session?.user != null;
  if (request.nextUrl.pathname == "/profile" && isLoggedIn) {
    return NextResponse.next();
  }
  return NextResponse.redirect(new URL("/auth/signin", request.url));
}

export const config = {
  matcher: ["/profile/:path*"],
};
