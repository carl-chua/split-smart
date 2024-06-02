'use client';

import { ThemeProvider } from '@material-tailwind/react';
import { SessionProvider } from 'next-auth/react';

import { Navbar } from '@/components/Navbar';

export default function Home() {
  return (
    <ThemeProvider>
      <SessionProvider>
        <Navbar />
        <main className='flex min-h-screen flex-col items-center p-10'>
          <div className=''>Home</div>
        </main>
      </SessionProvider>
    </ThemeProvider>
  );
}
