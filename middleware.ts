import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req, secret: process.env.NEXTAUTH_SECRET });

    const { pathname } = req.nextUrl;

    const isPublicFile = /\.(.*)$/.test(pathname);
    if (
        pathname.startsWith("/api") ||
        pathname.startsWith("/_next") ||
        isPublicFile ||
        pathname === "/auth/login"
    ) {
        return NextResponse.next();
    }

    if (!token) {
        const loginUrl = new URL("/auth/login", req.url);
        // loginUrl.searchParams.set("callbackUrl", pathname);
        return NextResponse.redirect(loginUrl);
    }

    return NextResponse.next();
}
