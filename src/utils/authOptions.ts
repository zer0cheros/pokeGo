import  { AuthOptions, Session, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import prisma from "@/lib/prisma";
import { compareSync } from "bcrypt";
import { DefaultJWT, JWT} from "next-auth/jwt";


interface Props {
  session: Session;
  token: JWT & DefaultJWT;
}

export const authOptions:AuthOptions  = {
    providers: [
    Credentials({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "text",
        },
        password: {
          label: "Password",
          type: "password",
        },
      },
    async authorize(credentials) {
        const user: any | null = await prisma.user.findUnique({
            where: {
                email: credentials?.email,
            },
        });
        console.log(user)
        if (!user) {
            throw new Error("Email is not registered");
        }
        const match = compareSync(credentials!.password, user.password);
        if (!match) {
            throw new Error("Password is incorrect");
        }
        return user;
    },
    }),
    
  ],
  session: {
    strategy: "jwt"
  },
  jwt: {
    secret: `${process.env.NEXTAUTH_JWT_SECRET}`,
  },
  pages:{
    signIn: '/login',
  },
  adapter: PrismaAdapter(prisma),
  secret: `${process.env.NEXTAUTH_SECRET}`,
  callbacks: {
    async session({session, token}:Props) {
      session.user.id = token.sub || '';
      return Promise.resolve(session);
    },
  },
};
