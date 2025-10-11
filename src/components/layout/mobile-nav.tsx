
'use client';

import { usePathname } from 'next/navigation';
import { NAV_LINKS } from '@/lib/routes';
import { Logo } from './logo';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';
import { LinkComponent as Link } from "@/components/LinkComponent";

export function MobileNav() {
  const pathname = usePathname();
  const servicesDefaultValue = pathname.startsWith('/services') ? '/services' : undefined;

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b pb-4">
        <Logo />
      </div>
      <nav className="flex-1 space-y-2 pt-4">
        {NAV_LINKS.map((link) => (
            link.subLinks ? (
                <Accordion type="single" collapsible key={link.href} value={servicesDefaultValue} >
                    <AccordionItem value={link.href} className="border-b-0">
                        <AccordionTrigger className={cn("w-full justify-between rounded-md p-3 text-lg font-medium hover:no-underline", pathname.startsWith(link.href) ? 'text-accent' : '' )}>
                             <Link href={link.href}>{link.label}</Link>
                        </AccordionTrigger>
                        <AccordionContent className="pl-4">
                            {link.subLinks.map(subLink => (
                                <Link
                                    key={subLink.href}
                                    href={subLink.href}
                                    className={cn("block w-full rounded-md p-3 text-base font-medium", pathname === subLink.href ? 'bg-accent text-accent-foreground' : '')}
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
                    className={cn("block w-full rounded-md p-3 text-lg font-medium", pathname === link.href && link.href !== '/' ? 'bg-accent text-accent-foreground' : '')}
                >
                    {link.label}
                </Link>
            )
        ))}
      </nav>
       <div className="mt-auto border-t pt-4">
            <Button asChild className="w-full">
                <Link href="/contact">Get Protected</Link>
            </Button>
       </div>
    </div>
  );
}
