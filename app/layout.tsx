import { SimpleBottomNavigation } from '@components/SimpleBottomNavigation';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Split Smart',
  description: 'Split your bills smartly',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <meta name="viewport" content="initial-scale=1, width=device-width" />
      <CssBaseline />
      <body>
        <main className="flex flex-col w-full min-h-screen">
          {children}
          <SimpleBottomNavigation />
        </main>
      </body>
    </html>
  );
}
