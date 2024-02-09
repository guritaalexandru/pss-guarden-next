import './globals.css';
import { Inter, } from 'next/font/google';
import React from 'react';

const inter = Inter({ subsets: ['latin'], });

export const metadata = {
  title: 'Guarden - Guard your garden',
};

export default function RootLayout({ children, }) {
  return (
      <html lang="en">
      <body className={ inter.className }>
        <div>{children}</div>
      </body>
      </html>
  );
}
