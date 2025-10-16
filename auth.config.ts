import type { NextAuthConfig } from "next-auth";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    // The auth property contains the user's session, and the request property contains the incoming request.
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");
      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn) {
        // Prefer the request origin in production to avoid accidental redirects to localhost.
        // In non-production (dev/preview), allow overriding via AUTH_URL/NEXTAUTH_URL.
        const configuredOrigin =
          process.env.AUTH_URL ?? process.env.NEXTAUTH_URL;
        const origin =
          process.env.NODE_ENV === "production"
            ? nextUrl.origin
            : configuredOrigin ?? nextUrl.origin;
        return Response.redirect(new URL("/dashboard", origin));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
