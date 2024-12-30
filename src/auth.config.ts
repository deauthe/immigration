import { NextAuthConfig } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";

export default {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: 1, name: "Test User", email: "test@gmail.com" };
        if (user) {
          return user;
        }
        else {
          return null;
        }
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
} satisfies NextAuthConfig;
