import Image from 'next/image';

import { Navbar as TailwindNavbar, Typography } from '@/components/tailwind';

import { ProfileMenu } from './ProfileMenu';

export const Navbar = () => {
	return (
		<TailwindNavbar className='mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6'>
			<div className='relative mx-auto flex items-center justify-between text-blue-gray-900'>
				<div className='flex'>
					<Image src='/split_smart.png' alt='Split Smart Logo' width={40} height={40} />
					<Typography
						as='a'
						href='#'
						className='mr-4 ml-2 cursor-pointer py-1.5 font-medium'
					>
						Split Smart
					</Typography>
				</div>
				<ProfileMenu />
			</div>
		</TailwindNavbar>
	);
};
