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
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(), // Deskripsi singkat untuk kartu di halaman depan
    client: z.string().optional(), // Nama klien atau institusi
    role: z.string(), // Peran Anda (misal: "Fullstack Developer")
    techStack: z.array(z.string()), // Array teknologi yang digunakan
    publishDate: z.date(),
    coverImage: image().optional(),
    liveUrl: z.url().optional(), // Link ke web asli jika masih aktif
    githubUrl: z.url().optional(),
  }),
});

export const collections = {
  'blog': blogCollection,
  'vlog': vlogCollection,
  'proyek': projectCollection,
};