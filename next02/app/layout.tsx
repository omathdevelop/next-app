import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import NaviGation from './components/NaviGation';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata:Metadata = {
  title: 'Wiki 👨🏾‍🦱 App',
  description: 'Created by next04',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body 
      className={inter.className}>
        <NaviGation/>
        {children}
      </body>
    </html>
  )
};
