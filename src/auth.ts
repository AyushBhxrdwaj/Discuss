import NextAuth from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import GithubProvider from "next-auth/providers/github";
import { prisma } from "@/lib";

if (!process.env.GITHUB_CLIENT_ID || !process.env.GITHUB_CLIENT_SECRET) {
  throw new Error(
    "GITHUB_CLIENT_ID and GITHUB_CLIENT_SECRET must be set in .env.local"
  );
}
export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
  callbacks: {
    async signIn({ user, account }) {
      if (account?.provider && user?.email) {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email },
          include: { accounts: true },
        });

        if (
          existingUser &&
          !existingUser.accounts.some((a) => a.provider === account.provider)
        ) {
          await prisma.account.create({
            data: {
              userId: existingUser.id,
              type: account.type,
              provider: account.provider,
              providerAccountId: account.providerAccountId,
              access_token: account.access_token,
              refresh_token: account.refresh_token,
              expiresAt: account.expires_at ?? null,
              tokenType:
                typeof account.token_type === "string"
                  ? account.token_type
                  : null,
              scope: typeof account.scope === "string" ? account.scope : null,
              id_token:
                typeof account.id_token === "string" ? account.id_token : null,
              sessionState:
                typeof account.session_state === "string"
                  ? account.session_state
                  : null,
            },
          });
        }
      }

      return true;
    },
  },
});
