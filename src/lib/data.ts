import { BarChart, BrainCircuit, Cloud, Server, ShieldCheck, Target, Users, Bot, Scale, Link2, FileCode } from 'lucide-react';

export const contactDetails = {
  address: '24 Mirage City, Cairo, Egypt',
  phone: '+20 1558107744',
  emails: {
    general: 'info@intelx360.com',
    support: 'support@intelx360.com',
  },
};

export const services = [
  {
    icon: Target,
    title: 'Penetration Testing',
    description: 'Simulate real-world attacks to identify and remediate vulnerabilities in your systems and applications.',
  },
  {
    icon: BrainCircuit,
    title: 'Threat Intelligence',
    description: 'Gain actionable insights into emerging threats, attack vectors, and malicious actors targeting your industry.',
  },
  {
    icon: ShieldCheck,
    title: 'Incident Response',
    description: 'Rapidly respond to and recover from security incidents with our expert digital forensics and response team.',
  },
  {
    icon: Server,
    title: 'Managed Security (MSSP)',
    description: '24/7 monitoring, management, and response for your security infrastructure by our dedicated SOC team.',
  },
  {
    icon: Users,
    title: 'Virtual CISO (vCISO)',
    description: 'Get executive-level security leadership and guidance without the cost of a full-time CISO.',
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    description: 'Secure your cloud environments (AWS, Azure, GCP) with our comprehensive compliance and configuration services.',
  },
];

export const allServices = [
    ...services,
    {
      icon: BarChart,
      title: 'Attack Surface Management (ASM)',
      description: 'Continuously discover, analyze, and monitor your external digital assets to reduce your attack surface.',
    },
    {
      icon: Bot,
      title: 'Brand Protection',
      description: 'Detect and take down phishing sites, fraudulent mobile apps, and social media impersonations targeting your brand.',
    },
    {
        icon: Link2,
        title: 'Supply Chain Threat Intelligence',
        description: 'Monitor your third-party ecosystem for risks and vulnerabilities that could impact your organization.'
    }
]

export const pricingPlans = [
  {
    name: 'Personal',
    price: 79,
    features: ['Basic monitoring', 'Quarterly breach check', 'Dark web alerts for 5 emails'],
    cta: 'Get Personal Plan',
    href: '/pricing/personal',
  },
  {
    name: 'SMB',
    price: 800,
    features: ['Full Attack Surface Management', 'Threat intelligence feeds', 'Incident response support (8 hours)', '24/7 Monitoring'],
    cta: 'Get SMB Plan',
    popular: true,
    href: '/pricing/smb',
  },
  {
    name: 'Enterprise',
    price: 4000,
    features: ['Global threat intelligence', 'Dedicated security analyst', 'Managed incident response', 'Full brand protection', 'Compliance reporting'],
    cta: 'Contact Sales',
    href: '/pricing/enterprise',
  },
];

export const teamMembers = [
  {
    name: 'Ahmed Awad',
    role: 'Chief Security Strategist',
    bio: 'With 20+ years in cybersecurity, Ahmed leads IntelX360 as the mastermind behind its threat intelligence platform—innovating to stay ahead and making the digital world safer.',
    imageId: '1',
  },
  {
    name: 'Mohamed Alhoseeny',
    role: 'Head of Threat Researchr',
    bio: 'Mohamed and his team of elite researchers work tirelessly to uncover new threats and protect our clients from emerging risks',
    imageId: '2',
  },
  {
    name: 'Yasmin',
    role: 'Head of Projects',
    bio: 'Orchestrates complex initiatives with precision and vision—turning strategies into impactful results.',
    imageId: '3',
  },
  {
    name: 'Nadeen',
    role: 'VP of Client Success',
    bio: 'Nadeen ensures that every IntelX360 client receives world-class service and achieves their security goals.',
    imageId: '4'
  }
];

export const testimonials = [
  {
    quote: "IntelX360's threat intelligence is second to none. They've helped us prevent numerous attacks before they could even launch.",
    name: 'CTO, Fortune 500 Financial',
    imageId: '5',
  },
  {
    quote: 'The vCISO service provided strategic direction that our startup desperately needed. Their expertise is invaluable.',
    name: 'CEO, HealthTech Startup',
    imageId: '6',
  },
  {
    quote: 'Their incident response team was phenomenal. They contained a major breach within hours and got us back online safely.',
    name: 'CIO, E-commerce Giant',
    imageId: '7',
  },
];

