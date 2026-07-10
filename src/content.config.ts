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
    // optional lead visual shown on home spreads, path under public/
    image: z.string().optional(),
    // optional product screenshots rendered after the article body
    figures: z
      .array(z.object({ src: z.string(), caption: z.string() }))
      .default([]),
    // 'phones' lays figures out three-up for tall app-store shots
    figuresLayout: z.enum(['wide', 'phones']).default('wide'),
  }),
});

const designs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/designs' }),
  schema: z.object({
    title: z.string(),
    category: z.string(),
    year: z.string(),
    order: z.number(),
    image: z.string(), // path under public/, e.g. "images/work-football.webp"
    // showcase pieces get large cards in the archive section; the rest appear in the index list
    featured: z.boolean().default(false),
    // optional gallery rendered by each direction's detail template after the body
    figures: z
      .array(z.object({ src: z.string(), caption: z.string() }))
      .default([]),
  }),
});

export const collections = { projects, designs };
