import { Metadata } from 'next';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { CheckCircle, FileText, ChevronRight, Shield } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Cloud Security Services',
  description: 'Safeguard your infrastructure, applications, and data across AWS, Azure, and Google Cloud with our comprehensive cloud security services.',
};

const approachPhases = [
    { title: 'Discovery & Assessment', description: 'Inventory cloud assets across AWS, Azure, and GCP. Review IAM, storage, networking, logging, and monitoring configurations.' },
    { title: 'Security Posture Evaluation', description: 'Benchmark against CIS, NIST CSF, PCI-DSS, HIPAA, or your chosen framework. Assess alignment with Zero Trust principles.' },
    { title: 'Threat Modeling', description: 'Simulate attacker pathways in cloud-native contexts, from lateral movement to privilege escalation.' },
    { title: 'Remediation & Hardening', description: 'Deliver prioritized recommendations and IaC (Infrastructure as Code) guidance to prevent misconfigurations.' },
    { title: 'Ongoing Monitoring', description: 'Optional continuous visibility and compliance dashboards with alerts for risky changes.' },
];

const keyAreas = [
    'IAM and role-based access controls.',
    'Network security groups, firewalls, and segmentation.',
    'Storage and data encryption policies.',
    'Logging, monitoring, and incident alerting.',
    'Container and Kubernetes cluster security.',
    'Cloud-native threat detection integration (e.g., GuardDuty, Azure Defender, Chronicle).',
];

const benefits = [
    'Reduced risk—identify and fix misconfigurations before attackers exploit them.',
    'Compliance readiness—meet requirements for PCI-DSS, HIPAA, ISO, SOC2, and more.',
    'Cloud-native defense—integrate monitoring and threat detection across AWS, Azure, and GCP.',
    'Operational efficiency—automation-friendly recommendations to reduce human error.',
    'Future-proof—ensure your environment scales securely as workloads grow.',
];

const deliverables = [
    'Cloud configuration and security posture report.',
    'Compliance gap analysis against chosen frameworks.',
    'Detailed remediation playbook with code-level fixes.',
    'Architecture review with best practice alignment.',
    'Optional continuous monitoring dashboards.',
    'Executive summary with risk heatmap.',
];

const faqItems = [
    { 
        question: "Do you provide multi-cloud security coverage?",
        answer: "Yes. We cover AWS, Azure, and GCP — individually or across hybrid/multi-cloud deployments."
    },
    {
        question: "Can you integrate with our DevOps pipelines?",
        answer: "Absolutely. We provide Infrastructure as Code (IaC) security recommendations and CI/CD integration guidance."
    },
    {
        question: "Will this help us pass compliance audits?",
        answer: "Yes. We map findings to PCI-DSS, HIPAA, SOC2, ISO 27001, and other standards, and provide evidence packages for auditors."
    }
];

export default function CloudSecurityPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          Cloud Security
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          IntelX360’s cloud security framework combines automation, compliance expertise, and hands-on reviews to give organizations full visibility and control over their cloud footprint.
        </p>
      </section>

      <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Our Approach
        </h2>
        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
            {approachPhases.map((phase) => (
                <Card key={phase.title} className="bg-card/50 text-center">
                    <CardHeader>
                        <CardTitle className="font-headline text-xl text-accent">{phase.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-muted-foreground">{phase.description}</p>
                    </CardContent>
                </Card>
            ))}
        </div>
      </section>

      <section className="mt-10 rounded-lg bg-card p-8 md:p-12">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    <CheckCircle className="mr-3 h-6 w-6" />
                    Key Benefits
                </h3>
                <ul className="mt-6 space-y-4">
                    {benefits.map((benefit, i) => (
                        <li key={i} className="flex items-start">
                            <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{benefit}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                    <FileText className="mr-3 h-6 w-6" />
                    Deliverables
                </h3>
                <ul className="mt-6 space-y-4">
                    {deliverables.map((item, i) => (
                        <li key={i} className="flex items-start">
                             <ChevronRight className="mr-2 mt-1 h-5 w-5 flex-shrink-0 text-primary" />
                            <span className="text-muted-foreground">{item}</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
        <div className="mt-12 border-t border-border pt-8">
             <h3 className="flex items-center font-headline text-2xl font-bold text-accent">
                <Shield className="mr-3 h-6 w-6" />
                Key Areas We Cover
            </h3>
            <ul className="mt-4 grid grid-cols-1 gap-x-8 gap-y-2 text-muted-foreground md:grid-cols-2">
                {keyAreas.map((area, i) => (
                    <li key={i} className="flex items-start">
                        <CheckCircle className="mr-3 mt-1 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{area}</span>
                    </li>
                ))}
            </ul>
        </div>
      </section>

       <section className="mt-20">
        <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
          Frequently Asked Questions
        </h2>
        <div className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, i) => (
                <AccordionItem value={`item-${i}`} key={i}>
                    <AccordionTrigger className="text-left font-headline text-lg hover:text-accent">
                        {item.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-muted-foreground">
                        {item.answer}
                    </AccordionContent>
                </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      <section className="mt-10 text-center">
        <Card className="mx-auto max-w-2xl bg-primary/5">
          <CardHeader>
            <CardTitle className="font-headline text-2xl text-accent">Make your cloud secure, compliant, and resilient.</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">Leverage the power and scalability of the cloud while knowing your digital assets are protected, compliant, and resilient.</p>
            <Button size="lg" asChild className="mt-6">
              <Link href="/contact">Book a Cloud Security Assessment</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
