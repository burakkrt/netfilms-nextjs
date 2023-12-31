import React from 'react';
import {Poppins} from 'next/font/google';
import type {Metadata} from 'next';
import '@styles/reset.css';
import '@styles/global.css';
import Header from '@components/header';
import Footer from '@components/footer';

const poppinsFontFamily = Poppins({weight: '300', subsets: ['latin']});

export const metadata: Metadata = {
  title: 'Vizyontele',
  description: 'The best movie platform',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="tr">
      <body
        className={`container ${poppinsFontFamily.className}`}
        suppressHydrationWarning={true}>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
