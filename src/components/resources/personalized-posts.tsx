'use client';

import { useState } from 'react';
import { useFlow } from '@genkit-ai/next/client';
import { personalizedBlogRecommendationsFlow } from '@/ai/flows/personalized-blog-recommendations';
import { blogPosts } from '@/lib/data';
import { Button } from '../ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Loader2 } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import Link from 'next/link';
import { Badge } from '../ui/badge';

const userProfiles = {
  'ciso': 'Visited pricing page, searched for "compliance", read article on "Ransomware Trends"',
  'devops': 'Visited services page, searched for "cloud security", read "Securing Your Multi-Cloud Environment" blog post',
  'analyst': 'Used IOC lookup tool, visited threat intelligence service page, read "AI-Powered Phishing" blog',
};

type UserProfile = keyof typeof userProfiles;

export function PersonalizedPosts() {
  const [run, recommendations, loading] = useFlow(personalizedBlogRecommendationsFlow);
  const [selectedProfile, setSelectedProfile] = useState<UserProfile>('ciso');

  const getRecommendations = () => {
    run({
      userActivity: userProfiles[selectedProfile],
      blogPostTitles: blogPosts.map(p => p.title),
    });
  };

  const recommendedBlogPosts = recommendations?.recommendedPosts
    ? blogPosts.filter(p => recommendations.recommendedPosts.includes(p.title))
    : [];

  return (
    <section className="mt-20 rounded-lg bg-card p-8">
      <h2 className="text-center font-headline text-3xl font-bold tracking-tight sm:text-4xl">
        For You
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-center text-lg text-muted-foreground">
        AI-powered blog recommendations based on your activity. Select a profile to simulate.
      </p>
      <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
        <Select onValueChange={(value: UserProfile) => setSelectedProfile(value)} defaultValue={selectedProfile}>
          <SelectTrigger className="w-full sm:w-[280px]">
            <SelectValue placeholder="Select a user profile" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="ciso">CISO / Security Leader</SelectItem>
            <SelectItem value="devops">DevOps / Cloud Engineer</SelectItem>
            <SelectItem value="analyst">Security Analyst</SelectItem>
          </SelectContent>
        </Select>
        <Button onClick={getRecommendations} disabled={loading} className="w-full sm:w-auto">
          {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          Get Recommendations
        </Button>
      </div>

      {loading && <div className="mt-8 text-center">Thinking...</div>}

      {recommendations && recommendedBlogPosts.length > 0 && (
         <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2">
            {recommendedBlogPosts.map(post => (
                <Card key={post.id}>
                    <CardHeader>
                         <div className="flex items-center gap-4 text-sm text-muted-foreground">
                            <Badge variant="outline">{post.category}</Badge>
                            <span>{post.date}</span>
                        </div>
                        <CardTitle className="font-headline mt-2 text-lg">{post.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <p className="text-sm text-muted-foreground">{post.summary}</p>
                        <Button variant="link" asChild className="p-0 text-accent mt-4">
                            <Link href="#">Read More &rarr;</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
         </div>
      )}

      {recommendations && recommendedBlogPosts.length === 0 && !loading && (
        <p className="mt-8 text-center text-muted-foreground">No specific recommendations found. Try another profile!</p>
      )}
    </section>
  );
}
