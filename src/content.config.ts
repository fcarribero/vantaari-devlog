import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const devlogSchema = z.object({
  title: z.string(),
  date: z.coerce.date(),
  category: z.string().default('devlog'),
  tags: z.array(z.string()).default([]),
  cover: z.string().optional(),
});

const devlogEs = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog/es' }),
  schema: devlogSchema,
});

const devlogEn = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/devlog/en' }),
  schema: devlogSchema,
});

export const collections = { devlogEs, devlogEn };
