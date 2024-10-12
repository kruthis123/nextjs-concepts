import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
    console.log('Arrived within middleware (This will be logged within server logs)');
    return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
    matcher: '/middleware-redirect',
}