import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import Google from "next-auth/providers/google";
import Resend from "next-auth/providers/resend";

import { env } from "~/env";
import { db } from "~/server/db";

declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
    } & DefaultSession["user"];
  }
}

export const authProviderAvailability = {
  google: Boolean(env.AUTH_GOOGLE_ID && env.AUTH_GOOGLE_SECRET),
  email: Boolean(env.RESEND_API_KEY && env.RESEND_FROM_EMAIL),
};

const providers: NextAuthConfig["providers"] = [];

if (authProviderAvailability.google) {
  providers.push(
    Google({
      clientId: env.AUTH_GOOGLE_ID!,
      clientSecret: env.AUTH_GOOGLE_SECRET!,
    }),
  );
}

if (authProviderAvailability.email) {
  providers.push(
    Resend({
      apiKey: env.RESEND_API_KEY!,
      from: env.RESEND_FROM_EMAIL!,
    }),
  );
}

export const authConfig = {
  providers,
  adapter: PrismaAdapter(db),
  callbacks: {
    session: ({ session, user }) => ({
      ...session,
      user: {
        ...session.user,
        id: user.id,
      },
    }),
  },
} satisfies NextAuthConfig;
