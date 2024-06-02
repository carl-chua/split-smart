import NextAuth from 'next-auth';
import Google from 'next-auth/providers/google';

const handler = NextAuth({
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID || '',
      clientSecret: process.env.AUTH_GOOGLE_SECRET || '',
    }),
    // ...add more providers here
  ],
});

export { handler as GET, handler as POST };