export const caseStudies = [
  {
    title: 'Preventing a Major Data Breach in the Financial Sector',
    clientIndustry: 'Finance',
    challenge: 'A major bank was facing sophisticated phishing campaigns and suspected an impending ransomware attack.',
    solution: 'IntelX360 deployed its Threat Intelligence and Brand Protection services. We identified the threat actor group, monitored their infrastructure, and initiated takedowns of their phishing sites.',
    outcome: 'The ransomware attack was thwarted, preventing millions in potential losses. The bank\'s customer trust was preserved.',
    imageId: '8',
  },
  {
    title: 'Securing a Fast-Growing SaaS Platform',
    clientIndustry: 'Technology / SaaS',
    challenge: 'A SaaS company needed to build a robust security program to meet enterprise client demands and achieve SOC 2 compliance.',
    solution: 'Our vCISO service developed a comprehensive security roadmap. We implemented Cloud Security best practices and conducted regular Penetration Testing.',
    outcome: 'The company successfully achieved SOC 2 Type II certification, unlocking major enterprise deals and increasing revenue by 40%.',
    imageId: '9'
  },
  {
    title: 'Responding to a Nation-State Attack on Critical Infrastructure',
    clientIndustry: 'Energy',
    challenge: 'An energy provider was targeted by a nation-state actor attempting to disrupt operations.',
    solution: 'IntelX360\'s Incident Response team was immediately deployed. Using advanced digital forensics, we identified the breach, contained the threat, and eradicated the actor from the network.',
    outcome: 'Critical infrastructure remained operational. IntelX360 provided attribution data to national security agencies and fortified the client\'s defenses against future attacks.',
    imageId: '10'
  }
];

export const freeTools = [
  {
    icon: ShieldCheck,
    title: 'Dark Web Scan',
    description: 'Check if your domain or email has been exposed in known data breaches on the dark web.',
    id: 'dark-web-scan',
  },
  {
    icon: Users,
    title: 'Account Breach Check',
    description: 'Search for a specific email address to see if it has been compromised in a data breach.',
    id: 'account-breach-check',
  },
  {
    icon: Target,
    title: 'Exposure & Vulnerability Check',
    description: 'Perform a basic scan of your domain to find open ports and potential vulnerabilities.',
    id: 'exposure-check',
  },
  {
    icon: FileCode,
    title: 'IOC Lookup',
    description: 'Look up Indicators of Compromise (IP, domain, hash) against our threat database.',
    id: 'ioc-lookup',
  },
  {
    icon: Scale,
    title: 'SOC Utilities',
    description: 'A suite of tools for security analysts, including URL scanners, EML analyzers, and more.',
    id: 'soc-utilities',
  }
];

export const blogPosts = [
  {
    id: '1',
    title: 'The Rise of AI-Powered Phishing Attacks',
    category: 'Threat Intelligence',
    date: '2024-07-15',
    author: 'John Doe',
    summary: 'Learn how threat actors are using AI to create more sophisticated and convincing phishing emails.',
    content: '<p>Content coming soon...</p>',
    imageId: '11',
  },
  {
    id: '2',
    title: 'A Deep Dive into the Latest Ransomware Trends',
    category: 'Incident Response',
    date: '2024-07-10',
    author: 'Jane Smith',
    summary: 'Explore the evolving tactics of ransomware gangs and how to defend your organization.',
    content: '<p>Content coming soon...</p>',
    imageId: '12',
  },
  {
    id: '3',
    title: 'Securing Your Multi-Cloud Environment: A Practical Guide',
    category: 'Cloud Security',
    date: '2024-07-05',
    author: 'Peter Jones',
    summary: 'Best practices for managing security and compliance across AWS, Azure, and GCP.',
    content: '<p>Content coming soon...</p>',
    imageId: '13',
  },
  {
    id: '4',
    title: 'Building an Effective Attack Surface Management Program',
    category: 'ASM',
    date: '2024-06-28',
    author: 'Samantha Williams',
    summary: 'A step-by-step guide to discovering, analyzing, and reducing your external attack surface.',
    content: '<p>Content coming soon...</p>',
    imageId: '14'
  }
];
