import { defineCollection, z } from 'astro:content';

const post = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    hero: z.string().optional(),

    category: z.string().default('none'),
    subcategory: z.string().default('none'),
    series: z.string().default('none'),
    tags: z.array(z.string()).default([]),

    // Transform string to Date object
    createdDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),

    isShow: z.boolean().default(true),
  }),
});

export const collections = { post };
