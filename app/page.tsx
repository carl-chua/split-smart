'use client';

import { SessionProvider } from 'next-auth/react';

import { Navbar } from '@/components/Navbar';
import { SimpleBottomNavigation } from '@/components/SimpleBottomNavigation';

export default function Home() {
	return (
		<SessionProvider>
			<main className='flex min-h-screen flex-col items-center'>
				<Navbar />
				<div className=''>Above navbar is using material tailwind</div>
				<div className=''>Bottom navigation is using material ui</div>
				<SimpleBottomNavigation />
			</main>
		</SessionProvider>
	);
}
