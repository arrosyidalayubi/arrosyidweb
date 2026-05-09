import { defineCollection } from 'astro:content';
import z from 'astro/zod';
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/blog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()).optional(),
    coverImage: image().optional(), 
  }),
});

const vlogCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/vlog' }),
  schema: ({ image }) => z.object({
    title: z.string(),
    location: z.string(),
    publishDate: z.date(),
    gallery: z.array(image()).optional(), 
  }),
});

const projectCollection = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/proyek' }),
  // 1. Tambahkan ({ image }) di sini
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    client: z.string().optional(),
    role: z.string(),
    techStack: z.array(z.string()),
    publishDate: z.date(),
    // 2. Ubah coverImage menggunakan image()
    coverImage: image().optional(), 
    liveUrl: z.string().url().optional(),
    githubUrl: z.string().url().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'vlog': vlogCollection,
  'proyek': projectCollection,
};