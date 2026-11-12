import { defineCollection, defineConfig } from '@content-collections/core';
import { compileMDX, type Options as MdxOptions } from '@content-collections/mdx';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { z } from 'zod';

// Shiki resalta en build con dos temas; el CSS elige según la clase de <html>.
const prettyCodeOptions = {
  theme: { light: 'github-light', dark: 'github-dark' },
  keepBackground: false,
};

const mdxOptions: MdxOptions = {
  remarkPlugins: [remarkGfm],
  rehypePlugins: [rehypeSlug, [rehypePrettyCode, prettyCodeOptions]],
};

const legal = defineCollection({
  name: 'legal',
  directory: 'src/content/legal',
  include: '**/*.mdx',
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    content: z.string(),
  }),
  transform: async (doc, ctx) => {
    const body = await compileMDX(ctx, doc, mdxOptions);
    return { ...doc, slug: doc._meta.path, body };
  },
});

export default defineConfig({
  content: [legal],
});
