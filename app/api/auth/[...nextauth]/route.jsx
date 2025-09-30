import NextAuth from "next-auth/next";
import prisma from "../../../libs/prismadb";
import { PrismaAdapter } from "@auth/prisma-adapter";

import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";

// if ( ! process.env.NEXTAUTH_SECRET ){
//   throw new Error(
//     "please provide process.env.NEXTAUTH_SECRET environment variable"
//   );
// }

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" },
        username: {
          label: "Username",
          type: "text",
          placeholder: "John Smith",
        },
      },
      async authorize(credentials) {
        // check to see if email and password is there
        if (!credentials.email || !credentials.password) {
          throw new Error("Please enter an email and password");
        }

        // check to see if user exists
        const user = await prisma.user.findUnique({
          where: {
            email: credentials.email,
          },
        });

        // if no user was found
        if (!user || !user?.hashedPassword) {
          throw new Error("No user found");
        }

        // check to see if password matches
        const passwordMatch = await bcrypt.compare(
          credentials.password,
          user.hashedPassword
        );

        // if password does not match
        if (!passwordMatch) {
          throw new Error("Incorrect password");
        }
        // console.log('user after login :', user);
        return { id: user.id + "", ...user };
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      return true;
    },
    async redirect({ url, baseUrl }) {
      return baseUrl;
    },
    async session({ session, token, user }) {
      // store the user id from MongoDB to session

      const sessionUser = await prisma.user.findUnique({
        where: {
          email: session.user.email,
        },
      });

      return {
        ...session,
        userID: sessionUser.id,
      };
      return session;
    },
    async jwt({ token, user, account, profile, isNewUser }) {
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  secrect: process.env.NEXTAUTH_SECRET,
  debug: process.env.NODE_ENV === "developement",
  // pages: {
  //     signIn: '/signin',
  //     signOut: '/signout',
  //     error: '/auth/error',
  //     verifyRequest: '/auth/verify-request',
  //     newUser: '/auth/new-user'
  // }
};

const authHandler = NextAuth(authOptions);

export { authHandler as GET, authHandler as POST };
