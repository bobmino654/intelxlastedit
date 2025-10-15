
import Image from 'next/image';
import { Github, Linkedin, Twitter, Facebook } from 'lucide-react';
import { NAV_LINKS } from '@/lib/routes';
import { Logo } from './logo';
import { contactDetails } from '@/lib/data';
import { LinkComponent as Link } from '@/components/LinkComponent';

const certifications = [
  { name: 'CEH', logo: '/assets/ceh.png', width: 80, height: 80 },
  { name: 'CISSP', logo: '/assets/cissp.png', width: 90, height: 80 },
  { name: 'OSCP', logo: '/assets/oscp.png', width: 80, height: 80 },
  { name: 'ISO 27001', logo: '/assets/iso27001.png', width: 80, height: 80 },
  { name: 'SOC 2 Type II', logo: '/assets/soc.png', width: 100, height: 80 },
  { name: 'Sophos Cloud Security', logo: '/assets/sophoscloudsecurity.png', width: 100, height: 80 },
];


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
              <Link href="https://www.facebook.com/intelx360" aria-label="Facebook">
                <Facebook className="h-6 w-6 text-muted-foreground transition-colors hover:text-accent" />
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
                <p>General: {contactDetails.emails.general}</p>
                <p>Support: {contactDetails.emails.support}</p>
              </address>
            </div>
          </div>
        </div>
        
        <div className="my-12 border-t border-border/40"></div>

        <div className="text-center">
            <h3 className="font-headline text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                Certified • Trusted • Verified
            </h3>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-8 md:gap-12">
                {certifications.map((cert) => (
                    <div key={cert.name} className="transition-transform duration-300 hover:scale-110">
                        <Image
                            src={cert.logo}
                            alt={`${cert.name} Certification`}
                            width={cert.width}
                            height={cert.height}
                            className="object-contain filter grayscale hover:filter-none"
                            style={{ color: '#d1d5db' }}
                        />
                    </div>
                ))}
            </div>
        </div>

        <div className="mt-12 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} IntelX360 Cybersecurity Solutions. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
