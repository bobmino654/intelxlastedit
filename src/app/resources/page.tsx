import { Metadata } from 'next';
import { ToolsSection } from '@/components/resources/tools-section';
import { BlogSection } from '@/components/resources/blog-section';
import { PersonalizedPosts } from '@/components/resources/personalized-posts';

export const metadata: Metadata = {
  title: 'Resources & Free Tools',
  description: 'Access free cybersecurity tools, read our latest research on the IntelX blog, and get personalized threat intelligence.',
};

export default function ResourcesPage() {
  return (
    <div className="container py-12 md:py-20">
      <section className="text-center">
        <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
          IntelX Labs Resources
        </h1>
        <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
          Empowering the community with free tools, cutting-edge research, and actionable intelligence from our experts.
        </p>
      </section>

      <ToolsSection />
      
      <PersonalizedPosts />

      <BlogSection />
    </div>
  );
}
