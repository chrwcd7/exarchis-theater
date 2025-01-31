'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useState, useEffect } from 'react';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from './NavigationMenu';
import logo from '../../public/exarchis_logo.jpg';
import DarkModeToggle from './DarkModeToggle';

export default function NavBar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (route: string) => pathname === route;

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the navbar when the route changes
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    //eslint-disable-next-line
  }, [pathname]);

  return (
    <div className={`bg-black w-full flex flex-col justify-center items-center p-4 sm:flex-row`}>
      <div className="flex flex-row gap-4">
        <Link href={'/'}>
          <Image src={logo} alt="logo" width={100} height={100} className="mb-6 sm:mb-0" />
        </Link>
        <button className="sm:hidden text-white" onClick={toggleMenu} aria-label="Toggle navigation menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <NavigationMenu className={`${isMenuOpen ? 'block' : 'hidden'} sm:block`}>
        <NavigationMenuList className="flex flex-col items-start sm:flex-row sm:ml-4">
          <NavigationMenuItem>
            <Link href="/theater" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                aria-label="Theater"
                data-active={isActive('/theater') ? true : undefined}
              >
                Θεατρο
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/theater-lab" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                aria-label="Theater lab"
                data-active={isActive('/theater-lab') ? true : undefined}
              >
                Εργαστηρι Θεατρου
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/archive" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                aria-label="Archive"
                data-active={isActive('/archive') ? true : undefined}
              >
                Αρχειο
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                aria-label="About Us"
                data-active={isActive('/about-us') ? true : undefined}
              >
                Ποιοι ειμαστε
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/news" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                aria-label="News"
                data-active={isActive('/news') ? true : undefined}
              >
                Νεα
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={navigationMenuTriggerStyle()}
                aria-label="Contact Us"
                data-active={isActive('/contact-us') ? true : undefined}
              >
                Επικοινωνια
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <DarkModeToggle />
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
