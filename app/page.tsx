'use client';

import ResponsiveAppBar from '@components/ResponsiveAppBar';
import { SessionProvider } from 'next-auth/react';

export default function Home() {
	console.log('Home');

	return (
		<SessionProvider>
			<ResponsiveAppBar />
			<div className="">Above navbar is using material tailwind</div>
			<div className="">Bottom navigation is using material ui</div>
		</SessionProvider>
	);
}
