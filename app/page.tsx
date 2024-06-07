'use client';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import RestoreIcon from '@mui/icons-material/Restore';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { SessionProvider } from 'next-auth/react';
import { useState } from 'react';

import { Navbar } from '@/components/Navbar';

export function SimpleBottomNavigation() {
	const [value, setValue] = useState(0);

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					setValue(newValue);
				}}
			>
				<BottomNavigationAction label='Recents' icon={<RestoreIcon />} />
				<BottomNavigationAction label='Favorites' icon={<FavoriteIcon />} />
				<BottomNavigationAction label='Nearby' icon={<LocationOnIcon />} />
			</BottomNavigation>
		</Paper>
	);
}

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
