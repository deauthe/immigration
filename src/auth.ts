import NextAuth from "next-auth";
import authConfig from "@/auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "./lib/prisma";

export const { handlers, signIn, signOut, auth } = NextAuth({
  ...authConfig,
  callbacks: {
    async jwt({ token }) {
      return token;
    },
  },
  adapter: PrismaAdapter(prisma),
  session: { strategy: "jwt" },
});

//made a different authConfig file as prisma doesn't work with edge and we need to use this file with
//with edge in the middleware.ts file in the root
// so adapter needs to be defined here and config somewhere else
// we're not using the "session" strategy instead of jwt for the same reason
