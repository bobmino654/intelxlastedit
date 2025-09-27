'use client';

import Link from 'next/link';
import { NAV_LINKS } from '@/lib/routes';
import { Logo } from './logo';

export function MobileNav() {
  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center border-b pb-4">
        <Logo />
      </div>
      <nav className="flex-1 space-y-4 pt-4">
        {NAV_LINKS.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block w-full rounded-md p-2 text-lg font-medium hover:bg-accent hover:text-accent-foreground"
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
