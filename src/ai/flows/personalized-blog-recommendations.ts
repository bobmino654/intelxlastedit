// src/ai/flows/personalized-blog-recommendations.ts
'use server';

/**
 * @fileOverview Recommends blog posts based on user activity.
 *
 * - getPersonalizedBlogRecommendations - A function that returns personalized blog recommendations.
 * - PersonalizedBlogRecommendationsInput - The input type for the getPersonalizedBlogRecommendations function.
 * - PersonalizedBlogRecommendationsOutput - The return type for the getPersonalizedBlogRecommendations function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedBlogRecommendationsInputSchema = z.object({
  userActivity: z
    .string()
    .describe(
      'A description of the user\'s recent activity on the site, including pages visited, searches performed, and content interacted with.'
    ),
  blogPostTitles: z
    .string()
    .array()
    .describe('A list of available blog post titles.'),
});
export type PersonalizedBlogRecommendationsInput = z.infer<
  typeof PersonalizedBlogRecommendationsInputSchema
>;

const PersonalizedBlogRecommendationsOutputSchema = z.object({
  recommendedPosts: z
    .string()
    .array()
    .describe(
      'A list of blog post titles recommended for the user, based on their activity.'
    ),
});
export type PersonalizedBlogRecommendationsOutput = z.infer<
  typeof PersonalizedBlogRecommendationsOutputSchema
>;

export async function getPersonalizedBlogRecommendations(
  input: PersonalizedBlogRecommendationsInput
): Promise<PersonalizedBlogRecommendationsOutput> {
  return personalizedBlogRecommendationsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedBlogRecommendationsPrompt',
  input: {
    schema: PersonalizedBlogRecommendationsInputSchema,
  },
  output: {
    schema: PersonalizedBlogRecommendationsOutputSchema,
  },
  prompt: `You are a blog recommendation expert. Given a user's recent activity and a list of blog posts, recommend the most relevant blog posts to the user.

User Activity: {{{userActivity}}}

Available Blog Posts: {{#each blogPostTitles}}- {{{this}}}\n{{/each}}

Based on the user's recent activity, which blog posts would you recommend?  Just return the titles of the blog posts.

Ensure that the blog posts you recommend are from the list of available blog posts.
`,
});

const personalizedBlogRecommendationsFlow = ai.defineFlow(
  {
    name: 'personalizedBlogRecommendationsFlow',
    inputSchema: PersonalizedBlogRecommendationsInputSchema,
    outputSchema: PersonalizedBlogRecommendationsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
