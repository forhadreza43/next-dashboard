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
        // Use NEXTAUTH_URL (set in Vercel) as the canonical origin when available.
        // This avoids accidental redirects to localhost when the deployment
        // environment does not provide the correct origin.
        const origin = process.env.NEXTAUTH_URL ?? nextUrl.origin;
        return Response.redirect(new URL("/dashboard", origin));
      }
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
