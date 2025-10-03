import Link from 'next/link';
import { Github, Linkedin, Twitter } from 'lucide-react';
import { NAV_LINKS } from '@/lib/routes';
import { Logo } from './logo';
import { contactDetails } from '@/lib/data';

export function Footer() {
  return (
    <footer className="border-t border-border/40 bg-card">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="md:col-span-1">
            <Logo />
            <p className="mt-4 text-sm text-muted-foreground">
              Protecting Your Digital Future Today.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="https://x.com/IntelX360" aria-label="Twitter">
                <Twitter className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
              </Link>
              <Link href="https://www.linkedin.com/company/intelx360" aria-label="LinkedIn">
                <Linkedin className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
              </Link>
              <Link href="https://github.com/intelx360" aria-label="GitHub">
                <Github className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-8 md:col-span-3 md:grid-cols-3">
            <div>
              <h3 className="font-headline font-semibold">Navigation</h3>
              <ul className="mt-4 space-y-2">
                {NAV_LINKS.slice(0, 5).map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-sm text-muted-foreground hover:text-accent">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Legal</h3>
              <ul className="mt-4 space-y-2">
                <li><Link href="/privacy-policy" className="text-sm text-muted-foreground hover:text-accent">Privacy Policy</Link></li>
                <li><Link href="/terms-of-service" className="text-sm text-muted-foreground hover:text-accent">Terms of Service</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-headline font-semibold">Contact Us</h3>
              <address className="mt-4 space-y-2 not-italic text-sm text-muted-foreground">
                <p>{contactDetails.address}</p>
                <p>Phone: {contactDetails.phone}</p>
                <p>Email: {contactDetails.email}</p>
              </address>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} IntelX360 Cybersecurity Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
