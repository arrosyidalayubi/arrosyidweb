import { defineCollection } from 'astro:content';
import z from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()), // Wajib ada untuk fitur Related Posts
    coverImage: z.string().optional(),
  }),
});

const vlogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vlog' }),
  schema: z.object({
    title: z.string(),
    location: z.string(),
    publishDate: z.date(),
    gallery: z.array(z.string()), // Array URL gambar untuk Mosaic Gallery
  }),
});

export const collections = {
  'blog': blogCollection,
  'vlog': vlogCollection,
};