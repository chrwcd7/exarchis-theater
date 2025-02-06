import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';

import './globals.css';
import NavBar from './components/NavBar';
import CookieConsentBanner from './components/CookieConsentBanner';
import Link from 'next/link';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Θέατρο Εξ Αρχής',
  description: 'Θέατρο Εξ Αρχής - Ένας δυναμικός χώρος τέχνης στην καρδιά της Αθήνας',
  metadataBase: new URL('https://theatroexarchis.gr'),
  openGraph: {
    title: 'Θέατρο Εξ Αρχής',
    description: 'Θέατρο Εξ Αρχής - Ένας δυναμικός χώρος τέχνης στην καρδιά της Αθήνας',
    images: '/exarchis_logo.jpg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased w-screen flex flex-col min-h-screen overflow-x-hidden bg-gray-100 dark:bg-gray-900`}
      >
        <header>
          <div className="container mx-auto flex flex-col">
            <NavBar />
          </div>
        </header>
        <main className="container mx-auto flex-grow py-8 px-4 sm:px-16">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <div className="mb-4">
              <p>
                <a
                  href={`https://www.google.com/maps/place/%CE%95%CE%BE+%CE%91%CF%81%CF%87%CE%AE%CF%82/@37.9894193,23.7327292,17z/data=!3m1!4b1!4m6!3m5!1s0x14a1bd172dbfe379:0x8f656a2707ead660!8m2!3d37.9894151!4d23.7353041!16s%2Fg%2F11g__w64kl?entry=ttu&g_ep=EgoyMDI1MDEwOC4wIKXMDSoASAFQAw%3D%3D`}
                  className="text-teal-500 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Σπύρου Τρικούπη 44, Εξάρχεια, Αθήνα
                </a>
              </p>
              <p>
                <a href="tel:2103822661" className="text-teal-500 hover:underline">
                  210 382 2661
                </a>
              </p>
              <p>
                <a href="mailto:exarhistheatro@gmail.com" className="text-teal-500 hover:underline">
                  exarhistheatro@gmail.com
                </a>
              </p>
            </div>
            <p>
              &copy; 2025 Θέατρο Εξ Αρχής
              <span className="text-xs text-gray-500 ml-4">
                Developed by{' '}
                <Link href="https://github.com/chrwcd7" target="_blank" className="text-teal-50/50">
                  chrwcd7
                </Link>
              </span>
            </p>
          </div>
        </footer>
        <CookieConsentBanner />
      </body>
    </html>
  );
}
