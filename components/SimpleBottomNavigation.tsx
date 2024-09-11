'use client';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import LocalActivityIcon from '@mui/icons-material/LocalActivity';
import PeopleIcon from '@mui/icons-material/People';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
const PageMap = ['groups', 'friends', 'activity', 'account'];

export function SimpleBottomNavigation() {
	console.log('SimpleBottomNavigation');
	const router = useRouter();

	const [value, setValue] = useState(0);

	return (
		<Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
			<BottomNavigation
				showLabels
				value={value}
				onChange={(event, newValue) => {
					if (newValue === value) {
						return;
					}
					setValue(newValue);
					router.push(`/${PageMap[newValue]}`);
				}}
			>
				<BottomNavigationAction label="Groups" icon={<GroupsIcon />} />
				<BottomNavigationAction label="Friends" icon={<PeopleIcon />} />
				<BottomNavigationAction label="Activity" icon={<LocalActivityIcon />} />
				<BottomNavigationAction label="Account" icon={<AccountCircleIcon />} />
			</BottomNavigation>
		</Paper>
	);
}
