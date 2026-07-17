import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const memories = defineCollection({
  loader: glob({ pattern: '*.md', base: './src/content/memories' }),
  schema: z.object({
    title: z.string(),
    author: z.string(),
    image: z.string().optional(),
    // `video` is either a local asset path (e.g. assets/video/x.mp4) or an embed URL.
    video: z.string().optional(),
    poster: z.string().optional(),
    videoLink: z.string().optional(),
  }),
});

export const collections = { memories };
