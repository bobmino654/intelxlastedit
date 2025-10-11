
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import React from 'react';

import { NAV_LINKS } from '@/lib/routes';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Logo } from './logo';
import { MobileNav } from './mobile-nav';
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center">
        <div className="mr-4 hidden md:flex">
          <Logo />
        </div>
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <MobileNav />
            </SheetContent>
          </Sheet>
        </div>
        <div className="flex flex-1 items-center justify-center md:justify-start">
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList>
              {NAV_LINKS.map((link) => (
                <NavigationMenuItem key={link.href}>
                  {link.subLinks ? (
                    <>
                      <NavigationMenuTrigger className="bg-transparent">
                          {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                           <li className="row-span-3">
                             <NavigationMenuLink asChild>
                               <a
                                 href="/services"
                                 className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                               >
                                 <Logo />
                                 <div className="mb-2 mt-4 text-lg font-medium">
                                   IntelX360 Services
                                 </div>
                                 <p className="text-sm leading-tight text-muted-foreground">
                                   Our full suite of cybersecurity solutions.
                                 </p>
                               </a>
                             </NavigationMenuLink>
                           </li>
                           {link.subLinks.map((subLink) => (
                            <li key={subLink.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={subLink.href}
                                  className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors"
                                >
                                  <div className="text-sm font-medium leading-none">{subLink.label}</div>
                                  <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                                    {subLink.description}
                                  </p>
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "bg-transparent")}>
                      <Link href={link.href}>
                        {link.label}
                      </Link>
                    </NavigationMenuLink>
                  )}
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </div>
        <div className="flex flex-1 items-center justify-end">
           <div className="flex md:hidden">
             <Logo />
           </div>
          <div className="hidden md:flex">
            <Button asChild>
              <Link href="/contact">Get Protected</Link>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
}
