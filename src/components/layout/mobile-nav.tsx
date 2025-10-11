
'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/routes';
import { Logo } from './logo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

export function MobileNav() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b pb-4">
        <Logo />
      </div>
      <nav className="flex-1 space-y-2 pt-4">
        {NAV_LINKS.map((link) => (
            link.subLinks ? (
                <Accordion type="single" collapsible key={link.href}>
                    <AccordionItem value={link.label} className="border-b-0">
                        <AccordionTrigger className="w-full justify-between rounded-md p-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground hover:no-underline">
                             <Link href={link.href}>{link.label}</Link>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                            {link.subLinks.map(subLink => (
                                <Link
                                    key={subLink.href}
                                    href={subLink.href}
                                    className="block w-full rounded-md p-2 text-base font-medium hover:bg-accent hover:text-accent-foreground"
                                >
                                    {subLink.label}
                                </Link>
                            ))}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            ) : (
                <Link
                    key={link.href}
                    href={link.href}
                    className="block w-full rounded-md p-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground"
                >
                    {link.label}
                </Link>
            )
        ))}
      </nav>
    </div>
  );
}
