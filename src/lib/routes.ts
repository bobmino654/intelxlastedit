
export type NavLink = {
  href: string;
  label: string;
  subLinks?: NavLink[];
};

export const allServiceLinks = [
    { href: '/services/penetration-testing', label: 'Penetration Testing' },
    { href: '/services/threat-intelligence', label: 'Threat Intelligence' },
    { href: '/services/incident-response', label: 'Incident Response' },
    { href: '/services/managed-security', label: 'Managed Security (MSSP)' },
    { href: '/services/virtual-ciso', label: 'Virtual CISO (vCISO)' },
    { href: '/services/cloud-security', label: 'Cloud Security' },
    { href: '/services/attack-surface-management', label: 'Attack Surface Management' },
    { href: '/services/brand-protection', label: 'Brand Protection' },
    { href: '/services/supply-chain-threat-intelligence', label: 'Supply Chain Intelligence' },
];

export const NAV_LINKS: NavLink[] = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { 
    href: '/services', 
    label: 'Services',
    subLinks: allServiceLinks
  },
  { href: '/cybersecurity-outsourcing', label: 'Cybersecurity Outsourcing' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/resources', label: 'Resources' },
  { href: '/case-studies', label: 'Case Studies' },
  { href: '/contact', label: 'Contact' },
];
