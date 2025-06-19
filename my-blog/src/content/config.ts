import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    heroImageAlt: z.string().optional(),
    // 标签 / Tags
    tags: z.array(z.string()).default([]),
    // 是否为草稿 / Is draft
    draft: z.boolean().default(false),
    // 阅读时间（分钟）/ Reading time (minutes)
    readingTime: z.number().optional(),
    // 作者 / Author
    author: z.string().default('Site Author'),
    // 分类 / Category
    category: z.enum(['技术', '生活', '思考', 'Tech', 'Life', 'Thoughts']).default('技术'),
  }),
});

export const collections = { blog };