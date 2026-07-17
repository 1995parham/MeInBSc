import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const memories = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/memories' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string().optional(),
    video: z.string().optional(),
  }),
});

export const collections = { memories };
