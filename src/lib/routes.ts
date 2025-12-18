
export type NavLink = {
  href: string;
  label: string;
  description?: string;
  subLinks?: NavLink[];
};

export const allServiceLinks: NavLink[] = [
    { href: '/services/penetration-testing', label: 'Penetration Testing', description: 'Simulated attacks to find vulnerabilities.' },
    { href: '/services/threat-intelligence', label: 'Threat Intelligence', description: 'Actionable insights on emerging threats.' },
    { href: '/services/incident-response', label: 'Incident Response', description: 'Rapidly recover from security incidents.' },
    { href: '/services/managed-security', label: 'Managed Security (MSSP)', description: '24/7 monitoring and response.' },
    { href: '/services/virtual-ciso', label: 'Virtual CISO (vCISO)', description: 'Executive-level security leadership.' },
    { href: '/services/cloud-security', label: 'Cloud Security', description: 'Secure your AWS, Azure, and GCP environments.' },
    { href: '/services/attack-surface-management', label: 'Attack Surface Management', description: 'Discover and monitor external assets.' },
    { href: '/services/brand-protection', label: 'Brand Protection', description: 'Takedown phishing sites and fake apps.' },
    { href: '/services/supply-chain-threat-intelligence', label: 'Supply Chain Intelligence', description: 'Monitor third-party vendor risks.' },
];

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/services', 
    label: 'Services',
    subLinks: allServiceLinks
  },
  { href: '/government-solutions', label: 'Government Solutions' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];
