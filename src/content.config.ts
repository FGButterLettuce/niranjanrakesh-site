import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    tagline: z.string(),
    year: z.string(),
    order: z.number(),
    status: z.string(),
    stack: z.array(z.string()),
    liveUrl: z.string().optional(),
    highlights: z.array(z.string()),
    // one-word flavor a theme MAY use for per-project accenting
    flavor: z.string(),
  }),
});

export const collections = { projects };
