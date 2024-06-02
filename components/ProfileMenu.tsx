import {
  UserCircleIcon,
  ChevronDownIcon,
  PowerIcon,
} from '@heroicons/react/24/solid';
import { useSession, signIn, signOut } from 'next-auth/react';
import React from 'react';

import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from '@/components/tailwind';

export const ProfileMenu = () => {
  const { data: session } = useSession();

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  if (!session) {
    return (
      <Button size='sm' variant='text' onClick={() => signIn()}>
        <span>Sign In</span>
      </Button>
    );
  }

  const profileMenuItems = [
    {
      label: 'My Profile',
      icon: UserCircleIcon,
      onClick: () => {
        closeMenu();
      },
    },
  ];

  if (session) {
    profileMenuItems.push({
      label: 'Sign Out',
      icon: PowerIcon,
      onClick: () => {
        closeMenu();
        signOut();
      },
    });
  }

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement='bottom-end'>
      <MenuHandler>
        <Button
          variant='text'
          color='blue-gray'
          className='flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5 lg:ml-auto'
        >
          <Avatar
            variant='circular'
            size='sm'
            alt='avatar'
            className='border border-gray-900 p-0.5'
            src={session?.user?.image || ''}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? 'rotate-180' : ''
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className='p-1'>
        {profileMenuItems.map(({ label, icon, onClick }, key) => {
          const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={onClick}
              className={`flex items-center gap-2 rounded ${
                isLastItem
                  ? 'hover:bg-red-500/10 focus:bg-red-500/10 active:bg-red-500/10'
                  : ''
              }`}
            >
              {React.createElement(icon, {
                className: `h-4 w-4 ${isLastItem ? 'text-red-500' : ''}`,
                strokeWidth: 2,
              })}
              <Typography
                as='span'
                variant='small'
                className='font-normal'
                color={isLastItem ? 'red' : 'inherit'}
              >
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
};
