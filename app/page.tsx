'use client';

import { SessionProvider } from 'next-auth/react';

import ResponsiveAppBar from '@components/ResponsiveAppBar';

export default function Home() {
	console.log('Home');

	return (
		<SessionProvider>
			<ResponsiveAppBar />
			<div className=''>Above navbar is using material tailwind</div>
			<div className=''>Bottom navigation is using material ui</div>
		</SessionProvider>
	);
}
