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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

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
          <Image src={logo} alt="Exarchis logo" className="w-24 h-auto aspect-auto" priority />
        </Link>
        <button
          className={`text-white transition-transform duration-300 flex items-center ${
            isMenuOpen ? 'rotate-90' : ''
          } sm:hidden`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
        >
          <FontAwesomeIcon icon={faBars} className="w-6 h-6" />
        </button>
      </div>
      <NavigationMenu
        className={`${
          isMenuOpen ? 'max-h-screen opacity-100 mt-6' : 'max-h-0 opacity-0 mt-0'
        } overflow-hidden transition-all duration-300 ease-in-out sm:mt-0 sm:max-h-full sm:opacity-100 sm:overflow-visible`}
      >
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
