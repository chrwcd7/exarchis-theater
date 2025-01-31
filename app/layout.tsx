import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import NavBar from './components/NavBar';

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
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col min-h-screen bg-gray-100`}>
        <header>
          <div className="container mx-auto flex flex-col">
            <NavBar />
          </div>
        </header>
        <main className="container mx-auto flex-grow py-8 px-4 sm:px-16">{children}</main>
        <footer className="bg-gray-800 text-white py-4">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Θέατρο Εξαρχής. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
