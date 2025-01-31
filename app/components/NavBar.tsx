'use client';

import * as React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import logo from '../../public/exarchis_logo.jpg';

export default function NavBar() {
  return (
    <div className="bg-black w-full flex flex-col justify-center items-center py-4 sm:flex-row">
      <Image src={logo} alt="logo" width={100} height={100} className="mb-6 sm:mr-12 sm:mb-0" />
      <NavigationMenu>
        <NavigationMenuList className="flex flex-col items-start sm:flex-row">
          <NavigationMenuItem>
            <Link href="/about-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Ποιοι ειμαστε</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/theater" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Θεατρο</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/news" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Νεα</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/contact-us" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Επικοινωνια</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/archive" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>Αρχειο</NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
