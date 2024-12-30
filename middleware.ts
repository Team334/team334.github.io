export { default } from "next-auth/middleware"

export const config = {
  matcher: [
    "/dashboard/:path*",
    "/admin/:path*",
    // Add any other protected routes here
  ]
} 