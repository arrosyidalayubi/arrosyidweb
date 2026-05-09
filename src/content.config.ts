import { z, defineCollection } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishDate: z.date(),
    tags: z.array(z.string()), // Wajib ada untuk fitur Related Posts
    coverImage: z.string().optional(),
  }),
});

const vlogCollection = defineCollection({
  type: 'content',
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