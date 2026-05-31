import { SupabaseAdapter } from '@auth/supabase-adapter';
import NextAuth from 'next-auth';
import { Adapter } from 'next-auth/adapters';
import Google from 'next-auth/providers/google';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

const adapter =
	supabaseUrl && supabaseServiceRoleKey
		? (SupabaseAdapter({
			url: supabaseUrl,
			secret: supabaseServiceRoleKey,
		}) as Adapter)
		: undefined;

const handler = NextAuth({
	providers: [
		Google({
			clientId: process.env.AUTH_GOOGLE_ID || '',
			clientSecret: process.env.AUTH_GOOGLE_SECRET || '',
		}),
		// ...add more providers here
	],
	adapter,
});

export { handler as GET, handler as POST };
