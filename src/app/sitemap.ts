import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.intelx360.com';

  const staticPages = [
    '/',
    '/about',
    '/case-studies',
    '/contact',
    '/cybersecurity-outsourcing',
    '/pricing',
    '/pricing/enterprise',
    '/pricing/personal',
    '/pricing/smb',
    '/privacy-policy',
    '/resources',
    '/services',
    '/services/attack-surface-management',
    '/services/brand-protection',
    '/services/cloud-security',
    '/services/incident-response',
    '/services/managed-security',
    '/services/penetration-testing',
    '/services/supply-chain-threat-intelligence',
    '/services/threat-intelligence',
    '/services/virtual-ciso',
    '/terms-of-service',
    '/cookies-policy',
  ];

  const sitemapEntries: MetadataRoute.Sitemap = staticPages.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));

  return sitemapEntries;
}
