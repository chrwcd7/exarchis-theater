'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import logo from '../../public/exarchis_logo.jpg';

export default function NavBar() {
  const pathname = usePathname();
  const isActive = (route: string) => pathname === route;

  return (
    <div className="bg-black w-full flex flex-col justify-center items-center py-4 sm:flex-row">
      <Link href={'/'}>
        <Image src={logo} alt="logo" width={100} height={100} className="mb-6 sm:mb-0" />
      </Link>
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col items-start sm:flex-row sm:ml-12">
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/about-us') ? 'bg-blue-500' : ''}`}
                aria-label="About Us"
              >
                Ποιοι ειμαστε
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/theater" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/theater') ? 'bg-blue-500' : ''}`}
                aria-label="Theater"
              >
                Θεατρο
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/news" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/news') ? 'bg-blue-500' : ''}`}
                aria-label="News"
              >
                Νεα
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/contact-us') ? 'bg-blue-500' : ''}`}
                aria-label="Contact Us"
              >
                Επικοινωνια
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/archive" legacyBehavior passHref>
              <NavigationMenuLink
                className={`${navigationMenuTriggerStyle()} ${isActive('/archive') ? 'bg-blue-500' : ''}`}
                aria-label="Archive"
              >
                Αρχειο
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
