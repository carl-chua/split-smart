import {
  CubeTransparentIcon,
  UserCircleIcon,
  CodeBracketSquareIcon,
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from '@heroicons/react/24/solid';
import Image from 'next/image';
import React from 'react';

import {
  Navbar as TailwindNavbar,
  Collapse,
  Typography,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Card,
  IconButton,
} from '@/components/tailwind';

import { ProfileMenu } from './ProfileMenu';

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
        <MenuHandler>
          <Typography as='a' href='#' variant='small' className='font-normal'>
            <MenuItem className='hidden items-center gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full'>
              <Square3Stack3DIcon className='h-[18px] w-[18px] text-blue-gray-500' />{' '}
              Pages{' '}
              <ChevronDownIcon
                strokeWidth={2}
                className={`h-3 w-3 transition-transform ${
                  isMenuOpen ? 'rotate-180' : ''
                }`}
              />
            </MenuItem>
          </Typography>
        </MenuHandler>
        <MenuList className='hidden w-[36rem] grid-cols-7 gap-3 overflow-visible lg:grid'>
          <Card
            color='blue'
            shadow={false}
            variant='gradient'
            className='col-span-3 grid h-full w-full place-items-center rounded-md'
          >
            <RocketLaunchIcon strokeWidth={1} className='h-28 w-28' />
          </Card>
        </MenuList>
      </Menu>
      <MenuItem className='flex items-center gap-2 font-medium text-blue-gray-900 lg:hidden'>
        <Square3Stack3DIcon className='h-[18px] w-[18px] text-blue-gray-500' />{' '}
        Pages{' '}
      </MenuItem>
    </React.Fragment>
  );
}

// nav list component
const navListItems = [
  {
    label: 'Blocks',
    icon: CubeTransparentIcon,
  },
  {
    label: 'Docs',
    icon: CodeBracketSquareIcon,
  },
];

const NavList = () => {
  return (
    <ul className='mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center'>
      <NavListMenu />
      {navListItems.map(({ label, icon }, key) => (
        <Typography
          key={label}
          as='a'
          href='#'
          variant='small'
          color='gray'
          className='font-medium text-blue-gray-500'
        >
          <MenuItem className='flex items-center gap-2 lg:rounded-full'>
            {React.createElement(icon, { className: 'h-[18px] w-[18px]' })}{' '}
            <span className='text-gray-900'> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
};

export const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);

  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);

  React.useEffect(() => {
    window.addEventListener(
      'resize',
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <TailwindNavbar className='mx-auto max-w-screen-xl p-2 lg:rounded-full lg:pl-6'>
      <div className='relative mx-auto flex items-center justify-between text-blue-gray-900'>
        <Image
          src='/split_smart.png'
          alt='Split Smart Logo'
          width={40}
          height={40}
        />
        <Typography
          as='a'
          href='#'
          className='mr-4 ml-2 cursor-pointer py-1.5 font-medium'
        >
          Split Smart
        </Typography>
        <div className='hidden lg:block'>
          <NavList />
        </div>
        <IconButton
          size='sm'
          color='blue-gray'
          variant='text'
          onClick={toggleIsNavOpen}
          className='ml-auto mr-2 lg:hidden'
        >
          <Bars2Icon className='h-6 w-6' />
        </IconButton>

        <ProfileMenu />
      </div>
      <Collapse open={isNavOpen} className='overflow-scroll'>
        <NavList />
      </Collapse>
    </TailwindNavbar>
  );
};
