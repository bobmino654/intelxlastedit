
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
                      <NavigationMenuTrigger className={cn("nav-link", pathname.startsWith(link.href) && 'nav-link-active')}>
                          {link.label}
                      </NavigationMenuTrigger>
                      <NavigationMenuContent>
                        <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
                           <li className="row-span-3">
                             <NavigationMenuLink asChild>
                               <Link
                                 href="/services"
                                 className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                               >
                                <div className="flex items-center gap-2">
                                    <svg
                                        className="h-8 w-8 text-accent"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    >
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                        <path d="m9.5 9 5 5"></path>
                                        <path d="m14.5 9-5 5"></path>
                                    </svg>
                                    <span className="font-headline text-2xl font-bold text-white">
                                        IntelX360
                                    </span>
                                </div>
                                 <div className="mb-2 mt-4 text-lg font-medium">
                                   IntelX360 Services
                                 </div>
                                 <p className="text-sm leading-tight text-muted-foreground">
                                   Our full suite of cybersecurity solutions.
                                 </p>
                               </Link>
                             </NavigationMenuLink>
                           </li>
                          {link.subLinks.map((subLink) => (
                             <ListItem
                              key={subLink.label}
                              title={subLink.label}
                              href={subLink.href}
                              className={cn(pathname === subLink.href && 'bg-accent/80')}
                            >
                              {subLink.description}
                            </ListItem>
                          ))}
                        </ul>
                      </NavigationMenuContent>
                    </>
                  ) : (
                    <Link href={link.href} legacyBehavior passHref>
                      <NavigationMenuLink asChild className={cn(navigationMenuTriggerStyle(), "nav-link", pathname === link.href && link.href !== '/' && 'nav-link-active')}>
                        <a>{link.label}</a>
                      </NavigationMenuLink>
                    </Link>
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

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"
